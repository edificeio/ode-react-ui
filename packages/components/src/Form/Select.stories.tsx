import { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import Select, { OptionsType } from "./Select";
import FormControl from "./FormControl";
import Label from "./Label";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

const subjectAreaOptions: OptionsType[] = [
  { value: "artActivity", label: "Activités artistiques" },
  { value: "readLearning", label: "Apprentissage de la lecture" },
  { value: "chemistry", label: "Chimie" },
  { value: "law", label: "Droit" },
  { value: "worldDiscovery", label: "Découverte du monde" },
  { value: "economy", label: "Economie" },
  { value: "mediaEducation", label: "Education aux médias" },
  { value: "musicEducation", label: "Education musicale" },
  { value: "sportEducation", label: "Education physique et sportive" },
  { value: "citizenshipEducation", label: "Enseignement civique" },
  { value: "geography", label: "Géographie" },
  { value: "history", label: "Histoire" },
  { value: "artHistory", label: "Histoire des arts" },
  { value: "ComputerScience", label: "Informatique" },
  { value: "languages", label: "Langues" },
  { value: "ancientLanguages", label: "Langues anciennes" },
  { value: "literature", label: "Littérature" },
  { value: "mathematics", label: "Mathématiques" },
  { value: "vocationalGuidance", label: "Orientation" },
  { value: "philosohppy", label: "Philosophie" },
  { value: "physics", label: "Physique" },
  { value: "politicalSscience", label: "Sciences politiques" },
  { value: "sociology", label: "Sociologie" },
  { value: "biology", label: "SVT - Biologie" },
  { value: "geology", label: "SVT - Géologie" },
  { value: "technology", label: "Technologie" },
  { value: "german", label: "Allemand" },
  { value: "english", label: "Anglais" },
  { value: "arabian", label: "Arabe" },
  { value: "spanish", label: "Espagnol" },
  { value: "french", label: "Français" },
  { value: "frensh", label: "Français" },
  { value: "italian", label: "Italien" },
  { value: "japanese", label: "Japonais" },
  { value: "mandarinChinese", label: "Mandarin" },
  { value: "portuguese", label: "Portuguais" },
  { value: "russian", label: "Russe" },
];

export const Base: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>();

    return (
      <div>
        <FormControl id="subjectArea">
          <Label>Discipline</Label>
          <Select
            placeholderOption="Sélectionnez une discipline"
            options={subjectAreaOptions}
            model={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
        <div className="mt-16">Option séléctionnée : {value && value}</div>
      </div>
    );
  },
};

type status = "invalid" | "valid";

export const WithStatus: Story = {
  render: (args) => {
    const [value, setValue] = useState<status>("invalid");

    const statusOptions: OptionsType[] = [
      { label: "Invalid option", value: "invalid" },
      { label: "Valid option", value: "valid" },
    ];

    return (
      <div>
        <FormControl id="subjectArea" status={value}>
          <Label>
            Discipline {value === "invalid" ? "invalide" : "valide"}
          </Label>
          <Select
            options={statusOptions}
            model={value}
            onChange={(e) => {
              setValue(e.target.value as status);
            }}
          />
        </FormControl>
      </div>
    );
  },
};
