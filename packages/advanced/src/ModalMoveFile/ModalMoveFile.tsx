/**
 * ModalMoveFile Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-advanced-treeview--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/advanced/src/TreeViewCustom/TreeViewCustom.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
 */

import { FC } from "react";

import clsx from "clsx";

import { TreeView } from "../TreeView";
import { TreeNode } from "../TreeView/TreeViewProps";

interface ModalMoveFileProps {
  isOpen: boolean;
  treeViewData: TreeNode | false;
  className?: string;
}

const ModalMoveFile: FC<ModalMoveFileProps> = ({
  isOpen,
  treeViewData = false,
  className = "",
}) => {
  return (
    <div
      className={clsx("modal", className, isOpen && "d-block")}
      tabIndex={-1}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Déplacer</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Sélectionner le dossier vers lequel déplacer les élements</p>

            {treeViewData && (
              <div className="my-24">
                <TreeView data={treeViewData} />
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalMoveFile.displayName = "ModalMoveFile";

export default ModalMoveFile;
