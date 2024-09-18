/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"
import { ObjectId } from "mongodb"
import type { MigrationInfo } from "types/migration"
import ProxiesJSON from "../assets/fixProxies.json"

/**
 * Information about this migration script.
 */
export const info__migrateAllProxies: MigrationInfo = {
	name: "migrateAllProxies",
	description: "Migrate all Alias Studio user proxies to the new Beacon pattern",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function migrateAllProxies(_db: Db, _collection: Collection, _count: number) {
	for await (const proxy of ProxiesJSON) {
		await _collection.updateOne(
			{ _id: new ObjectId(proxy.aliasId) },
			{ $set: { aliasNFTAddress: proxy.proxyAddress } },
		)
	}
}
