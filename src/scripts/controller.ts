/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collection, Db } from "mongodb";

import { addFieldToCollection, findDocuments, renameCollection, renameField } from "helpers/dbOperations";


/**
 * The main controller function.
 * @param db The database.
 * @param collection The collection.
 * @param count The number of documents to process.
 */
export default async function controller(db: Db, collection: Collection, count: number) {
    /**
     * Renamed the field "licenceId" to "licenseId" in the "usages" collection.
     */
    // const test = await renameField(collection, {}, "licenceId", "licenseId");

    /**
     * Renamed the collection "licences" to "licenses".
     */
    // await renameCollection(collection, "licenses");

    /**
     * Added "restricted" field to the "aliases" collection with the default value "false".
     */
    // const test = await addFieldToCollection(collection, {}, "restricted", false);
}