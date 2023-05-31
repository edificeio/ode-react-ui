import { ChangeEvent, useEffect, useRef, useState } from "react";

/**
 * Definition of an internal link.
 */
export type InternalLink = {
  application: string;
  text: string;
};

/**
 * Properties for the InternalLink react component.
 */
export interface InternalLinkerProps {
  /** Translations */
  labels?: { [key: string]: string } & {
    search?: string;
  };
  options?: string[];
  /**
   * Synchronisation of model value
   */
  onChange?: (model: InternalLink) => void;
}

const InternalLinker = ({
  labels = {
    search: "Search",
  },
  options = ["test1", "test2"],
  onChange,
}: InternalLinkerProps) => {
  const [model, setModel] = useState<InternalLink>({
    application: "",
    text: "",
  });
  const handleAppChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setModel({ ...model, application: event.target.value });
    //loadApplicationResources();
  };
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModel({ ...model, text: event.target.value });
    //loadApplicationResources();
  };

  useEffect(() => onChange?.(model), [model, onChange]);

  const focusRef = useRef<HTMLSelectElement>(null);
  // Auto-focus and auto-select content in the link input field.
  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <section>
      <span>
        <select ref={focusRef} onChange={handleAppChange}>
          {options?.map((option) => {
            return (
              <option
                key={option}
                value={option}
                selected={model.application === option}
              >
                {option}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder={labels["search"]}
          onChange={handleTextChange}
        />
      </span>
    </section>
  );
};

export default InternalLinker;
