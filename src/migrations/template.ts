/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"
import type { MigrationInfo } from "types/migration"
import logger from "utils/logger"

/**
 * Information about this migration script.
 */
export const info__template: MigrationInfo = {
	name: "template",
	description: "Migration template",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
// biome-ignore lint/suspicious/useAwait: This is a template..
export default async function template(_db: Db, _collection: Collection, _count: number) {
	logger.warn("Running the template, seriously? It won't do anything!")
}
