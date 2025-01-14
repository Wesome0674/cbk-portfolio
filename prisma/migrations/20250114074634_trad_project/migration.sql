-- CreateTable
CREATE TABLE "ProjectTranslation" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "translatedDescription" TEXT NOT NULL,
    "translatedProcessDetails" TEXT NOT NULL,

    CONSTRAINT "ProjectTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTranslation_projectId_language_key" ON "ProjectTranslation"("projectId", "language");

-- AddForeignKey
ALTER TABLE "ProjectTranslation" ADD CONSTRAINT "ProjectTranslation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
