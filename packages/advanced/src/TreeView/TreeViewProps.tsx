export interface RenderTree {
  /**
   * @param id : node's id
   */
  id: string;
  /**
   * @param name : name's id
   */
  name: string;
  /**
   * Is this node contains children ?
   */
  children?: readonly RenderTree[];
}
