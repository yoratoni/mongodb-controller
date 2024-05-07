/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb";

import {
    addFieldToCollection,
    findDocuments,
    renameCollection,
    renameField
} from "helpers/dbOperations";
import type { MigrationInfo } from "types/migration";
import logger from "utils/logger";


/**
 * Information about this migration script.
 */
export const info__txHashToTxHashes: MigrationInfo = {
    name: "txHashToTxHashes",
    description: "Rename the field 'txHash' to 'txHashes' in the 'purchases' collection",
    author: "Yoratoni"
};

/**
 * The main migration script function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function txHashToTxHashes(db: Db, collection: Collection, count: number) {
    await renameField(collection, {}, "txHash", "txHashes");
}