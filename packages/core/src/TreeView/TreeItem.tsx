/**
 * TreeItem Component
 *
 * @see Docs     Storybook Link
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/advanced/src/TreeViewCustom/TreeItem.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
 */
import React, { useState } from "react";

import { Folder, RafterRight, RafterDown } from "@ode-react-ui/icons";

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
  } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleItemSelect = (event: React.UIEvent<HTMLDivElement>) => {
    event.preventDefault();
    onItemSelect?.(nodeId);
    event.stopPropagation();
  };

  const handleItemFoldUnfold = (event: React.UIEvent<HTMLDivElement>) => {
    event.preventDefault();
    setExpanded(!expanded);
    expanded ? onItemUnfold?.(nodeId) : onItemFold?.(nodeId);
    event.stopPropagation();
  };

  const handleItemFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    event.preventDefault();
    onItemFocus?.(nodeId);
    // no need to stop propagation because focus event does not bubble
  };

  const handleItemBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    event.preventDefault();
    onItemBlur?.(nodeId);
    // no need to stop propagation because blur event does not bubble
  };

  const rafterSize = section ? 16 : 12;

  const renderItem = () => (
    <li id={nodeId} role="treeitem" aria-selected={selected}>
      <div aria-expanded={expanded}>
        <div className="action-container d-flex align-items-center gap-8 ms-8 px-2 py-8">
          <div
            tabIndex={0}
            role="button"
            onClick={handleItemFoldUnfold}
            onKeyPress={handleItemFoldUnfold}
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
            className="d-flex align-items-center gap-8"
            onClick={handleItemSelect}
            onKeyPress={handleItemSelect}
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
