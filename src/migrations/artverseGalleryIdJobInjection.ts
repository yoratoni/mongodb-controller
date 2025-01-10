/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"

import { findDocuments } from "helpers/dbOperations"
import type { MigrationInfo } from "types/migration"
import logger from "utils/logger"

/**
 * Information about this migration script.
 */
export const info__artverseGalleryIdJobInjection: MigrationInfo = {
	name: "sandbox",
	description: "A sandbox migration script for fast modifications.",
	author: "Yoratoni",
}

const aliasIds = [
	{ id: "676a903a435523d53cf74aed" },
	{ id: "6755bee060f6418e072f74ff" },
	{ id: "6745fc134a5d5cadaaf8953a" },
	{ id: "675ef4b1d503b2a4a916402f" },
	{ id: "658b52e63270ee51f281aa41" },
	{ id: "673e04d5ef83c870bf6a9ecb" },
	{ id: "675b0c3ab3535d14cb277200" },
	{ id: "6576f639a6df6805ed6a835d" },
	{ id: "65c52364157607abce1219e5" },
	{ id: "6765ad39765cbee407b273e5" },
	{ id: "6745cd36854415b2c79d4d3c" },
	{ id: "6745fc4aff2683aa8359a94b" },
	{ id: "676329faf3759dc6c9dbe3ca" },
	{ id: "67768bdb4190db23a878de6f" },
	{ id: "675af7828486f95fd810bff6" },
	{ id: "67486a883b670ee6303dc968" },
	{ id: "658dd0994c09f7f36a320e7f" },
]

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function artverseGalleryIdJobInjection(_db: Db, _collection: Collection, _count: number) {
	const initialTimestamp = new Date("2021-09-01T00:00:00.000Z")
	const finalTimestamp = new Date("2021-09-30T23:59:59.999Z")

	const documents = await findDocuments(_collection, {
		// Find all jobs that have the aliasId of one of these Aliases in the aliasIds array
		// within the timestamp range
		aliasId: { $in: aliasIds.map(alias => alias.id) },
		createdAt: { $gte: initialTimestamp, $lte: finalTimestamp },
	})

	if (!documents) {
		logger.error("No documents found.")
		return
	}

	// Log the result
	logger.info(`Found ${documents?.length ?? 0} documents.`)
}
