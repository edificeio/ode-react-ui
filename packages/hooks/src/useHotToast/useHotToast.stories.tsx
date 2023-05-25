import { Alert } from "../../../components/src/Alert";
import { Button } from "../../../components/src/Button";
import useHotToast from "./useHotToast";
import { Toaster } from "react-hot-toast";
// @ts-ignore
import docs from "./useHotToast.docs.mdx";

export default {
  title: "Hooks/useHotToast",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  const { hotToast } = useHotToast(Alert);

  const infoNotify = () => hotToast.info("This is an info message!");

  const warningNotify = () =>
    hotToast.warning(<h3>This is a warning message in a H3 tag</h3>);

  const sucessNotify = () => hotToast.success("This is a success message!");

  const errorNotify = () =>
    hotToast.error(<div>This is an error message in a DIV tag</div>);

  const dismissibleInfoNotify = () =>
    hotToast.info(
      `This is an info message with infinite duration and dismissible.`,
      {
        duration: Infinity,
        isDismissible: true,
      },
    );

  return (
    <>
      <Toaster />

      <div className="d-block p-24">
        <h2>Hot Toast 🍞</h2>
        <div className="d-flex gap-8 p-24">
          <Button color="tertiary" onClick={sucessNotify}>
            Sucess toast
          </Button>
          <Button color="danger" onClick={errorNotify}>
            Error toast
          </Button>
          <Button color="primary" onClick={infoNotify}>
            Info toast
          </Button>
          <Button color="secondary" onClick={warningNotify}>
            Warning toast
          </Button>
          <Button
            color="primary"
            variant="outline"
            onClick={dismissibleInfoNotify}
          >
            Dismissible toast
          </Button>
        </div>
      </div>
    </>
  );
};
