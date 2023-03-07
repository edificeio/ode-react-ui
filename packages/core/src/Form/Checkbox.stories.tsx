import { useCallback, useRef, useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkbox from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args: any) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div className="d-flex align-items-center">
        <Checkbox
          checked={isChecked}
          onChange={() => setIsChecked((isChecked) => !isChecked)}
          label="Activer l'option"
        />
      </div>
      <div>
        {isChecked ? "L'option est activée" : "L'option est désactivée"}
      </div>
    </div>
  );
};

export const Base = Template.bind({});

const DisabledTemplate: ComponentStory<typeof Checkbox> = (args: any) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="d-flex align-items-center">
      <Checkbox
        checked={isChecked}
        disabled={true}
        label="Impossible de me désactiver"
        onChange={() => setIsChecked((isChecked) => !isChecked)}
      />
    </div>
  );
};
export const Disabled = DisabledTemplate.bind({});

const IndeterminateTemplate: ComponentStory<typeof Checkbox> = (args: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(true);

  const handleOnChange = () => {
    setIsChecked((isChecked) => {
      setIsIndeterminate(isChecked);
      return !isChecked && !isIndeterminate;
    });
  };

  const label = () => {
    if (isIndeterminate) {
      return "Ni décoché, ni coché";
    } else {
      return isChecked ? "Coché" : "Décoché";
    }
  };

  return (
    <div className="d-flex align-items-center">
      <Checkbox
        checked={isChecked}
        indeterminate={isIndeterminate}
        label={label()}
        onChange={handleOnChange}
      />
    </div>
  );
};
export const Indeterminate = IndeterminateTemplate.bind({});
