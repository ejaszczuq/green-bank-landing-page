/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line unused-imports/no-unused-imports
import i18n from "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
