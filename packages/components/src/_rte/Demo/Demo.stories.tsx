import { Meta, StoryObj } from "@storybook/react";

import LinkerExtension, {
  LinkerExtensionProps,
} from "../_extensions/Linker/LinkerExtension";
import { DemoEditor } from ".";
import React from "react";

export default {
  title: "Rich Text Editor/Demo",
  component: LinkerExtension,
  args: {} as LinkerExtensionProps,
} as Meta<typeof LinkerExtension>;

type Story = StoryObj<typeof LinkerExtension>;

const defaultContent = `
  <p>Salut à tous ! Bienvenue dans la démonstration des extensions du RTE</p>
  <p>Ce contenu est modifiable.</p>
  <p>Clic les boutons (par là ⇖), et enjoy !</p>
  <p>Clic sur ce lien pour 🏄 à <a target="_blank" title="Ya du surf !" href="https://www.yadusurf.com/Meteo-Surf-Report/La-Milady/1308">La Milady</a></p>
`;

export const Base: Story = {
  render: (args: LinkerExtensionProps) => (
    <div className="App min-vh-100">
      <DemoEditor
        content={defaultContent}
        extensions={["italic", "bold", "linker"]}
      ></DemoEditor>
    </div>
  ),
  args: {} as LinkerExtensionProps,
};
