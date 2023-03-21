/**
 * Hook useTrapFocus: Trap focus inside a HTML Element.
 * Useful to trap focus inside a Modal to make it ADA compliant.
 *
 * source: https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
 *
 * @param ref reference of the HTMLElement to trap focus (example: a Modal ref)
 */
export default function useTrapFocus(ref: React.RefObject<HTMLElement>): void {
  const rootElement: HTMLElement | null = ref.current;

  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  // get first element to be focused inside modal
  const firstFocusableElement = rootElement?.querySelectorAll(
    focusableElements,
  )[0] as HTMLElement;
  const focusableContent = rootElement?.querySelectorAll(focusableElements);
  // get last element to be focused inside modal
  const lastFocusableElement = focusableContent?.[
    focusableContent.length - 1
  ] as HTMLElement;

  const handleKeydown = (event: KeyboardEvent) => {
    const isTabPressed = event.key === "Tab";
    if (!isTabPressed) {
      return;
    }
    if (event.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement?.focus(); // add focus for the last focusable element
        event.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement?.focus(); // add focus for the first focusable element
        event.preventDefault();
      }
    }
  };

  document.addEventListener("keydown", handleKeydown);
}
