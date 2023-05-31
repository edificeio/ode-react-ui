import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../Button";

import Linker, { LinkerProps } from "./Linker";
import React from "react";
import { AppSearchResult } from "../../_models/LinkerModel";

export default {
  title: "Editor/Linker",
  component: Linker,
  args: {
    appPrefixes: ["wiki", "blog", "actualites"],
    onSearch: (appPrefix: string, term: string): Promise<AppSearchResult[]> => {
      function shuffle(arr: Array<any>) {
        let currentIndex = arr.length,
          randomIndex;
        while (currentIndex > 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          const item = arr.at(currentIndex);
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = item;
        }
        return arr;
      }
      return Promise.resolve(
        shuffle([
          { id: "012", prefix: "blog" },
          { id: "345", prefix: "wiki" },
          { id: "678", prefix: "actualites" },
        ]),
      );
    },
  },
} as Meta<typeof Linker>;

type Story = StoryObj<typeof Linker>;

export const Base: Story = {
  render: (args: LinkerProps) => <Linker {...args} />,
  args: {},
};
