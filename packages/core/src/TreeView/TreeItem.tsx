/**
 * TreeItem Component
 *
 * @see Docs     Storybook Link
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/advanced/src/TreeViewCustom/TreeItem.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
 */
import { useState } from "react";

import { Folder, RafterRight, RafterDown } from "@ode-react-ui/icons";

import { TreeItemProps } from "./TreeItemProps";

export const TreeItem = (props: TreeItemProps) => {
  const { nodeId, label, children, section, selected, select } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleFoldClick = (event: React.UIEvent<HTMLDivElement>) => {
    event.preventDefault();
    setExpanded(!expanded);
    event.stopPropagation();
  };

  const handleItemClick = (event: React.UIEvent<HTMLDivElement>) => {
    event.preventDefault();
    select(nodeId);
    event.stopPropagation();
  };

  const rafterSize = section ? 16 : 12;

  const renderItem = () => (
    <li id={nodeId} role="treeitem" aria-selected={selected}>
      <div aria-expanded={expanded}>
        <div className="action-container d-flex align-items-center gap-8 ms-8 px-2 py-8">
          <div
            tabIndex={0}
            role="button"
            onClick={handleFoldClick}
            onKeyPress={handleFoldClick}
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
            onClick={handleItemClick}
            onKeyPress={handleItemClick}
            className="d-flex align-items-center gap-8"
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
