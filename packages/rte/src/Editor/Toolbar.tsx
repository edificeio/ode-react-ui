import { SetStateAction, useState } from "react";

import { IconButton } from "@ode-react-ui/components";
import { Dropdown } from "@ode-react-ui/components";
import { SelectList } from "@ode-react-ui/components";
import { OptionListItemType } from "@ode-react-ui/components";
import { VisuallyHidden } from "@ode-react-ui/components";
import {
  TextSize,
  TextBold,
  TextItalic,
  TextUnderline,
  Image,
  Mic,
  RecordVideo,
  TextTypo,
} from "@ode-react-ui/icons";
import { Attachment } from "@ode-react-ui/icons";
import { Link } from "@ode-react-ui/icons";
import { Smiley } from "@ode-react-ui/icons";
import { ListUnorder } from "@ode-react-ui/icons";
import { AlignLeft } from "@ode-react-ui/icons";
import { TextColor } from "@ode-react-ui/icons";
import { ListOrder } from "@ode-react-ui/icons";
import { AlignCenter } from "@ode-react-ui/icons";
import { AlignRight } from "@ode-react-ui/icons";
import { AlignJustify } from "@ode-react-ui/icons";
import { Editor } from "@tiptap/react";

import { RteExtensionType } from "../extensions";

export interface ToolbarProps {
  /** Attach the bar to this rich text editor instance. */
  editor: Editor | null;
  /** List of extensions to instanciate. */
  extensions?: Array<RteExtensionType>;
}

/** Internal representation of the available extensions. */
/* type ExtensionCatalog = {
  [type in RteExtensionType]?: {
    extension: RteExtension;
    isActive: () => boolean;
  };
}; */

const typographies: OptionListItemType[] = [
  {
    value: "'Roboto', sans-serif",
    label: "Roboto",
  },
  {
    value: "'Baskervville', serif",
    label: "Baskervville",
  },
  {
    value: "'Inconsolata', monospace",
    label: "Inconsolata",
  },
  {
    value: "'Handlee', cursive",
    label: "Handlee",
  },
  {
    value: "OpenDyslexic",
    label: "Open dyslexic",
  },
];

const sizes: OptionListItemType[] = [
  {
    value: 0,
    label: "Titre 1",
  },
  {
    value: 1,
    label: "Titre 2",
  },
  {
    value: 2,
    label: "Grand",
  },
  {
    value: 3,
    label: "Normal",
  },
  {
    value: 4,
    label: "Petit",
  },
];

const emojis = [
  {
    value: 0,
    label: "😀",
  },
  {
    value: 1,
    label: "😃",
  },
  {
    value: 2,
    label: "😄",
  },
  {
    value: 3,
    label: "😁",
  },
  {
    value: 4,
    label: "😆",
  },
];

const Toolbar = ({ editor, extensions }: ToolbarProps) => {
  const [option, setOption] = useState<(string | number)[]>(
    typographies[0].label,
  );
  const [size, setSize] = useState<(string | number)[]>([]);

  if (!editor) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".8rem",
        position: "relative",
        zIndex: "2",
      }}
    >
      <div
        className="button-group"
        style={{ display: "flex", alignItems: "center", gap: ".8rem" }}
      >
        <IconButton
          aria-label="Add image"
          icon={<Image />}
          type="button"
          className="btn-image"
          variant="tertiary"
          disabledHover
          backgroundColor="#E4F4FF"
        />
        <IconButton
          aria-label="Add video"
          icon={<RecordVideo />}
          type="button"
          className="btn-video"
          variant="tertiary"
          disabledHover
          backgroundColor="#FFEFE3"
        />
        <IconButton
          aria-label="Add audio"
          icon={<Mic />}
          type="button"
          className="btn-audio"
          variant="tertiary"
          disabledHover
          backgroundColor="#FAEBFF"
        />
      </div>
      <div
        className="button-group"
        style={{ borderLeft: "1px solid #E4E4E4", paddingInline: "1.6rem" }}
      >
        <Dropdown
          trigger={
            <IconButton
              aria-label="Select typo text"
              color="tertiary"
              icon={<TextTypo />}
              type="button"
              variant="ghost"
              disabledHover
            />
          }
          content={
            <SelectList
              isMonoSelection
              options={typographies}
              model={option}
              hideCheckbox
              onChange={(model: string[]) =>
                editor.chain().focus().setFontFamily(model[0]).run()
              }
            />
          }
        />

        <Dropdown
          trigger={
            <IconButton
              aria-label="Select typo size"
              color="tertiary"
              icon={<TextSize />}
              type="button"
              variant="ghost"
              disabledHover
            />
          }
          content={
            <SelectList
              isMonoSelection
              options={sizes}
              model={size}
              hideCheckbox
              onChange={(model: number) => {
                const result = model[0];

                if (result === 0) editor.commands.setHeading({ level: 1 });
                if (result === 1) editor.commands.setHeading({ level: 2 });
                if (result === 3) editor.commands.setParagraph();
              }}
            />
          }
        />
        <Dropdown
          trigger={
            <IconButton
              aria-label="Add User"
              color="tertiary"
              icon={<TextColor />}
              type="button"
              variant="ghost"
              disabledHover
            />
          }
          content={
            <div
              className="button-group d-flex flex-wrap gap-8 p-4"
              style={{ width: "180px" }}
            >
              <button
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#4A4A4A",
                  borderRadius: "0.2rem",
                }}
                onClick={() => editor.chain().focus().setColor("#4A4A4A").run()}
                className={`color ${
                  editor.isActive("textStyle", { color: "#4A4A4A" })
                    ? "is-active"
                    : ""
                }`}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#812E9C" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#812E9C").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#812E9C",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#1E8EC9" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#1E8EC9").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#1E8EC9",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#569E1B" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#569E1B").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#569E1B",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#DFBC09" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#DFBC09").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#DFBC09",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#E31E39" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#E31E39").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#E31E39",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#F17A17" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#F17A17").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#F17A17",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#B0B0B0" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#B0B0B0").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#B0B0B0",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#A348C0" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#A348C0").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#A348C0",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#46AFE6" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#46AFE6").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#46AFE6",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#5AC235" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#5AC235").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#5AC235",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#F1CA00" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#F1CA00").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#F1CA00",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#FF3A55" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#FF3A55").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#FF3A55",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#FF8D2E" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#FF8D2E").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#FF8D2E",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#E4E4E4" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#E4E4E4").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#E4E4E4",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
              <button
                className={`color ${
                  editor.isActive("textStyle", { color: "#C79ED5" })
                    ? "is-active"
                    : ""
                }`}
                onClick={() => editor.chain().focus().setColor("#C79ED5").run()}
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#C79ED5",
                  borderRadius: "0.2rem",
                }}
              >
                <VisuallyHidden>color</VisuallyHidden>
              </button>
            </div>
          }
        />
      </div>
      <div
        className="button-group"
        style={{ borderLeft: "1px solid #E4E4E4", paddingInline: "1.6rem" }}
      >
        <IconButton
          aria-label="Add User"
          color="tertiary"
          icon={<TextBold />}
          type="button"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        />
        <IconButton
          aria-label="Add User"
          color="tertiary"
          icon={<TextItalic />}
          type="button"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        />
        <IconButton
          aria-label="Add User"
          color="tertiary"
          icon={<TextUnderline />}
          type="button"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        />
      </div>
      <div
        className="button-group"
        style={{ borderLeft: "1px solid #E4E4E4", paddingInline: "1.6rem" }}
      >
        <IconButton
          aria-label="Add User"
          color="tertiary"
          icon={<Attachment />}
          type="button"
          variant="ghost"
        />
        <IconButton
          aria-label="Add User"
          color="tertiary"
          icon={<Link />}
          type="button"
          variant="ghost"
        />
        <Dropdown
          trigger={
            <IconButton
              aria-label="Select an emoji"
              color="tertiary"
              icon={<Smiley />}
              type="button"
              variant="ghost"
            />
          }
          content={
            <div className="button-group">
              {emojis.map((emoji) => (
                <IconButton
                  aria-label="Select an emoji"
                  key={emoji.value}
                  color="tertiary"
                  icon={emoji.label}
                  type="button"
                  variant="ghost"
                />
              ))}
            </div>
          }
        />
      </div>
      <div
        className="button-group"
        style={{ borderLeft: "1px solid #E4E4E4", paddingInline: "1.6rem" }}
      >
        <Dropdown
          trigger={
            <IconButton
              aria-label="Select a list"
              color="tertiary"
              icon={<ListUnorder />}
              type="button"
              variant="ghost"
            />
          }
          content={
            <div className="button-group">
              <IconButton
                aria-label="Unordered list"
                color="tertiary"
                icon={<ListUnorder />}
                type="button"
                variant="ghost"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
              />
              <IconButton
                aria-label="Ordered list"
                color="tertiary"
                icon={<ListOrder />}
                type="button"
                variant="ghost"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive("orderedList") ? "is-active" : ""}
              />
            </div>
          }
        />
        <Dropdown
          trigger={
            <IconButton
              aria-label="Select text alignment"
              color="tertiary"
              icon={<AlignLeft />}
              type="button"
              variant="ghost"
            />
          }
          content={
            <div className="button-group">
              <IconButton
                aria-label="Left text alignment"
                color="tertiary"
                icon={<AlignLeft />}
                type="button"
                variant="ghost"
                onClick={() =>
                  editor.isActive({ textAlign: "left" })
                    ? editor.chain().focus().unsetTextAlign().run()
                    : editor.chain().focus().setTextAlign("left").run()
                }
                className={
                  editor.isActive({ textAlign: "left" }) ? "is-active" : ""
                }
              />
              <IconButton
                aria-label="Center text alignment"
                color="tertiary"
                icon={<AlignCenter />}
                type="button"
                variant="ghost"
                onClick={() =>
                  editor.isActive({ textAlign: "center" })
                    ? editor.chain().focus().unsetTextAlign().run()
                    : editor.chain().focus().setTextAlign("center").run()
                }
                className={
                  editor.isActive({ textAlign: "center" }) ? "is-active" : ""
                }
              />
              <IconButton
                aria-label="Right text alignment"
                color="tertiary"
                icon={<AlignRight />}
                type="button"
                variant="ghost"
                onClick={() =>
                  editor.isActive({ textAlign: "right" })
                    ? editor.chain().focus().unsetTextAlign().run()
                    : editor.chain().focus().setTextAlign("right").run()
                }
                className={
                  editor.isActive({ textAlign: "right" }) ? "is-active" : ""
                }
              />
              <IconButton
                aria-label="Justify text alignment"
                color="tertiary"
                icon={<AlignJustify />}
                type="button"
                variant="ghost"
                onClick={() =>
                  editor.isActive({ textAlign: "justify" })
                    ? editor.chain().focus().unsetTextAlign().run()
                    : editor.chain().focus().setTextAlign("justify").run()
                }
                className={
                  editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
                }
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

Toolbar.displayName = "Toolbar";
export default Toolbar;
