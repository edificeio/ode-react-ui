import { TreeNode } from "./TreeNode";

export interface TreeViewProps {
  /**
   * TreeNode data
   */
  data: TreeNode;

  /**
   * Node ID used for navigation folders
   */
  selectedNodeId?: string;

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
