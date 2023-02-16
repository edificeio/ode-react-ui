import { Button } from "@ode-react-ui/core";
import { ArrowRight } from "@ode-react-ui/icons";

import { Image } from "../Image";
import { LibraryProps } from "./LibraryProps";

export const Library = ({ text, textButton, src, alt }: LibraryProps) => {
  return (
    <>
      <div className="p-16">
        <Image width="270" height="140" loading="lazy" src={src} alt={alt} />
        <p className="m-8">{text}</p>
        <Button
          rightIcon={<ArrowRight />}
          className="py-0 px-8"
          variant="ghost"
          color="primary"
        >
          {textButton}
        </Button>
      </div>
    </>
  );
};

export default Library;
