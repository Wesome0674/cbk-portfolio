import React from "react";
import prisma from "@/prisma";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import ClientComponent from "./ClientComponent";

async function fetchProject(id: string) {
  const project = await prisma.project.findUnique({
    where: { id: parseInt(id, 10) },
    include: {
      roles: true,
      technologies: true,
      images: true,
      translations: {
        select: {
          language: true,
          translatedProcessDetails: true,
        },
      },
    },
  });

  return project;
}

interface PageProps {
  params: { id: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const locale = await getLocale();
  const translations = await getTranslations("projectPage");
  const project = await fetchProject(params.id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold">Project not found</h1>
      </div>
    );
  }

  // Transforme les traductions en objet statique
  const t = {
    process: translations("process"),
    visite: translations("visite"),
    github: translations("github"),
    tools: translations("tools"),
    year: translations("year"),
    duration: translations("duration"),
    roles: translations("roles"),
    goBack: translations("goBack"),
  };

  return (
    <ClientComponent locale={locale} project={project} translations={t} />
  );
};

export default Page;
