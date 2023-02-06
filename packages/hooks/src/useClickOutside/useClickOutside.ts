// import { useEffect } from "react";

// export default function useClickOutside(ref: any, handler: any) {
//   useEffect(
//     () => {
//       const listener = (event: any) => {
//         // Do nothing if clicking ref's element or descendent elements
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//         handler(event);
//       };
//       document.addEventListener("mousedown", listener);
//       document.addEventListener("touchstart", listener);
//       return () => {
//         document.removeEventListener("mousedown", listener);
//         document.removeEventListener("touchstart", listener);
//       };
//     },
//     // Add ref and handler to effect dependencies
//     // It's worth noting that because passed in handler is a new ...
//     // ... function on every render that will cause this effect ...
//     // ... callback/cleanup to run every render. It's not a big deal ...
//     // ... but to optimize you can wrap handler in useCallback before ...
//     // ... passing it into this hook.
//     [ref, handler],
//   );
// }

// https://mantine.dev/hooks/use-click-outside
import { useEffect, useRef } from "react";

const DEFAULT_EVENTS = ["mousedown", "touchstart"];

export default function useClickOutside<T extends HTMLElement = any>(
  handler: () => void,
  events?: string[] | null,
  nodes?: Array<HTMLElement | null>,
) {
  const ref = useRef<T>();

  useEffect(() => {
    const listener = (event: any) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore =
          target?.hasAttribute("data-ignore-outside-clicks") ||
          (!document.body.contains(target) && target.tagName !== "HTML");
        const shouldTrigger = nodes.every(
          (node) => !!node && !event.composedPath().includes(node),
        );
        shouldTrigger && !shouldIgnore && handler();
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    (events || DEFAULT_EVENTS).forEach((fn) => {
      document.addEventListener(fn, listener);
    });

    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => {
        document.removeEventListener(fn, listener);
      });
    };
  }, [ref, handler, nodes]);

  return ref;
}
