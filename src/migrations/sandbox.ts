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
export const info__sandbox: MigrationInfo = {
    name: "sandbox",
    description: "A sandbox migration script for fast modifications.",
    author: "Yoratoni"
};

/**
 * The main migration script function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function sandbox(db: Db, collection: Collection, count: number) {
    // Get all aliases
    const documents = await findDocuments(collection, {});

    if (!documents) {
        logger.error("No documents found.");
        return;
    }

    // Log the result
    logger.info(`Found ${documents?.length ?? 0} documents.`);

    const aliasIds: string[] = [];

    // Iterate over all documents
    for (const doc of documents) {
        const id = doc.aliasId?.toString();

        if (!id) continue;

        if (aliasIds.includes(id)) {
            logger.warn(`Duplicate aliasId found: ${id}`);
        } else {
            aliasIds.push(id);
        }
    };
}