import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";
import { useLocale } from "use-intl";

const SwitchLanguages = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  // Map de langue vers le chemin du drapeau
  const flagSrcMap: Record<string, string> = {
    en: "/img/svg/GB.svg",
    fr: "/img/svg/fr.svg",
    es: "/img/svg/es.svg",
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
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
