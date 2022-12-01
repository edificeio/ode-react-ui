/**
 * TreeView Component
 *
 * @see Docs     Storybook Link
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/libs/advanced/src/TreeViewCustom/TreeViewCustom.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
 */
import { useState } from "react";

import { TreeItem } from "./TreeItem";
import { TreeNode } from "./TreeNode";

export const TreeView = ({ data }: any) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSelected = (selectedNodeId: string) => {
    setSelectedItem(selectedNodeId);
  };

  const renderTree = (node: TreeNode) => (
    <TreeItem
      key={node.id}
      nodeId={node.id}
      label={node.name}
      section={node.section}
      selected={selectedItem === node.id}
      select={handleSelected}
    >
      {Array.isArray(node.children)
        ? node.children.map((item) => renderTree(item))
        : null}
    </TreeItem>
  );

  return (
    <div id="treeview" className="treeview">
      {renderTree(data)}
    </div>
  );
};

export default TreeView;
