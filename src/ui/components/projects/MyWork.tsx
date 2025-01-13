import { Button } from "@/ui/design-system/Button";
import { ImportantText } from "@/ui/design-system/ImportantText";
import { Typographie } from "@/ui/design-system/Typographie";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WorkHeader from "./WorkHeader";

const prisma = new PrismaClient();

async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      images: true,
    },
  });

  return projects;
}

interface Project {
  id: number;
  name: string;
  description: string;
  duration: string;
  processDetails: string;
  liveSiteUrl: string;
  githubRepoUrl: string;
  images: { id: number; url: string; projectId: number }[];
  createdYear: number;
  createdAt: Date;
}

const MyWork = async () => {
  const projects = await getProjects();
  return (
    <div
      id="mywork"
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="w-full mx-auto max-w-[1341px] flex flex-col items-center gap-[75px]">
        <WorkHeader />
        <div className="w-full">
          {projects.map((project: Project) => (
            <div key={project.id} className="space-y-[30px] w-full mb-[30px]">
              <hr className="w-full border border-primary" />
              <div className="flex items-center justify-between">
                <div className="flex flex-col md:flex-row items-center gap-[75px] w-full">
                  <div className="md:max-w-[350px] w-full aspect-video relative rounded-[10px]">
                    <Image
                      src={project.images[0]?.url || "/default-image.jpg"}
                      alt={project.name}
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  </div>

                  <div className="flex flex-col gap-[15px]">
                    <Typographie
                      className="font-calfine"
                      variant="h3"
                      theme="tercery"
                      textEffect="large"
                    >
                      {project.name}
                    </Typographie>
                    <Typographie className="max-w-[420px]">
                      {project.description}
                    </Typographie>
                    <Link href={`/selectedWork/${project.id}`}>
                      <Button variant="outline">SEE MORE DETAILS</Button>
                    </Link>
                  </div>
                </div>

                <Typographie
                  weight="medium"
                  variant="h5"
                  theme="secondary"
                  className="hidden md:block"
                  textEffect="large"
                >
                  {projects.indexOf(project) + 1 < 10
                    ? `0${projects.indexOf(project) + 1}`
                    : projects.indexOf(project) + 1}
                </Typographie>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-[10px]">
          <Typographie variant="h6" className="underline">
            More Coming Soon
          </Typographie>
          <Image src="/img/svg/smiley.svg" alt="" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
