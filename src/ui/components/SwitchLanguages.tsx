import { Locale, usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";
import { useLocale } from "use-intl";

const SwitchLanguages = () => {
  const [isPending, startTransition] = useTransition();

  const localActive = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Map de langue vers le chemin du drapeau
  const flagSrcMap: Record<string, string> = {
    en: "/img/svg/GB.svg",
    fr: "/img/svg/fr.svg",
    es: "/img/svg/es.svg",
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as Locale;

    startTransition(() => {
      // Recompose l'URL avec la locale choisie
      router.replace(
        { pathname, query: params }, // Garde le chemin et les paramètres actuels
        { locale: nextLocale } // Définit la nouvelle locale
      );
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Image
        alt={`${localActive} flag`}
        src={flagSrcMap[localActive] || "/img/svg/flag-default.svg"}
        width={32}
        height={24}
      />

      <select
        defaultValue={localActive}
        disabled={isPending}
        name="language"
        onChange={onSelectChange}
        className="cursor-pointer"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default SwitchLanguages;
