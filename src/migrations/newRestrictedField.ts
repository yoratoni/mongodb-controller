/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"

import { addFieldToCollection } from "helpers/dbOperations"
import type { MigrationInfo } from "types/migration"

/**
 * Information about this migration script.
 */
export const info__newRestrictedField: MigrationInfo = {
	name: "newRestrictedField",
	description: "Add a new 'restricted' field to the 'aliases' collection (default to false)",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function newRestrictedField(_db: Db, _collection: Collection, _count: number) {
	await addFieldToCollection(_collection, {}, "restricted", false)
}
