/**
 * Button  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-button--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Button/Button.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
import { forwardRef, Ref } from "react";

import { Search } from "@ode-react-ui/icons";
import clsx from "clsx";

import { ButtonRef } from "./ButtonProps";
import IconButton, { IconButtonProps } from "./IconButton";

type PickedProps = "type" | "icon";

export interface SearchButtonProps extends Pick<IconButtonProps, PickedProps> {}

/**
 * SearchButton extends the IconButton component by omitting unnecessary props.
 */

const SearchButton = forwardRef(
  (
    { icon = <Search />, ...restProps }: SearchButtonProps,
    ref?: Ref<ButtonRef>,
  ) => {
    const classes = clsx("btn-search");

    return (
      <IconButton ref={ref} className={classes} icon={icon} {...restProps} />
    );
  },
);

SearchButton.displayName = "SearchButton";

export default SearchButton;
