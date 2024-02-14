import { Collection } from "mongodb";

import logger from "utils/logger";


/**
 * Find multiple documents in a collection.
 * @param collection The collection.
 * @param query The query to filter the documents.
 * @returns The documents.
 */
export async function findDocuments(collection: Collection | undefined, query: object) {
    if (!collection) {
        logger.error("Collection not found / instantiated");
        return;
    }

    const documents = await collection.find(query).toArray();

    if (!documents) {
        logger.error("No documents found in the collection");
        return;
    }

    logger.verbose(`Found ${documents.length} documents`);

    return documents;
}