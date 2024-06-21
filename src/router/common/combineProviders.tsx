/* eslint-disable react/display-name */
import { ComponentProps, ComponentType, FC } from "react";

type Providers = [ComponentType<any>, ComponentProps<any>?][];

export const combineProviders = (...providers: Providers): FC =>
  providers.reduce(
    (Combined, [Provider, props = {}]) =>
      ({ children }: any) =>
        (
          <Combined>
            <Provider {...props}>{children}</Provider>
          </Combined>
        ),
    ({ children }: any) => <>{children}</>
  );
