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
export const info__template: MigrationInfo = {
    name: "template",
    description: "Migration template",
    author: "Yoratoni"
};

/**
 * The main migration script function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function template(db: Db, collection: Collection, count: number) {
    logger.warn("Running the template, seriously? It won't do anything!");
}