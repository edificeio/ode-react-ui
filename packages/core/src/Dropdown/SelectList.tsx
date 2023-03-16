/**
 * SelectList Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-selectList--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Dropdown/SelectList.tsx
 */

import React, { useEffect, useState } from "react";

import clsx from "clsx";

import { OptionListItemType, SelectListProps } from "./SelectListProps";

const SelectList = ({
  options,
  hideCheckbox,
  isMonoSelection,
  onChange = (model) => {},
  model = [],
}: SelectListProps) => {
  const [localModel, setLocalModel] = useState(model);
  const handleOptionClick = (value: string | number) => {
    if (isMonoSelection) {
      setLocalModel([value]);
    } else {
      setLocalModel((previousModel) => {
        const newModel = [...previousModel];
        if (previousModel.includes(value)) {
          newModel.splice(newModel.indexOf(value), 1);
        } else {
          newModel.push(value);
        }
        return newModel;
      });
    }
  };

  useEffect(() => {
    onChange(localModel);
  }, [localModel]);

  return (
    <>
      <div className="select-list">
        {options?.map((option: OptionListItemType, index: number) => (
          <div
            key={option.value}
            className={clsx(
              "select-list-option",
              hideCheckbox &&
                localModel.includes(option.value) &&
                "text-secondary fw-bold",
            )}
            role="checkbox"
            aria-checked={localModel.includes(option.value)}
            onMouseUp={() => {
              handleOptionClick(option.value);
            }}
            tabIndex={0}
            onKeyDown={(event) => {
              event.key === "Enter" && handleOptionClick(option.value);
            }}
          >
            <div className="select-list-option-icon">
              {option.icon &&
                React.createElement(option.icon, {
                  width: "20px",
                  height: "20px",
                })}
            </div>
            <div className="select-list-option-label">{option.label}</div>
            {!hideCheckbox && (
              <div className="select-list-option-checkbox">
                <input
                  readOnly
                  type="checkbox"
                  tabIndex={-1}
                  checked={localModel.includes(option.value)}
                  className="form-check-input c-pointer"
                  id="option.value"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
SelectList.displayName = "SelectList";
export default SelectList;
