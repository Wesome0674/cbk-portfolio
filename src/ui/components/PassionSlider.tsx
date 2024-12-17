import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { ImportantText } from "../design-system/ImportantText";
import { Typographie } from "../design-system/Typographie";

const prisma = new PrismaClient();

// Fonction pour récupérer les données depuis Prisma
async function getPassions() {
  const passions = await prisma.passion.findMany({
   
    orderBy: {
      id: "asc",
    },
  });
  return passions;
}

export default async function PassionSlider() {
  const passions = await getPassions(); // Appel de la fonction pour récupérer les données

  return (
    <div className="max-w-[408px] overflow-hidden border-t border-b border-primary gap-[13px] py-[20px] flex flex-col w-fit items-center">
      <ImportantText img="/img/svg/Marker.svg">
        <Typographie variant="h4" className="font-calfine text-center">
          MY PASSIONS
        </Typographie>
      </ImportantText>
      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-[14px] w-max animate-slider">
          {[...passions, ...passions].map((passion, index) => (
            <div key={index} className="flex items-center gap-2">
              <Typographie className="uppercase" variant="h6">{passion.name}</Typographie>
              <Image
               alt=""
                src="/img/svg/travel.svg"
                width={24}
                height={24}
              />
              <div className="w-[50px] h-[4px] bg-primary"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}