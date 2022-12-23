/*
  Warnings:

  - Added the required column `image` to the `Home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Home` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Home" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "Home_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Home" ("categoryId", "city", "country", "createdAt", "id", "name", "state", "updatedAt", "zip") SELECT "categoryId", "city", "country", "createdAt", "id", "name", "state", "updatedAt", "zip" FROM "Home";
DROP TABLE "Home";
ALTER TABLE "new_Home" RENAME TO "Home";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
