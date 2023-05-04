import { Ref, forwardRef } from "react";

import { ArrowRight } from "@ode-react-ui/icons";

import { Button } from "../Button";
import { Image } from "../Image";

export interface LibraryProps {
  /**
   * Text presentation library
   */
  text: string;
  /**
   * Text button library
   */
  textButton: string;
  /**
   * Src image library
   */
  src: string;
  /**
   * Alt image library
   */
  alt: string;
  /**
   * Url image library
   */
  url: string;
}

const Library = forwardRef(
  (
    { text, textButton, src, alt, url }: LibraryProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <>
        <div ref={ref} className="p-16">
          <Image
            width="270"
            height="140"
            loading="lazy"
            className="rounded"
            src={src}
            alt={alt}
          />
          <p className="m-8">{text}</p>
          <a href={url} target="_blank" rel="noreferrer">
            <Button
              rightIcon={<ArrowRight />}
              className="py-0 px-8"
              variant="ghost"
              color="primary"
            >
              {textButton}
            </Button>
          </a>
        </div>
      </>
    );
  },
);

Library.displayName = "Library";

export default Library;
