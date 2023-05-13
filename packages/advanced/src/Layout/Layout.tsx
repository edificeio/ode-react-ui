import { type ReactNode } from "react";

import { Main, useOdeClient } from "@ode-react-ui/core";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

import { Header } from "../Header";

const Layout = ({ children }: { children: ReactNode }) => {
  // const { theme, configurationFramework } = useOdeClient();
  const { confQuery, configurationFramework } = useOdeClient();
  return (
    <>
      <Header
        is1d={confQuery?.data?.theme?.is1d}
        src={confQuery?.data?.theme?.basePath}
        configurationFramework={configurationFramework}
      />
      <Main
        className={clsx("d-flex flex-column bg-white", {
          "rounded-4 border": confQuery?.data?.theme?.is1d,
          "mt-24": confQuery?.data?.theme?.is1d,
        })}
      >
        {children}
      </Main>
      <Toaster
        toastOptions={{
          position: "top-right",
        }}
      />
    </>
  );
};

Layout.displayName = "Layout";

export default Layout;
