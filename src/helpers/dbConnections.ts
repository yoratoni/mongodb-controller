import type { Db } from "mongodb"
import { MongoClient } from "mongodb"

import logger from "utils/logger"

/**
 * Stores the MongoClient instance, based on the `MONGODB_SERVER_URL` env variable.
 */
let client: MongoClient

/**
 * Connects to the MongoDB server and a specific database,
 * based on the `MONGODB_SERVER_URL` & `DATABASE_NAME` env variables.
 * @returns The database.
 */
export async function connectToDb() {
	if (!process.env.MONGODB_SERVER_URL) {
		logger.error("MongoDB server URL not found")
		return
	}

	if (!client) {
		client = new MongoClient(process.env.MONGODB_SERVER_URL)
	}

	try {
		await client.connect()
		logger.info("Successfully connected to the MongoDB server")
	} catch (error) {
		logger.error("Error connecting to the MongoDB server", error)
	}

	if (!process.env.DATABASE_NAME) {
		logger.error("Database name not found")
		return
	}

	const db = client.db(process.env.DATABASE_NAME)

	if (!db) {
		logger.error("Database not found / instantiated")
		return
	}

	logger.info(`Successfully connected to the database: '${process.env.DATABASE_NAME}'`)

	return db
}

/**
 * Connects to a specific collection in the database.
 * @param db The database.
 * @param collectionName The name of the collection.
 * @returns The collection.
 */
export function connectToCollection(db: Db | undefined, collectionName: string) {
	if (!db) {
		logger.error("Database not found / instantiated")
		return
	}

	const collection = db.collection(collectionName)

	if (!collection) {
		logger.error("Collection not found / instantiated")
		return
	}

	logger.info(`Successfully connected to the collection: '${collectionName}'`)

	return collection
}

/**
 * Closes the MongoDB server connection.
 */
export async function closeMongoDbServerConnection() {
	if (!client) {
		logger.error("MongoDB server not found / instantiated")
		return
	}

	try {
		await client.close()
		logger.info("Successfully closed the MongoDB server connection")
	} catch (error) {
		logger.error("Error closing the MongoDB server connection", error)
	}
}
