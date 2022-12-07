export default function useThemeHelper(): {
    getPlatform: () => {
        readonly deploymentTag: string;
        readonly cdnDomain: string;
        readonly apps: {
            initialize(app: import("ode-ts-client").App, alternativeApp?: boolean | undefined): Promise<void>;
            getPublicConf(app: import("ode-ts-client").App): Promise<any>;
            loadI18n(app: import("ode-ts-client").App): Promise<void>; /**
             * Extracted from an old code base.
             * */
        };
        readonly theme: import("ode-ts-client").ITheme;
        readonly analytics: {
            parameters<T extends import("ode-ts-client").ITrackingParams>(type: import("ode-ts-client").TrackingType): Promise<T | undefined>;
            xiti(): Promise<import("ode-ts-client").IXitiTrackingParams | undefined>;
            readonly status: import("ode-ts-client").AnalyticStatus;
        };
        readonly idiom: import("ode-ts-client").IIdiom;
        listLanguages(): Promise<string[]>;
    };
    getCDN: () => string;
    loadThemeJs: (theme: string) => void;
    removeThemeJS: () => void | undefined;
};
