import i18n from "../translations/i18n";
import { AppConfig } from "./config";

export const IS_DEV_MODE = AppConfig.AppStage === "dev";
export const APP_LANG = i18n.language;
