/**
 * TreeItem Component
 *
 * @see Docs     Storybook Link
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/advanced/src/TreeViewCustom/TreeItem.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
 */
import { useEffect, useState } from "react";

import { Folder, RafterRight, RafterDown } from "@ode-react-ui/icons";

import useTreeItemEvents from "./hooks/useTreeItemEvents";
import { TreeItemProps } from "./TreeItemProps";

export const TreeItem = (props: TreeItemProps) => {
  const {
    nodeId,
    label,
    children,
    section,
    selected,
    onItemSelect,
    onItemFold,
    onItemUnfold,
    onItemFocus,
    onItemBlur,
    selectedNodesIds,
  } = props;

  const [expanded, setExpanded] = useState<boolean>(false);

  const {
    handleItemClick,
    handleItemKeyDown,
    handleItemFoldUnfoldClick,
    handleItemFoldUnfoldKeyDown,
    handleItemFocus,
    handleItemBlur,
  } = useTreeItemEvents(
    nodeId,
    label,
    expanded,
    setExpanded,
    onItemSelect,
    onItemFold,
    onItemUnfold,
    onItemFocus,
    onItemBlur,
  );

  useEffect(() => {
    if (selectedNodesIds?.length && selectedNodesIds?.length >= 1) {
      const lastNodeId = selectedNodesIds[
        selectedNodesIds.length - 1
      ] as string;
      selectedNodesIds.some((node: string) => {
        if (node === nodeId && nodeId !== lastNodeId) {
          setExpanded(true);
          return node === nodeId;
        }
        setExpanded(false);
        return false;
      });
    } else {
      setExpanded(false);
    }
  }, [selectedNodesIds]);

  const rafterSize = section ? 16 : 12;

  const renderItem = () => (
    <li
      id={`listitem_${nodeId}`}
      key={nodeId}
      role="treeitem"
      aria-selected={selected}
      aria-expanded={expanded}
    >
      <div>
        <div className="action-container d-flex align-items-center gap-8 px-2">
          <div
            className="py-8"
            tabIndex={0}
            role="button"
            onClick={handleItemFoldUnfoldClick}
            onKeyDown={handleItemFoldUnfoldKeyDown}
            aria-label="fold/unfold button"
          >
            {Array.isArray(children) && !expanded && (
              <RafterRight
                title="RafterRight"
                width={rafterSize}
                height={rafterSize}
              />
            )}

            {Array.isArray(children) && expanded && (
              <RafterDown
                title="RafterDown"
                width={rafterSize}
                height={rafterSize}
              />
            )}

            {/* Hide rafter when no children to keep alignment */}
            {!Array.isArray(children) && (
              <RafterRight
                title="RafterRight"
                width={rafterSize}
                height={rafterSize}
                aria-hidden="true"
                className="opacity-0"
              />
            )}
          </div>
          <div
            tabIndex={0}
            role="button"
            className="flex-fill d-flex align-items-center gap-8 py-8"
            onClick={handleItemClick}
            onKeyDown={handleItemKeyDown}
            onFocus={handleItemFocus}
            onBlur={handleItemBlur}
          >
            {section && <Folder title="Folder" width={20} height={20} />}
            <span>{label}</span>
          </div>
        </div>

        {Array.isArray(children) && <ul role="group">{children}</ul>}
      </div>
    </li>
  );

  return section ? (
    <ul role="tree" className="m-0 p-0">
      {renderItem()}
    </ul>
  ) : (
    renderItem()
  );
};

TreeItem.displayName = "TreeItem";

export default TreeItem;