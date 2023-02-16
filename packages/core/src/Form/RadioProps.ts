import { ChangeEvent } from "react";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * State controlling activated radio group
   */
  model: string | boolean | number;
  /**
   * Use onChange event Handler to set new value of model
   */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Label of the radio checkbox
   */
  label?: string | false;
  /**
   * Groups of radio button are linked by name
   */
  name: string;
}
