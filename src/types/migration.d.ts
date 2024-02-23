/**
 * Information about a single migration file.
 */
export type MigrationInfo = {
    /**
     * The name of the migration.
     */
    name: string;
    /**
     * The description of the migration.
     */
    description: string;
    /**
     * The author of the migration.
     */
    author: string;
};