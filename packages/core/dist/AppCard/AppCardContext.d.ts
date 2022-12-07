interface AppCardContextProps {
    icon: string;
    displayName: string;
    code: string;
}
export declare const AppCardContext: import("react").Context<AppCardContextProps | null>;
export default function useAppCardContext(): AppCardContextProps;
export {};
