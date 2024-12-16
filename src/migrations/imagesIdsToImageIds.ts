/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"

import { renameField } from "helpers/dbOperations"
import type { MigrationInfo } from "types/migration"

/**
 * Information about this migration script.
 */
export const info__imagesIdsToImageIds: MigrationInfo = {
	name: "imagesIdsToImageIds",
	description: "Rename the field 'imagesIds' to 'imageIds' in the 'collections' collection",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function imagesIdsToImageIds(_db: Db, _collection: Collection, _count: number) {
	await renameField(_collection, {}, "imagesIds", "imageIds")
}
