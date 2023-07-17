import { ChangeEvent, useRef, useState } from "react";

import useDropzone from "./useDropzone";
import { Button } from "../../../components/src/Button";
import { Meta, StoryObj } from "@storybook/react";
import docs from "./useDropzone.mdx";

const meta: Meta<typeof useDropzone> = {
  title: "Hooks/useDropzone",
  parameters: {
    docs: { page: docs },
  },
};

export default meta;
type Story = StoryObj<typeof useDropzone>;

export const Example: Story = {
  render: (args) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [preview, setPreview] = useState<Record<string, string>>({
      name: "",
      image: "",
    });

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
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      handleChange(event.target.files);
    };

    const { handleDragLeave, handleDragging, handleDrop } = useDropzone(
      inputRef,
      handleChange,
    );

    return (
      <>
        <div
          className="drop-zone"
          onDragEnter={handleDragging}
          onDragOver={handleDragging}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <button onClick={() => inputRef?.current?.click()}>Parcourir</button>
          <div className="drop-wrapper">
            <span>
              Glissez-déposez un fichier depuis votre appareil ou cliquez sur
              parcourir
            </span>
          </div>
          <input
            ref={inputRef}
            type="file"
            name="attachement-input"
            id="attachement-input"
            onChange={handleInputChange}
            hidden
          />
        </div>
        <div>
          {preview.image ? (
            <img
              src={preview.image}
              alt={preview.name}
              width={200}
              height={200}
            />
          ) : null}
        </div>
      </>
    );
  },
};
