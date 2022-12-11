import { createContext, useContext } from "react";

import { FormControlProps } from "./FormControlProps";

type Props = Omit<FormControlProps, "className" | "children">;

export interface ContextProps extends Props {}

export const Context = createContext<ContextProps | null>(null!);

export const useFormControl = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(`Cannot be rendered outside the FormControl component`);
  }
  return context;
};
