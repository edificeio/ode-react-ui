import { createContext, useContext } from "react";

export interface ModalContextProps {
  ariaLabelId: string;
  ariaDescriptionId: string;
}

export const ModalContext = createContext<ModalContextProps>({
  ariaLabelId: "",
  ariaDescriptionId: "",
});
ModalContext.displayName = "ModalContext";

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(`Cannot be rendered outside the Modal component`);
  }
  return context;
};
