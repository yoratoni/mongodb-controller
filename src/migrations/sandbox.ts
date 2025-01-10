/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"

import { findDocuments } from "helpers/dbOperations"
import type { MigrationInfo } from "types/migration"
import logger from "utils/logger"

/**
 * Information about this migration script.
 */
export const info__sandbox: MigrationInfo = {
	name: "sandbox",
	description: "A sandbox migration script for fast modifications.",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function sandbox(_db: Db, _collection: Collection, _count: number) {
	// // Get all jobs where createdAt field does not exist
	// const documents = await findDocuments(_collection, { createdAt: { $exists: false } })

	// if (!documents) {
	// 	logger.error("No documents found.")
	// 	return
	// }

	// // Log the result
	// logger.info(`Found ${documents?.length ?? 0} documents.`)

	// Get all purchases where "txHashes" exists and has more than 1 element
	const documents = await findDocuments(_collection, { txHashes: { $exists: true, $ne: [] } })

	if (!documents) {
		logger.error("No documents found.")
		return
	}

	// Log the result
	logger.info(`Found ${documents?.length ?? 0} documents.`)
}
