import { Meta, StoryObj } from "@storybook/react";

import DemoEditor from "./DemoEditor";
import LinkerExtension from "../extensions/Linker/LinkerExtension";

export default {
  title: "Rich Text Editor/Demo",
  component: LinkerExtension,
  args: {} as LinkerExtensionProps,
} as Meta<typeof LinkerExtension>;

type Story = StoryObj<typeof LinkerExtension>;

const defaultContent = `
  <p>Salut à tous ! Bienvenue dans la <i>démonstration</i> des extensions du RTE</p>
  <p>Ce contenu est <b>modifiable</b>.</p>
  <p>Clique les boutons (par là ⇖), et enjoy ! Ou clique ce lien pour 🏄 à <a target="_blank" title="ride !" href="https://www.yadusurf.com/Meteo-Surf-Report/La-Milady/1308">La Milady</a></p>
  <br>
  <p>Ci-après l'exemple de contenu riche issu de l'ENT :</p>
  <hr>
  <div>Bonsoir Chers parents,</div><div>​</div><div>Voici le tableau de la kermesse mis à jour.</div><div>Merci à nouveau aux parents qui viennent de s'inscrire pour tenir un jeu.</div><div>​</div><div>Je vous souhaite une bonne soirée et un bon week-end.</div><div>​Bien cordialement</div><div>​</div><div>Maîtresse Marie<div><div class="download-attachments"><h2>Pièces jointes</h2><div class="attachments"><a href="/workspace/document/b4124ad0-3cce-4210-889f-abe18baf6516"><div class="download"></div>Tableau kermesse.docx</a></div></div><div><br><div><br></div></div>​</div></div><div>​</div>
  <hr>
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
