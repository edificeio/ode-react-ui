export type AppIconSize = "16" | "24" | "32" | "40" | "48";

export interface AppIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  title?: string;
  color?: string;
  size?: AppIconSize;
}
