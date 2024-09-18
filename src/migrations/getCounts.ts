import type { Collection, Db } from "mongodb"

import type { MigrationInfo } from "types/migration"
import logger from "utils/logger"

/**
 * Information about this migration script.
 */
export const info__getCounts: MigrationInfo = {
	name: "getCounts",
	description: "Getting the number of Aliases, artists and generated images per month",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getCounts(_db: Db, _collection: Collection, _count: number) {
	const count1 = await _collection.countDocuments({
		createdAt: { $gte: new Date("2023-12-01"), $lt: new Date("2024-01-01") },
		status: "COMPLETED",
		type: "generate",
	})
	const count2 = await _collection.countDocuments({
		createdAt: { $gte: new Date("2024-01-01"), $lt: new Date("2024-02-01") },
		status: "COMPLETED",
		type: "generate",
	})
	const count3 = await _collection.countDocuments({
		createdAt: { $gte: new Date("2024-02-01"), $lt: new Date("2024-03-01") },
		status: "COMPLETED",
		type: "generate",
	})
	const count4 = await _collection.countDocuments({
		createdAt: { $gte: new Date("2024-03-01"), $lt: new Date("2024-04-01") },
		status: "COMPLETED",
		type: "generate",
	})
	const count5 = await _collection.countDocuments({
		createdAt: { $gte: new Date("2024-04-01"), $lt: new Date("2024-05-01") },
		status: "COMPLETED",
		type: "generate",
	})
	const count6 = await _collection.countDocuments({
		createdAt: { $gte: new Date("2024-05-01"), $lt: new Date("2024-06-01") },
		status: "COMPLETED",
		type: "generate",
	})

	logger.info(`Count for December 2023: ${count1}`)
	logger.info(`Count for January 2024: ${count2}`)
	logger.info(`Count for February 2024: ${count3}`)
	logger.info(`Count for March 2024: ${count4}`)
	logger.info(`Count for April 2024: ${count5}`)
	logger.info(`Count for May 2024 (not finished): ${count6}`)
}
