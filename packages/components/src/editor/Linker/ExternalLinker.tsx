import { ChangeEvent, useEffect, useRef, useState } from "react";

/**
 * Definition of an external link.
 */
export type ExternalLink = {
  link: string;
  tooltip: string;
  blank: boolean;
};

/**
 * Properties for the ExternalLinker react component.
 */
export interface ExternalLinkerProps {
  /** Default value for the component fields. */
  values?: ExternalLink;
  /** Translations */
  labels?: {
    "linker.address"?: string;
    "linker.address.placeholder"?: string;
    "linker.tooltip"?: string;
    "linker.tooltip.placeholder"?: string;
    "linker.blank"?: string;
  };
  /**
   * Synchronisation of model value
   */
  onChange?: (model: ExternalLink) => void;
}

const ExternalLinker = ({
  labels = {
    "linker.address": "Web site address",
    "linker.address.placeholder": "http://example.com",
    "linker.tooltip": "Tooltip",
    "linker.tooltip.placeholder": "Tooltip",
    "linker.blank": "Open this link in a new tab",
  },
  values = {
    link: "",
    tooltip: "",
    blank: false,
  },
  onChange,
}: ExternalLinkerProps) => {
  const [model, setModel] = useState<ExternalLink>(values);
  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModel({ ...model, link: event.target.value });
  };
  const handleTooltipChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModel({ ...model, tooltip: event.target.value });
  };
  const handleBlankChange = () => {
    setModel({ ...model, blank: !model.blank });
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
          {labels["linker.address"]}
          <input
            type="text"
            placeholder={labels["linker.address.placeholder"]}
            ref={linkRef}
            defaultValue={model.link}
            onChange={handleLinkChange}
          />
        </label>
      </div>

      <div>
        <label>
          {labels["linker.tooltip"]}
          <input
            type="text"
            placeholder={labels["linker.tooltip.placeholder"]}
            defaultValue={model.tooltip}
            onChange={handleTooltipChange}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={model.blank}
            onChange={handleBlankChange}
          />
          &nbsp;{labels["linker.blank"]}
        </label>
      </div>
    </section>
  );
};

export default ExternalLinker;
