# MongoDB Migrations
A Node.js environment allowing to edit, rename and update MongoDB collections and fields.

Getting Started
---------------
To get started, follow these steps:

1. Clone this repository:
```bash
git clone https://github.com/yoratoni/mongodb-migrations.git
```

2. Install the dependencies via NPM or Yarn:
```bash
npm install / yarn install
```

3. Create a `.env` file in the root of the project and add the following environment variables:
```python
# A string containing the URL of the MongoDB used by the project, including the database name.
# Example:
#   mongodb+srv://USERNAME:PASSWORD@HOST/DATABASE?ARGS
MONGODB_SERVER_URL=

# The name of the database used by the project.
# Example:
#   testDatabase
DATABASE_NAME=

# The name of the collection used by the project.
# Example:
#   testCollection
DATABASE_COLLECTION=
```

4. Go into the `src/migrations` folder and copy the pre-existing template file to create your own migration files.
```typescript
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
```

4. Run the project:
```bash
npm run migrate / yarn migrate
```