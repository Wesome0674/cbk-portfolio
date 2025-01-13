// app/MySkills.tsx
import React from "react";
import MySkillsClient from "./MySkillsClient";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getSkills() {
  const skills = await prisma.skills.findMany({
    orderBy: { id: "asc" },
  });
  return skills;
}

const MySkills = async () => {
  const skills = await getSkills();
  return <MySkillsClient skills={skills} />;
};

export default MySkills;
