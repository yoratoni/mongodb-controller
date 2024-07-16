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
export const info__NTFPriceToNFTPrice: MigrationInfo = {
    name: "NTFPriceToNFTPrice",
    description: "Rename the field 'NTFPrice' to 'NFTPrice' in the 'aliases' collection",
    author: "Yoratoni"
};

/**
 * The main migration script function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function NTFPriceToNFTPrice(db: Db, collection: Collection, count: number) {
    await renameField(collection, {}, "NTFPrice", "NFTPrice");
}