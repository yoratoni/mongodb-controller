import { connectToCollection } from "helpers/dbConnections"
import { removeFieldFromCollection } from "helpers/dbOperations"
import type { Collection, Db } from "mongodb"
import type { MigrationInfo } from "types/migration"

/**
 * Information about this migration script.
 */
export const info__v1_0: MigrationInfo = {
	name: "v1.0",
	description: "Overall v1.0 migration script for Alias Studio",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function v1_0(_db: Db, _collection: Collection, _count: number) {
	// const images = await _collection.find({}).toArray()

	// Group images by aliasThumbnailId
	// const thumbnails: { [aliasId: string]: string[] } = {}
	// for await (const image of images) {
	// 	if (image.aliasThumbnailId) {
	// 		if (!thumbnails[image.aliasThumbnailId]) {
	// 			thumbnails[image.aliasThumbnailId] = []
	// 		}

	// 		thumbnails[image.aliasThumbnailId] = [...thumbnails[image.aliasThumbnailId], image.url]
	// 	}
	// }

	const aliasesCollection = connectToCollection(_db, "aliases")
	if (!aliasesCollection) throw new Error("Could not connect to aliases collection")

	const aliases = await aliasesCollection.find({}).toArray()

	// Add thumbnailsUrls to aliases
	// for await (const alias of aliases) {
	// 	const aliasId = alias._id.toString()

	// 	if (thumbnails[aliasId]) {
	// 		await aliasesCollection.updateOne({ _id: alias._id }, { $set: { thumbnailsUrls: thumbnails[aliasId] } })
	// 	}
	// }

	// Remove aliasThumbnailId from images
	// for await (const image of images) {
	// 	if (image.aliasThumbnailId) {
	// 		await removeFieldFromCollection(_collection, { _id: image._id }, "aliasThumbnailId")
	// 	}
	// }

	// Update from .published to .status
	// for await (const alias of aliases) {
	// 	if (!alias.status) {
	// 		await addFieldToCollection(
	// 			aliasesCollection,
	// 			{ _id: alias._id },
	// 			"status",
	// 			alias.published ? "PUBLISHED" : "DRAFT",
	// 		)
	// 	}
	// }

	// Remove .published from aliases
	for await (const alias of aliases) {
		if (alias.published !== undefined) {
			await removeFieldFromCollection(aliasesCollection, { _id: alias._id }, "published")
		}
	}

	// Reset all Aliases to page 1
	// for await (const alias of aliases) {
	// 	await updateFieldInCollection(aliasesCollection, { _id: alias._id }, "lastPage", 1)
	// }

	// const promptsSetsCollection = connectToCollection(_db, "prompts_set")
	// if (!promptsSetsCollection) throw new Error("Could not connect to prompts_sets collection")

	// const promptsSets = await promptsSetsCollection.find({}).toArray()

	// Recover prompts sets with 12 or more prompts
	// const promptsSetsToUpdate: { [aliasId: string]: string[] } = {}
	// for await (const promptsSet of promptsSets) {
	// 	if (promptsSet.aliasId !== null && promptsSet.prompts) {
	// 		const aliasId = promptsSet.aliasId.toString()

	// 		if (promptsSetsToUpdate[aliasId]) {
	// 			promptsSetsToUpdate[aliasId] = [...promptsSetsToUpdate[aliasId], ...promptsSet.prompts]
	// 		} else {
	// 			promptsSetsToUpdate[aliasId] = promptsSet.prompts
	// 		}
	// 	}
	// }

	// Prompts Sets cleanup
	// const aliasIds = Object.keys(promptsSetsToUpdate)
	// for (const aliasId of aliasIds) {
	// 	const promptsSet = promptsSetsToUpdate[aliasId]

	// Slice prompts if there are more than 12
	// if (promptsSet.length > 12) {
	// 	promptsSetsToUpdate[aliasId] = promptsSet.slice(0, 12)
	// }

	// Remove empty prompts
	// for (const prompt of promptsSet) {
	// 	if (prompt === "") {
	// 		promptsSetsToUpdate[aliasId].splice(promptsSetsToUpdate[aliasId].indexOf(prompt), 1)
	// 	}
	// }
	// }

	// console.log(promptsSetsToUpdate)

	// After cleanup, remove prompts sets with less than 12 prompts
	// for (const aliasId of aliasIds) {
	// if (promptsSetsToUpdate[aliasId].length < 12) {
	// 	delete promptsSetsToUpdate[aliasId]
	// }
	// }

	// Set the Aliases trainingPrompts field to the first 12 prompts
	// for await (const alias of aliases) {
	// 	const aliasId = alias._id.toString()

	// 	if (promptsSetsToUpdate[aliasId]) {
	// 		console.log(promptsSetsToUpdate[aliasId])

	// 		await updateFieldInCollection(
	// 			aliasesCollection,
	// 			{ _id: alias._id },
	// 			"trainingPrompts",
	// 			promptsSetsToUpdate[aliasId],
	// 		)
	// 	} else {
	// 		await updateFieldInCollection(aliasesCollection, { _id: alias._id }, "trainingPrompts", [])
	// 	}
	// }

	// Remove openSeaCollection from aliases
	// for await (const alias of aliases) {
	// 	if (alias.openSeaCollection !== undefined) {
	// 		await removeFieldFromCollection(aliasesCollection, { _id: alias._id }, "openSeaCollection")
	// 	}
	// }

	// Remove openSeaCollection from aliases
	// for await (const alias of aliases) {
	// 	if (alias.selectedPromptsSet !== undefined) {
	// 		await removeFieldFromCollection(aliasesCollection, { _id: alias._id }, "selectedPromptsSet")
	// 	}
	// }

	// Remove the prompts_set collection
	// await _db.dropCollection("prompts_set")
}
