export interface TreeItemProps {
  /**
   * @param nodeId: node's id
   */
  nodeId: string;

  /**
   * @param label: node's label
   */
  label: string;

  /**
   * @param children: react component children
   */
  children: React.ReactNode;

  /**
   * @param section: is node a section (root element)
   */
  section?: boolean;

  /**
   * @param selected: is node selected
   */
  selected: boolean;

  /**
   * @param select: function to select item and deselect other selec
   */
  select: Function;
}
