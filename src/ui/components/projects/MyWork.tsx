import React from "react";
import MyWorkClient from "./MyWorkClient";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProjects(locale: string) {
  const projects = await prisma.project.findMany({
    orderBy: { id: "asc" },
    include: {
      images: true,
      translations: {
        where: {
          language: locale, // Filtrer les traductions par langue
        },
      },
    },
  });
  return projects;
}

const MyWork = async ({ locale }: { locale: string }) => {
  const projects = await getProjects(locale); // Passer la locale pour récupérer les traductions
  return <MyWorkClient projects={projects} />;
};

export default MyWork;
