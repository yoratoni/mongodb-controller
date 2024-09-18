import type { Collection } from "mongodb"

import logger from "utils/logger"

/**
 * Find multiple documents in a collection.
 * @param collection The collection.
 * @param query The query to filter the documents.
 * @returns The documents.
 */
export async function findDocuments(collection: Collection | undefined, query: object) {
	if (!collection) {
		logger.error("Collection not found / instantiated")
		return
	}

	const documents = await collection.find(query).toArray()

	if (!documents) {
		logger.error("No documents found in the collection")
		return
	}

	logger.verbose(`Found ${documents.length} documents`)

	return documents
}

/**
 * Rename an entire collection.
 * @param collection The collection.
 * @param newName The new name of the collection.
 * @returns The new collection.
 */
export async function renameCollection(collection: Collection | undefined, newName: string) {
	if (!collection) {
		logger.error("Collection not found / instantiated")
		return
	}

	const result = await collection.rename(newName)

	if (!result) {
		logger.error("Error renaming collection")
		return
	}

	logger.verbose(`Renamed collection to: '${newName}'`)

	return result
}

/**
 * Rename a field in a collection.
 * @param collection The collection.
 * @param query The query to filter the documents.
 * @param field The field to rename.
 * @param newField The new field name.
 */
export async function renameField(collection: Collection | undefined, query: object, field: string, newField: string) {
	if (!collection) {
		logger.error("Collection not found / instantiated")
		return
	}

	const result = await collection.updateMany(query, {
		$rename: {
			[field]: newField,
		},
	})

	if (!result) {
		logger.error("Error renaming field")
		return
	}

	logger.verbose(`Renamed field: '${field}' to '${newField}' in ${result.modifiedCount} documents`)
}

/**
 * Add a field to every document in a collection (if it doesn't exist).
 * @param collection The collection.
 * @param query The query to filter the documents.
 * @param field The field to add.
 * @param value The value to set for the field.
 */
export async function addFieldToCollection(
	collection: Collection | undefined,
	query: object,
	field: string,
	value: unknown,
) {
	if (!collection) {
		logger.error("Collection not found / instantiated")
		return
	}

	const result = await collection.updateMany(
		{
			...query,
			[field]: {
				$exists: false, // Only add the field if it doesn't exist
			},
		},
		{
			$set: {
				[field]: value,
			},
		},
	)

	if (!result) {
		logger.error("Error adding field")
		return
	}

	logger.verbose(`Added field: '${field}' to ${result.modifiedCount} documents`)
}
