/*
  Warnings:

  - You are about to drop the column `username` on the `Recipe` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "directions" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("category", "description", "directions", "id", "imageUrl", "ingredients", "title", "userId") SELECT "category", "description", "directions", "id", "imageUrl", "ingredients", "title", "userId" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
