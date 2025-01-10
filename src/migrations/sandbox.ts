/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"
import type { MigrationInfo } from "types/migration"

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
	// "purchases": Get all purchases where type is "LICENSE"
	// const documents = await findDocuments(_collection, { type: "LICENSE" })
	// "purchases": Modify these documents to replace the "LICENSE" type with "IMAGES"
	// for await (const doc of documents ?? []) {
	// 	await updateFieldInCollection(_collection, { _id: doc._id }, { type: "IMAGES" })
	// }
	// "purchases": Rename the field "isGallery" to "isWithinGallery"
	// await renameField(_collection, {}, "isGallery", "isWithinGallery")
}
