import { APP_VERSION } from "@config/config";

const WELCOME_MESSAGE = "Welcome to Green Bank";

export const welcome = () => {
  const styles = ["font-size: 16px", `color: #2BB32A`, "border-radius: 8px", "padding: 8px"].join(";");

  // eslint-disable-next-line no-console
  console.log(`%c ${WELCOME_MESSAGE} - ${APP_VERSION}`, styles);
};
