import { ComponentPropsWithRef } from "react";

import { IWebApp } from "ode-ts-client";

export interface ImagePickerProps extends ComponentPropsWithRef<"input"> {
  /**
   * Description of the ImagePicker label.
   */
  label: string;
  /**
   * Accessible description of the add button
   */
  addButtonLabel: string;
  /**
   * Accessible description of the delete button
   */
  deleteButtonLabel: string;
  /**
   * Provide a default image as placeholder
   */
  src?: string;
  /**
   * To show the icon of an application
   */
  app: IWebApp;
  /**
   * Optional class for styling purpose
   */
  className?: string;
  /**
   * Callback when uploading image
   */
  onUploadImage: (obj: Record<string, string>) => void;
  /**
   * Callback when deleting image
   */
  onDeleteImage: () => void;
}
