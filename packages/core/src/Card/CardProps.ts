import { ComponentPropsWithRef } from "react";

export interface CardProps extends ComponentPropsWithRef<"div"> {
  /**
   * To show the icon of an application
   */
  appCode?: string;
  /**
   * Person who created resource
   * */
  creatorName?: string;
  /**
   * Name of resource or Folder
   * */
  name: string;
  /**
   * Updated time
   */
  updatedAt?: string;
  /**
   * Shared number
   */
  people?: string;
  /**
   * Display Card as Folder
   */
  isFolder?: boolean;
  /**
   * Show selected Card
   */
  isSelected?: boolean;
  /**
   * Add animation to the Card Component
   */
  isAnimated?: boolean;
  /**
   * Show icon if resource is shared
   */
  isShared?: boolean;
  /**
   * Show icon if resource is public
   */
  isPublic?: boolean;
  /**
   * Skeleton Card
   * */
  isLoading?: boolean;
  /**
   * Additional ClassName for styling purpose
   */
  className?: string;
  /**
   * If Resource has image, `src` props shows the image
   */
  resourceSrc?: string;
  /**
   * User Image Profile
   */
  userSrc?: string;
  /**
   * Action to open a single resource
   */
  onOpen?: () => void;
  /**
   * Select Card and Open ActionBar
   */
  onSelect?: () => void;
}
