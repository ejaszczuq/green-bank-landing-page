/* eslint-disable react/display-name */
import { IChildren } from "@src/types/IChildren.types";

export const combineElements = (elements: (({ children }: IChildren) => JSX.Element)[]) =>
  elements.reduce((Combined, Element) => ({ children }: IChildren) => (
    <Combined>
      <Element>{children}</Element>
    </Combined>
  ));
