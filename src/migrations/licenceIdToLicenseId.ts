/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"

import { renameField } from "helpers/dbOperations"
import type { MigrationInfo } from "types/migration"

/**
 * Information about this migration script.
 */
export const info__licenceIdToLicenseId: MigrationInfo = {
	name: "licenceIdToLicenseId",
	description: "Rename the field 'licenceId' to 'licenseId' in the 'usages' collection",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function licenceIdToLicenseId(_db: Db, _collection: Collection, _count: number) {
	await renameField(_collection, {}, "licenceId", "licenseId")
}
