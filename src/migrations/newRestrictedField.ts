/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collection, Db } from "mongodb";

import {
    addFieldToCollection,
    findDocuments,
    renameCollection,
    renameField
} from "helpers/dbOperations";
import { MigrationInfo } from "types/migration";
import logger from "utils/logger";

/**
 * Information about this migration script.
 */
export const info__newRestrictedField: MigrationInfo = {
    name: "Add a new 'restricted' field to the 'aliases' collection (default to false)",
    description: "Was missing from some documents..",
    author: "Yoratoni"
};

/**
 * The main migration script function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function newRestrictedField(db: Db, collection: Collection, count: number) {
    await addFieldToCollection(collection, {}, "restricted", false);
}