import { setDefaultOptions } from "date-fns";
import { enUS, de } from "date-fns/locale";
import * as React from "react";
import { useTranslation } from "react-i18next";
import initializeTranslation from "../translation/initializeTranslation";

export const Configuration: React.FC = () => {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    initializeTranslation.init();
    const locales: { [key: string]: Locale } = {
      de,
      en: enUS,
    };
    setDefaultOptions({ locale: locales[i18n.language] });
  }, [i18n.language]);

  return null;
};
