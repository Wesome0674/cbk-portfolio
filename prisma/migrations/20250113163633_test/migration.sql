-- CreateTable
CREATE TABLE "PassionTranslation" (
    "id" SERIAL NOT NULL,
    "passionId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "translatedName" TEXT NOT NULL,

    CONSTRAINT "PassionTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PassionTranslation_passionId_language_key" ON "PassionTranslation"("passionId", "language");

-- AddForeignKey
ALTER TABLE "PassionTranslation" ADD CONSTRAINT "PassionTranslation_passionId_fkey" FOREIGN KEY ("passionId") REFERENCES "Passion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
