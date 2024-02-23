import { config } from "dotenv";
import minimist from "minimist";

import { closeMongoDbServerConnection, connectToCollection, connectToDb } from "helpers/dbConnections";
import * as migrations from "migrations";
import logger from "utils/logger";


// Load environment variables from .env file
config();


/**
 * Main entry point of the controller.
 */
async function main() {
    if (!process.env.MONGODB_SERVER_URL) logger.error("MongoDB server URL not found");
    if (!process.env.DATABASE_NAME) logger.error("Database name not found");
    if (!process.env.DATABASE_COLLECTION) logger.error("Database collection not found");

    // Get the command line arguments
    const argv = minimist(process.argv.slice(2));

    // Type of migrations index
    const migrationDir = migrations as { [key: string]: unknown; };

    // List all the available migration scripts
    if ("list" in argv || "l" in argv) {
        logger.info("Available migration scripts:");

        const functions = [];
        const info = [];

        for (const migration in migrationDir) {
            console.log(migration);
        }

        return;
    }


    // // Load the database
    // const db = await connectToDb();

    // if (!db) {
    //     logger.error("Database not found / instantiated");
    //     return;
    // }

    // // Load the collection
    // const collection = await connectToCollection(db, process.env.DATABASE_COLLECTION as string);

    // if (!collection) {
    //     logger.error("Collection not found / instantiated");
    //     return;
    // }

    // // Count the number of documents in the collection
    // const documentCount = await collection.estimatedDocumentCount();
    // logger.verbose(`Number of documents in the collection: ${documentCount}`);

    // // Run the migration script
    // console.log("");
    // logger.info("Running migration script...");
    // // await migrate(db, collection, documentCount);
    // console.log("");

    // // Close the MongoDB server connection
    // await closeMongoDbServerConnection();
}


main();