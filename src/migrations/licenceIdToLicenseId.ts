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
export const info__licenceIdToLicenseId: MigrationInfo = {
    name: "Rename the field 'licenceId' to 'licenseId' in the 'usages' collection",
    description: "someone made a typo..",
    author: "Yoratoni"
};

/**
 * The main migration script function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function licenceIdToLicenseId(db: Db, collection: Collection, count: number) {
    await renameField(collection, {}, "licenceId", "licenseId");
}