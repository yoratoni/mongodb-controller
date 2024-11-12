import { connectToCollection } from "helpers/dbConnections"
import type { Collection, Db } from "mongodb"
import type { MigrationInfo } from "types/migration"

/**
 * Information about this migration script.
 */
export const info__isAdvancedMode: MigrationInfo = {
	name: "isAdvancedMode",
	description: "Adding isAdvancedMode: true to all Aliases with no advancedMode field",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function isAdvancedMode(_db: Db, _collection: Collection, _count: number) {
	const aliasesCollection = connectToCollection(_db, "aliases")
	if (!aliasesCollection) throw new Error("Could not connect to aliases collection")

	const aliases = await aliasesCollection.find({}).toArray()

	// for (let i = 0; i < aliases.length; i++) {
	// 	console.log(aliases[i]._id, aliases[i].isAdvancedMode)
	// 	// await aliasesCollection.updateOne(
	// 	// 	{ _id: aliases[i]._id },
	// 	// 	{
	// 	// 		$set: {
	// 	// 			isAdvancedMode: stagingSaveList[i] === undefined ? true : stagingSaveList[i],
	// 	// 		},
	// 	// 	},
	// 	// )
	// }
}
