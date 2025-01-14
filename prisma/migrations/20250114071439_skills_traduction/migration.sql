-- CreateTable
CREATE TABLE "SkillsTranslation" (
    "id" SERIAL NOT NULL,
    "skillId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "translatedDescription" TEXT NOT NULL,
    "translatedLocation" TEXT NOT NULL,

    CONSTRAINT "SkillsTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillsTranslation_skillId_language_key" ON "SkillsTranslation"("skillId", "language");

-- AddForeignKey
ALTER TABLE "SkillsTranslation" ADD CONSTRAINT "SkillsTranslation_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
