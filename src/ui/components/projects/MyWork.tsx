/* import { Button } from "@/ui/design-system/Button";
import { ImportantText } from "@/ui/design-system/ImportantText";
import { Typographie } from "@/ui/design-system/Typographie"; */
/* import { PrismaClient } from "@prisma/client"; */
/* import Image from "next/image";
import Link from "next/link"; */
import React from "react";

/* const prisma = new PrismaClient(); */

/* async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return projects;
} */

/* interface Project {
  id: number;
  name: string;
  description: string;
  duration: number;
  processDetails: string;
  liveSiteUrl: string;
  githubRepoUrl: string;
} */

const MyWork = async () => {
/*   const projects = await getProjects();  */
  return (
    <div className="min-h-screen w-full p-4">
{/*       <div className="mx-auto max-w-[1341px] flex flex-col items-center gap-[75px]">
        <div className="flex flex-col items-center gap-[30px] ">
          <ImportantText img="/img/png/Wave-Marker.png">
            <Typographie
              variant="h6"
              theme="secondary"
              className="uppercase"
              weight="medium"
            >
              My Work
            </Typographie>
          </ImportantText>
          <Typographie
            textEffect="large"
            className="font-calfine uppercase text-center"
            variant="h3"
            theme="secondary"
          >
            Let’s Discover the latests
            <Typographie variant="h3" theme="tercery">
              {" "}
              Project i made
            </Typographie>
          </Typographie>
        </div>
        <div className="w-full">
          {projects.map((project: Project) => (
            <div key={project.id} className="space-y-[30px] w-full mb-[30px]">
              <hr className="w-full border border-primary" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[75px]">
                  <Image
                    src="/img/png/Project1.png"
                    alt=""
                    width={296}
                    height={237}
                  />
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
          <Typographie variant="h6" className="underline">More Coming Soon</Typographie>
          <Image src="/img/svg/smiley.svg" alt="" width={24} height={24} />
        </div>
      </div> */}
    </div>
  );
};

export default MyWork;
