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
export const info__template: MigrationInfo = {
    name: "",
    description: "",
    author: ""
};

/**
 * The main migration function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function template(db: Db, collection: Collection, count: number) {

}