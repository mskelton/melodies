import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import enUS from "./locales/en-US.json"

i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
    format(value, format, lng) {
      return format === "number"
        ? new Intl.NumberFormat(lng).format(value)
        : value
    },
  },
  lng: "en-US",
  react: {
    useSuspense: false,
  },
  resources: { "en-US": enUS },
  supportedLngs: ["en-US"],
})
