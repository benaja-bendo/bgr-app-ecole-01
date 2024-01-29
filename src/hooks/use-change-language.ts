import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function useChangeLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return {
    language,
    changeLanguage,
  };
}
