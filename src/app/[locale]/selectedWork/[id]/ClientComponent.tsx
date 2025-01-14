import React from "react";
import { Typographie } from "@/ui/design-system/Typographie";
import { ImportantText } from "@/ui/design-system/ImportantText";
import { Button } from "@/ui/design-system/Button";
import Image from "next/image";
import Link from "next/link";

const ClientComponent = ({ locale, project, translations }) => {
  const processDetailsTranslation = project.translations.find(
    (translation) => translation.language === locale
  )?.translatedProcessDetails;

  return (
    <div className="px-4 pb-4 flex w-full gap-[35px] relative flex-col lg:flex-row">
      {/* Partie gauche (détails du projet) */}
      <div className="pt-[105px] space-y-[35px] flex-1 lg:sticky lg:top-0 h-full">
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
                <Typographie className="font-calfine" variant="h4">
                  {translations.process}
                </Typographie>
              </ImportantText>
              <Typographie className="leading-[30px] uppercase">
                {processDetailsTranslation || project.processDetails}
              </Typographie>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <Link href={project.liveSiteUrl}>
                <Button className="uppercase">{translations.visite}</Button>
              </Link>
              <Link href={project.githubRepoUrl}>
                <Button className="uppercase" variant="outline">
                  {translations.github}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-full border border-primary" />
        <div className="space-y-[40px]">
          <div className="space-y-[50px]">
            <div className="space-y-[7px]">
              <Typographie
                className="uppercase"
                variant="h6"
                theme="secondary"
                weight="bold"
                textEffect="medium"
              >
                {translations.tools}
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
                    className="uppercase"
                  >
                    {translations.year}
                  </Typographie>
                  <Typographie variant="h6">{project.createdYear}</Typographie>
                </div>
                <div className="space-y-[7px]">
                  <Typographie
                    variant="h6"
                    theme="secondary"
                    weight="bold"
                    textEffect="medium"
                    className="uppercase"
                  >
                    {translations.duration}
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
                  className="uppercase"
                >
                  {translations.roles}
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
          <Link
            href={`/${locale}/#work`}
            className="flex items-center gap-[5px] cursor-pointer"
          >
            <Image alt="" src="/img/svg/goBack.svg" width={24} height={24} />
            <Typographie
              variant="h6"
              theme="tercery"
              weight="bold"
              textEffect="medium"
              className="capitalize"
            >
              {translations.goBack}
            </Typographie>
          </Link>
        </div>
      </div>
      {/* Partie droite (images du projet) */}
      <div className="flex-1 pt-[105px] space-y-[35px]">
        {project.images.map((item) => (
          <div
            key={item.id}
            className="w-full aspect-video rounded-[10px]"
            style={{
              backgroundImage: `url(${item.url})`,
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

export default ClientComponent;
