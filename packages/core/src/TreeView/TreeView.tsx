/**
 * TreeView Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-advanced-treeview--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/advanced/src/TreeViewCustom/TreeViewCustom.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
 */
import { forwardRef, useEffect, useState } from "react";

import { TreeItem } from "./TreeItem";
import { TreeNode } from "./TreeNode";
import { TreeViewProps } from "./TreeViewProps";

/**
 * UI TreeView Component
 */

const TreeView = forwardRef<HTMLDivElement, TreeViewProps>(
  (props: TreeViewProps, ref) => {
    const {
      data,
      onTreeItemSelect,
      onTreeItemFold,
      onTreeItemUnfold,
      onTreeItemFocus,
      onTreeItemBlur,
      selectedNodeId,
    } = props;

    const [selectedItem, setSelectedItem] = useState<string>(
      selectedNodeId || "",
    );

    useEffect(() => {
      handleItemSelect(selectedNodeId as string);
    }, [selectedNodeId]);

    const handleItemSelect = (nodeId: string, label?: string) => {
      setSelectedItem(nodeId);
      onTreeItemSelect?.(nodeId, label);
    };

    const handleItemFold = (nodeId: string) => {
      onTreeItemFold?.(nodeId);
    };

    const handleItemUnfold = (nodeId: string) => {
      onTreeItemUnfold?.(nodeId);
    };

    const handleItemFocus = (nodeId: string) => {
      onTreeItemFocus?.(nodeId);
    };

    const handleItemBlur = (nodeId: string) => {
      onTreeItemBlur?.(nodeId);
    };

    const renderTree = (node: TreeNode) => (
      <TreeItem
        key={node.id}
        nodeId={node.id}
        label={node.name}
        section={node.section}
        selectedNodeId={selectedNodeId}
        selected={selectedItem === node.id}
        onItemSelect={handleItemSelect}
        onItemFold={handleItemFold}
        onItemUnfold={handleItemUnfold}
        onItemFocus={handleItemFocus}
        onItemBlur={handleItemBlur}
      >
        {Array.isArray(node.children)
          ? node.children.map((item) => renderTree(item))
          : null}
      </TreeItem>
    );

    return (
      <div ref={ref} id="treeview" className="treeview">
        {renderTree(data)}
      </div>
    );
  },
);

TreeView.displayName = "TreeView";

export default TreeView;
