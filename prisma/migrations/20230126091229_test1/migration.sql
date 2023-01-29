-- CreateTable
CREATE TABLE "Tree" (
    "tree_uid" TEXT NOT NULL,
    "treeName" TEXT NOT NULL,
    "treeScientificName" TEXT NOT NULL,
    "treeFamily" TEXT NOT NULL,
    "amountOfTrees" INTEGER NOT NULL,
    "pricePerTreeString" TEXT NOT NULL,
    "plantedTrees" INTEGER NOT NULL,

    CONSTRAINT "Tree_pkey" PRIMARY KEY ("tree_uid")
);
