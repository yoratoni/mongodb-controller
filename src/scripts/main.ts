/* eslint-disable @typescript-eslint/ban-types */
import { config } from "dotenv"
import minimist from "minimist"

import { closeMongoDbServerConnection, connectToCollection, connectToDb } from "helpers/dbConnections"
import * as allMigrations from "migrations"
import type { MigrationInfo } from "types/migration"
import logger from "utils/logger"

// Load environment variables from .env file
config()

// biome-ignore lint/complexity/noBannedTypes: Cannot infer the type of the migration functions..
type Func = Function

/**
 * Main entry point of the controller.
 */
async function main() {
	if (!process.env.MONGODB_SERVER_URL) logger.error("MongoDB server URL not found")
	if (!process.env.DATABASE_NAME) logger.error("Database name not found")
	if (!process.env.DATABASE_COLLECTION) logger.error("Database collection not found")

	// Get the command line arguments
	const argv = minimist(process.argv.slice(2))

	// Typing the migrations object
	const migrations = allMigrations as { [key: string]: unknown }

	// Recovering the migration scripts
	const migrationScripts = []

	for (const element in migrations) {
		const migrationScript = {} as { info: MigrationInfo; function: Func }

		if (element.includes("info__")) {
			migrationScript.info = migrations[element] as MigrationInfo

			// Recover the function name from the info name
			const functionName = element.replace("info__", "")
			migrationScript.function = migrations[functionName] as Func

			migrationScripts.push(migrationScript)
		}
	}

	// List all the available migration scripts
	if ("list" in argv || "l" in argv) {
		if (migrationScripts.length === 0) {
			logger.info("No migration scripts found.. Add some to the 'src/migrations' folder!")
			return
		}

		logger.info("Available migration scripts:")

		for (const script of migrationScripts) {
			// Skip the template
			if (script.info.name === "template") continue

			logger.info(`- '${script.info.name}' (${script.info.description}) by ${script.info.author}.`)
		}

		return
	}

	// Run a specific migration script
	if ("run" in argv || "r" in argv) {
		const scriptName = argv.run || argv.r

		if (!scriptName) {
			logger.error("No migration script specified to run")
			return
		}

		const script = migrationScripts.find(s => s.info.name === scriptName)

		if (!script) {
			logger.error(`Migration script '${scriptName}' not found`)
			return
		}

		// Load the database
		const db = await connectToDb()

		if (!db) {
			logger.error("Database not found / instantiated")
			return
		}

		// Load the collection
		const collection = connectToCollection(db, process.env.DATABASE_COLLECTION as string)

		if (!collection) {
			logger.error("Collection not found / instantiated")
			return
		}

		// Count the number of documents in the collection
		const documentCount = await collection.estimatedDocumentCount()
		logger.verbose(`Number of documents in the collection: ${documentCount}`)

		// Run the migration script
		console.log("")
		logger.info("Running the following migration script:")
		logger.info(`${script.info.name} by ${script.info.author} (${script.info.description}).`)

		console.log("")
		await script.function(db, collection, documentCount)
		console.log("")

		// Close the MongoDB server connection
		await closeMongoDbServerConnection()

		return
	}
}

main()
