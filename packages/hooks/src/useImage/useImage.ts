import { useCallback, useState } from "react";

interface useImageProps {
  src: string;
  placeholder: string;
}

export default function useImage({ src, placeholder }: useImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || placeholder);

  const onError = useCallback(() => {
    setImgSrc(placeholder);
  }, []);

  return { imgSrc, onError };
}
