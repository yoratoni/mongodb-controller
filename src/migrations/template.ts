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
 * Information about this migration.
 */
export const info: MigrationInfo = {
    name: "template",
    description: "This is a template migration.",
    author: "The author of the migration"
};

/**
 * The main migration function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function migrate(db: Db, collection: Collection, count: number) {
    logger.warn("This is a migration template. check the README for more information on how to create a migration file");
}