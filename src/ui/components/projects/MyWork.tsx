import { Button } from "@/ui/design-system/Button";
import { ImportantText } from "@/ui/design-system/ImportantText";
import { Links } from "@/ui/design-system/Links";
import { Typographie } from "@/ui/design-system/Typographie";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import React from "react";

const prisma = new PrismaClient();

// Fonction pour récupérer les données depuis Prisma
async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return projects;
}

const MyWork = async () => {
  const projects = await getProjects(); // Appel de la fonction pour récupérer les données
  console.log(projects)
  return (
    <div className="min-h-screen w-full mt-[305px]">
      <div>
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
        <div className="mt-[75px]">
          <div className="space-y-[30px] w-full">
            <hr className="w-full border border-primary" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[75px]">
                <Image
                  src="/img/png/Project1.png"
                  alt=""
                  width={296}
                  height={237}
                />
                <div className="space-y-[15px]">
                  <Typographie
                    className="font-calfine"
                    variant="h3"
                    theme="tercery"
                    textEffect="large"
                  >
                    EnergieX
                  </Typographie>
                  <Typographie className="max-w-[420px]">
                    Lorem ipsum dolor sit amet consectetur. Porttitor curabitur
                    iaculis.
                  </Typographie>
                  <Button>SEE MORE DETAILS</Button>
                </div>
              </div>

              <Typographie
                weight="medium"
                variant="h5"
                theme="secondary"
                textEffect="large"
              >
                01
              </Typographie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
