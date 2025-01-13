import { PrismaClient } from "@prisma/client";
import PassionSliderClient from "./PassionSliderClient";
import { useLocale } from "next-intl"; // Utilisation de next-intl pour récupérer la langue dynamique

const prisma = new PrismaClient();

// Récupérer les passions avec leurs traductions
async function getPassions(locale: string) {
  const passions = await prisma.passion.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      translations: {
        where: {
          language: locale,
        },
      },
    },
  });
  return passions;
}

export default async function PassionServer() {
  // Utiliser useLocale côté serveur pour obtenir la langue dynamique
  const locale = useLocale(); // Prend la langue dynamique de l'utilisateur, qui peut être 'fr', 'en', etc.
  
  if (!locale) {
    return <div>Error: Locale not available</div>;
  }

  const passions = await getPassions(locale); // Passer la langue dynamique ici

  return <PassionSliderClient passions={passions} />;
}
