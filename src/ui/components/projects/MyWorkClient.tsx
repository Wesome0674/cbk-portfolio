"use client";

import React from "react";
import { Typographie } from "../../design-system/Typographie";
import { Button } from "../../design-system/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ImportantText } from "@/ui/design-system/ImportantText";
import { useRouter } from "@/i18n/routing";

interface Project {
  id: number;
  name: string;
  description: string;
  images: { id: number; url: string; projectId: number }[];
  translations: { translatedDescription: string }[];
}

interface MyWorkClientProps {
  projects: Project[];
  locale: string; // Passe la locale au composant client
}

const MyWorkClient: React.FC<MyWorkClientProps> = ({ projects }) => {
  const router = useRouter();
  const t = useTranslations();

  const handleNavigation = (projectId: number) => {
    router.push(`/selectedWork/${projectId}`);
  };

  return (
    <div
      id="mywork"
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="w-full mx-auto max-w-[1341px] flex flex-col items-center gap-[75px]">
        <div className="flex flex-col items-center gap-[30px]">
          <ImportantText img="/img/svg/Wave-Marker.svg">
            <Typographie
              variant="h6"
              theme="secondary"
              className="uppercase"
              weight="medium"
            >
              {t("work.tag")}
            </Typographie>
          </ImportantText>
          <Typographie
            textEffect="large"
            className="font-calfine uppercase text-center"
            variant="h3"
            theme="secondary"
          >
            {t("work.titre1")}
            <Typographie variant="h3" theme="tercery">
              {" "}
              {t("work.titre2")}
            </Typographie>
          </Typographie>
        </div>
        <div className="w-full">
          {projects.map((project) => (
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
                      {project.translations[0]?.translatedDescription ||
                        project.description}
                    </Typographie>
                    <div onClick={() => handleNavigation(project.id)}>
                      <Button variant="outline">
                        {t("work.seeMoreDetails")}
                      </Button>
                    </div>
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
            {t("work.moreComingSoon")}
          </Typographie>
          <Image src="/img/svg/smiley.svg" alt="" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default MyWorkClient;
