import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
 

const apiKey = "V64XPkiG_1XpWMDQHm68bQ";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;
 

const i18nConfig  = {
    locales: [ "es" , "en" , "fr" ],
    defaultLocale: "es"
}

module.exports = i18nConfig;