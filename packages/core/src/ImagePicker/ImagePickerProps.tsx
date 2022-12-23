import { ComponentPropsWithRef } from "react";

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
  appCode?: string;
  /**
   * Optional ClassName for styling purpose
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
