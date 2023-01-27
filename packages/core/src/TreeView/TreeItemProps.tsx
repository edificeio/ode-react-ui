export interface TreeItemProps {
  /**
   * Node's id
   */
  nodeId: string;

  /**
   * Node's label
   */
  label: string;

  /**
   * ReactNode children
   */
  children: React.ReactNode;

  /**
   * Is current node a section (root element)
   */
  section?: boolean;

  /**
   * Is node selected
   */
  selected: boolean;

  /**
   * Node ID used for navigation folders
   */
  selectedNodeId?: string;

  /**
   * Callback function to provide selected item to parent component (TreeView)
   */
  onItemSelect?: Function;

  /**
   * Callback function to provide folded item to parent component (TreeView)
   */
  onItemFold?: Function;

  /**
   * Callback function to provide unfolded item to parent component (TreeView)
   */
  onItemUnfold?: Function;

  /**
   * Callback function to provide focused item to parent component (TreeView)
   */
  onItemFocus?: Function;

  /**
   * Callback function to provide blured item to parent component (TreeView)
   */
  onItemBlur?: Function;
}
