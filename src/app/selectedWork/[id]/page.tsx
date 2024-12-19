import React, { Suspense } from "react";
import { PrismaClient } from "@prisma/client";
import { Typographie } from "@/ui/design-system/Typographie";
import Loader from "@/ui/components/Loader";

const prisma = new PrismaClient();

interface Params {
  id: string;
}

const ProjectDetails = async ({ id }: { id: string }) => {
  const project = await prisma.project.findUnique({
    where: { id: parseInt(id) },
  });

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

const Page = ({ params }: { params: Params }) => {
  const { id } = params;

  return (
    <Suspense fallback={<Loader />}>
      <ProjectDetails id={id} />
    </Suspense>
  );
};

export default Page;
