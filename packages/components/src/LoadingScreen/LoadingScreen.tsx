import { forwardRef, Ref } from "react";

import clsx from "clsx";

export interface LoadingScreenProps {
  position: boolean;
}

const LoadingScreen = forwardRef(
  ({ position = true }: { position?: boolean }, ref: Ref<HTMLDivElement>) => {
    const image = "/assets/themes/ode-bootstrap/images/screen-loading.gif";

    const classes = clsx(
      "loading-screen top-0 end-0 start-0 bottom-0 d-grid justify-content-center align-items-center z-2000",
      {
        "position-fixed": !position,
        "position-static": position,
      },
    );

    return (
      <>
        <div ref={ref} className={classes}>
          <div className="bg-white rounded-circle mx-auto">
            <img src={image} alt="loading" />
          </div>
        </div>
        {!position && <div className="modal-backdrop fade show"></div>}
      </>
    );
  },
);

LoadingScreen.displayName = "LoadingScreen";

export default LoadingScreen;
