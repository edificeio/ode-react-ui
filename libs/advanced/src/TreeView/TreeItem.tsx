/**
 * TreeItem Component
 *
 * @see Docs     Storybook Link
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/libs/advanced/src/TreeViewCustom/TreeItem.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
 */
import { useState } from "react";

import { Folder, RafterRight, RafterDown } from "@ode-react-ui/icons";

import { TreeItemProps } from "./TreeItemProps";

export const TreeItem = (props: TreeItemProps) => {
  const { nodeId, label, children, section, selected, select } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleInteraction = (event: React.UIEvent<HTMLDivElement>) => {
    event.preventDefault();
    setExpanded(!expanded);
    select(nodeId);
    event.stopPropagation();
  };

  const renderItem = () => (
    <li id={nodeId} role="treeitem" aria-selected={selected}>
      <div
        onClick={handleInteraction}
        onKeyPress={handleInteraction}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
      >
        <div>
          {Array.isArray(children) && !expanded && (
            <RafterRight title="RafterRight" />
          )}
          {Array.isArray(children) && expanded && (
            <RafterDown title="RafterDown" />
          )}
          {section && <Folder title="Folder" />}
          <span>{label}</span>
        </div>
        {Array.isArray(children) && <ul role="group">{children}</ul>}
      </div>
    </li>
  );

  return section ? <ul role="tree">{renderItem()}</ul> : renderItem();
};

export default TreeItem;
