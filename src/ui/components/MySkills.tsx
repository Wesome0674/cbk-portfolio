import { PrismaClient } from "@prisma/client";
import MySkillsClient from "./MySkillsClient";

const prisma = new PrismaClient();

async function getSkills(locale: string) {
  const skills = await prisma.skills.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      translations: {
        where: {
          language: locale,
        },
      },
    },
  });

  return skills;
}

export default async function MySkillsServer({ locale }: { locale: string }) {
  const skills = await getSkills(locale);

  return <MySkillsClient skills={skills} locale={locale} />;
}
