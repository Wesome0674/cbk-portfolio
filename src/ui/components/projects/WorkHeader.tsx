import { ImportantText } from "@/ui/design-system/ImportantText";
import { Typographie } from "@/ui/design-system/Typographie";
import { useTranslations } from "next-intl";
import React from "react";

const WorkHeader = () => {
  const t = useTranslations(); // Récupère les traductions
  return (
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
  );
};

export default WorkHeader;
