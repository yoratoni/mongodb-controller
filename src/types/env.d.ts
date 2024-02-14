declare namespace NodeJS {
    interface ProcessEnv {
        MONGODB_SERVER_URL: string
        DATABASE_NAME: string
        DATABASE_COLLECTION: string
    }
}
