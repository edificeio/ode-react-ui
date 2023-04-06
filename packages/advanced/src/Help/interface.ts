export interface HelpProps {
  isHelpOpen: boolean;
  parsedHeadline: any;
  parsedContent: any;
  error: boolean;
  setIsHelpOpen: (state: boolean) => void;
}
