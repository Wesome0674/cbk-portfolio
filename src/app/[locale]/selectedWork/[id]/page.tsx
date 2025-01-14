import React from "react";
import prisma from "@/prisma";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import ClientComponent from "./ClientComponent";

// Fonction pour récupérer un projet en fonction de son ID
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

// Fonction pour obtenir les metadata pour la page dynamique
export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = await fetchProject(params.id);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: `Details about ${project.name}`,
  };
}

// Composant principal de la page
const Page = async ({ params }: { params: { id: string } }) => {
  const locale = await getLocale();
  const translations = await getTranslations("projectPage");
  const project = await fetchProject(params.id);

  // Si le projet n'est pas trouvé, afficher un message d'erreur
  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold">Project not found</h1>
      </div>
    );
  }

  // Transfomer les traductions en un objet statique
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

  // Retourner le composant ClientComponent avec les données du projet et les traductions
  return (
    <ClientComponent locale={locale} project={project} translations={t} />
  );
};

export default Page;
