import { Alert, Button } from "@ode-react-ui/core";
import useHotToast from "./useHotToast";
import { Toaster } from "react-hot-toast";
import docs from "./useHotToast.docs.mdx";

export default {
  title: "Hooks/useHotToast",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  const { hotToast } = useHotToast(Alert);

  const infoNotify = () =>
    hotToast.info(<h3>This is an info message in a H3 tag</h3>);
  const warningNotify = () => hotToast.warning("This is a warning message!");
  const sucessNotify = () => hotToast.success("This is a success message!");
  const errorNotify = () =>
    hotToast.error(<div>This is an error message in a DIV tag</div>);

  return (
    <>
      <Toaster />

      <div className="d-block p-24">
        <h2>Hot Toast 🍞</h2>
        <div className="d-flex gap-8 p-24">
          <Button color="tertiary" onClick={sucessNotify}>
            Make me a sucess toast
          </Button>
          <Button color="danger" onClick={errorNotify}>
            Make me an error toast
          </Button>
          <Button color="secondary" onClick={infoNotify}>
            Make me an info toast
          </Button>
          <Button color="primary" onClick={warningNotify}>
            Make me a warning toast
          </Button>
        </div>
      </div>
    </>
  );
};
