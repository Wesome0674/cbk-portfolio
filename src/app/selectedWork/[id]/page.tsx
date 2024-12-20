import React from "react";
import { PrismaClient } from "@prisma/client";
import { Typographie } from "@/ui/design-system/Typographie";

const prisma = new PrismaClient();

interface Params {
  id: string;
}

interface Project {
  id: number;
  name: string;
  // Add other properties as needed
}

async function fetchProject(id: string) {
  const project = await prisma.project.findUnique({
    where: { id: parseInt(id, 10) },
  });
  return project;
}

const Page = async ({ params }: { params: Params }) => {
  const project = await fetchProject(params.id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="px-[80px] py-[105px]">
      <div>
        <div className="flex items-center justify-between space-y-[30px]">
          <Typographie
            theme="tercery"
            variant="h2"
            className="font-calfine"
            textEffect="large"
          >
            {project.name}
          </Typographie>
          <Typographie variant="h4" theme="secondary" textEffect="large" weight="medium">
            {project.id < 10 ? `0${project.id}` : project.id}
          </Typographie>
        </div>
        <hr className="w-full border border-primary" />
      </div>
    </div>
  );
};

export default Page;
