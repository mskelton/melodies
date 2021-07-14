import i18next from "i18next"
import AsyncBackend from "i18next-async-backend"
import BrowserLanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import enUS from "~/locales/en-US/translation.json"

const resources = {
  // "en-US": import("locales/en-US/translation.json"),
}

i18next
  .use(AsyncBackend)
  .use(initReactI18next)
  .use(BrowserLanguageDetector)
  .init({
    backend: { resources },
  })
