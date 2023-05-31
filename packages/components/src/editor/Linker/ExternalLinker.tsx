import { ChangeEvent, useEffect, useRef, useState } from "react";

/**
 * Properties for the ExternalLinker react component.
 */
export interface ExternalLinkerProps {
  /** Default value for the component fields. */
  url?: string;
  /** Translations */
  labels?: { [key: string]: string } & {
    "linker.external"?: string;
    "linker.external.placeholder"?: string;
  };
  /**
   * Synchronisation of model value
   */
  onChange?: (url: string) => void;
}

const ExternalLinker = ({
  labels = {
    "linker.external": "Web site address",
    "linker.external.placeholder": "http://example.com",
  },
  url = "",
  onChange,
}: ExternalLinkerProps) => {
  const [model, setModel] = useState<string>(url);
  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModel(event.target.value);
  };

  useEffect(() => onChange?.(model), [model, onChange]);

  const linkRef = useRef<HTMLInputElement>(null);
  // Auto-focus and auto-select content in the link input field.
  useEffect(() => {
    linkRef.current?.focus();
    linkRef.current?.select();
  }, []);

  return (
    <section>
      <div>
        <label>
          {labels["linker.external"]}
          <input
            type="text"
            placeholder={labels["linker.external.placeholder"]}
            ref={linkRef}
            defaultValue={model}
            onChange={handleLinkChange}
          />
        </label>
      </div>
    </section>
  );
};

export default ExternalLinker;
