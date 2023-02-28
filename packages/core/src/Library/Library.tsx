import { ArrowRight } from "@ode-react-ui/icons";

import { Button } from "../Button";
import { Image } from "../Image";
import { LibraryProps } from "./LibraryProps";

export const Library = ({ text, textButton, src, alt, url }: LibraryProps) => {
  return (
    <>
      <div className="p-16">
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
};

export default Library;
