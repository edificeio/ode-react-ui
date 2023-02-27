import { useCallback, useRef, useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../Button";
import EmptyScreen from "./EmptyScreen";

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
} as ComponentMeta<typeof EmptyScreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof EmptyScreen> = (args: any) => {
  return (
    <div>
      <EmptyScreen
        {...args}
        imageSrc={`/assets/themes/ode-bootstrap/images/emptyscreen/${args.imageSrc}.svg`}
      />
    </div>
  );
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  imageSrc: "illu-blog",
  title: "C’est un peu calme ici...",
  text: "Il n’y a pas encore de blog. Patience ! C'est ici que vous pourrez bientôt suivre et commenter toutes les activités de la classe.",
};

export const Mindmap = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mindmap.args = {
  imageSrc: "illu-mindmap",
  title: "Une carte pour faire grandir les idées !",
  text: "Avec la carte mentale, les idées se transforment en schémas structurés. Fiches de lecture, prise de notes, présentations orales… on mémorise tout plus facilement.",
};

export const TimelineGenerator = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TimelineGenerator.args = {
  imageSrc: "illu-timelinegenerator",
  title: "Pas de frise ? Ça défrise !",
  text: "Ne perdez plus le fil des évènements. Sur une fresque, retrouvez des images, des sons ou des vidéos pour tout mémoriser plus facilement !",
};

export const Search = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Search.args = {
  imageSrc: "illu-search",
  title: "Désolé, il n’y a rien sous ce nom-là…",
  text: "Aucune ressource ne correspond à votre recherche. Modifiez les critères et tentez à nouveau !",
};

export const Trash = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Trash.args = {
  imageSrc: "illu-trash",
  title: "C’est vide par içi !",
  text: "Aucune ressource dans la corbeille pour le moment.",
};
