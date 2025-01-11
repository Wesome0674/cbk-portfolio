import React from "react";
import prisma from "@/prisma";
import { Typographie } from "@/ui/design-system/Typographie";
import { ImportantText } from "@/ui/design-system/ImportantText";
import { Button } from "@/ui/design-system/Button";
import Image from "next/image";
import Link from "next/link";

async function fetchProject(id: string) {
  const project = await prisma.project.findUnique({
    where: { id: parseInt(id, 10) },
    include: {
      roles: true, // Inclut les rôles liés au projet
      technologies: true, // Inclut les technologies liées au projet
      images: true, // Inclut les images du projet
    },
  });
  return project;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const project = await fetchProject((await params).id);

  console.log(project);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-[105px] px-4 flex w-full gap-[35px] relative flex-col lg:flex-row">
      <div className="space-y-[35px] flex-1">
        <div className="space-y-[35px]">
          <div className="space-y-[10px]">
            <div className="flex items-center justify-between">
              <Typographie
                theme="tercery"
                variant="h2"
                className="font-calfine"
                textEffect="large"
              >
                {project.name}
              </Typographie>
              <Typographie
                component="h5"
                variant="h4"
                theme="secondary"
                textEffect="large"
                weight="medium"
              >
                {project.id < 10 ? `0${project.id}` : project.id}
              </Typographie>
            </div>
            <hr className="w-full border border-primary" />
          </div>
          <div className="space-y-[35px]">
            <div className="space-y-[15px]">
              <ImportantText img="/img/svg/Marker.svg">
                <Typographie className="font-calfine " variant="h4">
                  Creation Process
                </Typographie>
              </ImportantText>
              <Typographie className="leading-[30px] uppercase">
                {project.processDetails}
              </Typographie>
            </div>
            <div className="flex items-center gap-5">
              <Link href={project.liveSiteUrl}>
                <Button>VISITE WEBSITE</Button>
              </Link>
              <Link href={project.githubRepoUrl}>
                <Button variant="outline">VISITE GITHUB</Button>
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-full border border-primary" />
        <div className="space-y-[40px]">
          <div className="space-y-[50px]">
            <div className="space-y-[7px]">
              <Typographie
                variant="h6"
                theme="secondary"
                weight="bold"
                textEffect="medium"
              >
                TOOLS
              </Typographie>
              <div className="flex items-center gap-[15px] flex-wrap max-w-[300px]">
                {project.technologies.map((item) => (
                  <div key={item.id}>
                    <Typographie className="underline" variant="h6">
                      {item.name}
                    </Typographie>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-[65px]">
              <div className="space-y-[20px]">
                <div className="space-y-[7px]">
                  <Typographie
                    variant="h6"
                    theme="secondary"
                    weight="bold"
                    textEffect="medium"
                  >
                    YEAR
                  </Typographie>
                  <Typographie variant="h6">{project.createdYear}</Typographie>
                </div>

                <div className="space-y-[7px]">
                  <Typographie
                    variant="h6"
                    theme="secondary"
                    weight="bold"
                    textEffect="medium"
                  >
                    DURATION
                  </Typographie>
                  <Typographie variant="h6">
                    {project.duration} weeks
                  </Typographie>
                </div>
              </div>
              <div className="space-y-[7px]">
                <Typographie
                  variant="h6"
                  theme="secondary"
                  weight="bold"
                  textEffect="medium"
                >
                  ROLES
                </Typographie>
                <div className="space-y-[10px]">
                  {project.roles.map((item) => (
                    <div key={item.id}>
                      <Typographie variant="h6">{item.name}</Typographie>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/#mywork" className="flex items-center gap-[5px]">
            <Image alt="" src="/img/svg/getBack.svg" width={24} height={24} />
            <Typographie
              variant="h6"
              theme="tercery"
              weight="bold"
              textEffect="medium"
            >
              See all Projects
            </Typographie>
          </Link>
        </div>
      </div>

      <div className="flex-1 space-y-[35px]">
        {project.images.map((item) => (
          <div
            key={item.id}
            className="w-full aspect-video rounded-[10px]"
            style={{
              backgroundImage: `url(${item.url})`, // Ajout de `url()`
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Page;
