import { StoryObj, Meta } from "@storybook/react";

import EmptyScreen, { EmptyScreenProps } from "./EmptyScreen";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/EmptyScreen",
  component: EmptyScreen,
  argTypes: {
    imageSrc: {
      control: "select",
      options: [
        "illu-blog",
        "illu-collaborativeeditor",
        "illu-collaborativewall",
        "illu-exercizer",
        "illu-mindmap",
        "illu-scrapbook",
        "illu-search",
        "illu-timelinegenerator",
        "illu-trash",
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof EmptyScreen>;

type Story = StoryObj<typeof EmptyScreen>;

export const Template = (args: EmptyScreenProps) => {
  return (
    <div>
      <EmptyScreen
        {...args}
        imageSrc={`/assets/themes/ode-bootstrap/images/emptyscreen/${args.imageSrc}.svg`}
      />
    </div>
  );
};

export const Base: Story = {
  render: Template,

  args: {
    imageSrc: "illu-blog",
    title: "C’est un peu calme ici...",
    text: "Il n’y a pas encore de blog. Patience ! C'est ici que vous pourrez bientôt suivre et commenter toutes les activités de la classe.",
  },
};

export const Mindmap: Story = {
  render: Template,

  args: {
    imageSrc: "illu-mindmap",
    title: "Une carte pour faire grandir les idées !",
    text: "Avec la carte mentale, les idées se transforment en schémas structurés. Fiches de lecture, prise de notes, présentations orales… on mémorise tout plus facilement.",
  },
};

export const TimelineGenerator: Story = {
  render: Template,

  args: {
    imageSrc: "illu-timelinegenerator",
    title: "Pas de frise ? Ça défrise !",
    text: "Ne perdez plus le fil des évènements. Sur une fresque, retrouvez des images, des sons ou des vidéos pour tout mémoriser plus facilement !",
  },
};

export const Search: Story = {
  render: Template,

  args: {
    imageSrc: "illu-search",
    title: "Désolé, il n’y a rien sous ce nom-là…",
    text: "Aucune ressource ne correspond à votre recherche. Modifiez les critères et tentez à nouveau !",
  },
};

export const Trash: Story = {
  render: Template,

  args: {
    imageSrc: "illu-trash",
    title: "C’est vide par içi !",
    text: "Aucune ressource dans la corbeille pour le moment.",
  },
};
