# MongoDB Migrations
A Node.js environment that allows you to edit, rename and update MongoDB collections and fields.

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

Creating a Migration Script
---------------------------
1. Go into the `src/migrations` folder and copy this code (or the one from the `template.ts` file) into a new file:
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
 * Information about this migration script.
 */
export const info__template: MigrationInfo = {
    name: "",
    description: "",
    author: ""
};

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function template(_db: Db, _collection: Collection, _count: number) {

}
```
**Note:** I recommend you to find a proper name for your migration script file and to fill the `info` object with the proper information
as it will be used to display the migration script information in the console when listing the available migration script.

2. Don't forget to add the migration script file to the `index.ts` file in the `src/migrations` folder:
```typescript
import template, { info__template } from "./template";
// Import new migrations here


export {
    template,
    info__template,
    // Add new migrations here
};
```
**Note:** The info object should be named `info__<migrationName>` and the migration script function should be named `<migrationName>`.

Commands
--------
To list the available migration scripts, run on of these depending on the package manager you are using:
```bash
npm run migrate --list
yarn migrate --list
```
**Note:** The `--list` flag can be replaced by `-l`.

To run a migration script, run on of these depending on the package manager you are using:
```bash
npm run migrate --run=<migrationName>
yarn migrate --run=<migrationName>
```
**Note:** The `--run` flag can be replaced by `-r`.