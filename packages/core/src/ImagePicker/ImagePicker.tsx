import {
  ChangeEvent,
  DragEvent,
  forwardRef,
  Ref,
  useRef,
  useState,
} from "react";

import { Delete, Edit } from "@ode-react-ui/icons";
import clsx from "clsx";

import { Avatar } from "../Avatar";
import { IconButton } from "../Button";
import { FormControl, Input } from "../Form";
import { ImagePickerProps } from "./ImagePickerProps";

const ImagePicker = forwardRef(
  (
    {
      label,
      addButtonLabel = "Add image",
      deleteButtonLabel = "Delete image",
      src,
      className,
      appCode = "placeholder",
      onUploadImage,
      onDeleteImage,
    }: ImagePickerProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [preview, setPreview] = useState<Record<string, string>>({
      name: "",
      image: src || "",
    });
    const [, setDragging] = useState<boolean>(false);

    const handleChange = (files?: FileList | null) => {
      setPreview({ ...preview, name: "", image: "" });

      const file = files?.[0];
      if (!file) {
        return;
      }

      const newPreview = {
        ...preview,
        name: file.name,
        image: URL.createObjectURL(file),
      };

      setPreview(newPreview);
      onUploadImage(newPreview);
    };

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleClean = () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      const cleanPreview = { ...preview, name: "", image: "" };
      setPreview(cleanPreview);
      onDeleteImage();
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      handleChange(event.target.files);
    };

    const handleDragging = (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setDragging(true);
    };

    const handleDragLeave = (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setDragging(false);
    };

    const handleDrop = (event: DragEvent) => {
      handleDragLeave(event);
      const files = event.dataTransfer?.files;
      handleChange(files);

      if (inputRef.current && files) {
        inputRef.current.files = files;
      }
    };

    const classes = clsx("image-input", className);

    return (
      <FormControl
        id="image-input"
        className={classes}
        onDragEnter={handleDragging}
        onDragOver={handleDragging}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        ref={ref}
      >
        <div className="image-input-actions gap-8">
          <IconButton
            aria-label={addButtonLabel}
            color="tertiary"
            icon={<Edit />}
            onClick={handleClick}
            type="button"
            variant="ghost"
          />
          <IconButton
            aria-label={deleteButtonLabel}
            color="danger"
            disabled={!preview.image}
            icon={<Delete width="20" height="20" />}
            onClick={handleClean}
            type="button"
            variant="ghost"
          />
        </div>
        <FormControl.Label>
          <span className="visually-hidden">{label}</span>
          <Input
            accept="image/*"
            hidden
            onChange={handleInputChange}
            ref={inputRef}
            size="sm"
            type="file"
          />
          <Avatar
            variant="square"
            alt={preview?.name}
            appCode={appCode}
            isIconUrl={!!preview.image || !!src}
            size="lg"
            src={preview.image}
          />
        </FormControl.Label>
      </FormControl>
    );
  },
);

ImagePicker.displayName = "ImagePicker";

export default ImagePicker;
