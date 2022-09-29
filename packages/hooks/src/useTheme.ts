import { useLayoutEffect } from "react";
// Hook
export default function useTheme(theme: any) {
  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      Object.keys(theme).map((key) => {
        return document.documentElement.style.setProperty(
          `--${key}`,
          theme[key],
        );
      });
    },
    [theme], // Only call again if theme object reference changes
  );
}
