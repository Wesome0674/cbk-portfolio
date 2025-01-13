import React from "react";
import { ImportantText } from "../design-system/ImportantText";
import { Typographie } from "../design-system/Typographie";
import { useTranslations } from "next-intl";

const PassionTitle = () => {
  const t = useTranslations();
  return (
    <ImportantText img="/img/svg/Marker.svg">
      <Typographie variant="h4" className="font-calfine text-center uppercase">
        {t("aboutMe.passions")}
      </Typographie>
    </ImportantText>
  );
};

export default PassionTitle;
