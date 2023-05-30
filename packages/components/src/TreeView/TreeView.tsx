import { forwardRef, useEffect, useState } from "react";

import TreeItem from "./TreeItem";
import { TreeNode } from "./TreeNode";

export interface TreeViewProps {
  /**
   * TreeNode data
   */
  data: TreeNode;

  /**
   * Node ID used for navigation folders
   */
  selectedNodesIds?: string[];

  /**
   * Callback function to provide selected item to parent component
   */
  onTreeItemSelect?: Function;

  /**
   * Callback function to provide folded item to parent component
   */
  onTreeItemFold?: Function;

  /**
   * Callback function to provide unfolded item to parent component
   */
  onTreeItemUnfold?: Function;

  /**
   * Callback function to provide focused item to parent component
   */
  onTreeItemFocus?: Function;

  /**
   * Callback function to provide blured item to parent component
   */
  onTreeItemBlur?: Function;
}

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
      selectedNodesIds,
    } = props;

    const [selectedItem, setSelectedItem] = useState<string>("default");

    useEffect(() => {
      if (selectedNodesIds?.length && selectedNodesIds?.length >= 1) {
        setSelectedItem(selectedNodesIds[selectedNodesIds.length - 1]);
      } else {
        setSelectedItem("");
      }
    }, [selectedNodesIds]);

    const handleItemSelect = (nodeId: string) => {
      setSelectedItem(nodeId);
      onTreeItemSelect?.(nodeId);
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
        selectedNodesIds={selectedNodesIds}
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
