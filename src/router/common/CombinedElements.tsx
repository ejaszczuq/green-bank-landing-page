import { IChildren } from "@src/types/IChildren.types";
import { combineElements } from "./combineElements";

export interface CombinedElementsProps {
  elements?: (({ children }: IChildren) => JSX.Element)[];
}

const CombinedElements = ({ elements, children }: CombinedElementsProps & IChildren) => {
  if (elements) {
    const Elements = combineElements(elements);
    return <Elements>{children}</Elements>;
  }

  return <>{children}</>;
};

export default CombinedElements;
