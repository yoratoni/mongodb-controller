import { MongoClient } from "mongodb";

import logger from "utils/logger";


/**
 * Create a new MongoClient instance, based on the `DATABASE_URL` env variable.
 */
export const client = process.env.DATABASE_URL ? new MongoClient(process.env.DATABASE_URL) : null;


/**
 * Connects to the database, based on the `DATABASE_URL` & `DATABASE_NAME` env variables.
 * @returns The database.
 */
export default async function connectToDb() {
    if (!client) {
        logger.error("Database URL not found");
        return;
    }

    try {
        await client.connect();
        logger.info("Successfully connected to the database");
    } catch (error) {
        logger.error("Error connecting to the database", error);
    }

    if (!process.env.DATABASE_NAME) {
        logger.error("Database name not found");
        return;
    }

    const db = client.db(process.env.DATABASE_NAME);
    return db;
}