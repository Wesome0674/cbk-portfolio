// app/MyWork.tsx
import React from "react";
import MyWorkClient from "./MyWorkClient";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: { id: "asc" },
    include: {
      images: true,
    },
  });
  return projects;
}

const MyWork = async () => {
  const projects = await getProjects();
  return <MyWorkClient projects={projects} />;
};

export default MyWork;
