/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"

import { renameCollection } from "helpers/dbOperations"
import type { MigrationInfo } from "types/migration"

/**
 * Information about this migration script.
 */
export const info__licencesToLicenses: MigrationInfo = {
	name: "licencesToLicenses",
	description: "Rename the 'licences' collection to 'licenses'",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function licencesToLicenses(_db: Db, _collection: Collection, _count: number) {
	await renameCollection(_collection, "licenses")
}
