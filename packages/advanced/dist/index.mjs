import React, { useState } from "react";
import { RafterRight, RafterDown, Folder } from "@ode-react-ui/icons";
const TreeItem = (props) => {
  const { nodeId, label, children, section, selected, select } = props, [expanded, setExpanded] = useState(!1), handleInteraction = (event) => {
    event.preventDefault(), setExpanded(!expanded), select(nodeId), event.stopPropagation();
  }, renderItem = () => /* @__PURE__ */ React.createElement("li", { id: nodeId, role: "treeitem", "aria-selected": selected }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: handleInteraction,
      onKeyPress: handleInteraction,
      role: "button",
      tabIndex: 0,
      "aria-expanded": expanded
    },
    /* @__PURE__ */ React.createElement("div", null, Array.isArray(children) && !expanded && /* @__PURE__ */ React.createElement(RafterRight, { title: "RafterRight" }), Array.isArray(children) && expanded && /* @__PURE__ */ React.createElement(RafterDown, { title: "RafterDown" }), section && /* @__PURE__ */ React.createElement(Folder, { title: "Folder" }), /* @__PURE__ */ React.createElement("span", null, label)),
    Array.isArray(children) && /* @__PURE__ */ React.createElement("ul", { role: "group" }, children)
  ));
  return section ? /* @__PURE__ */ React.createElement("ul", { role: "tree" }, renderItem()) : renderItem();
}, TreeView = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(""), handleSelected = (selectedNodeId) => {
    setSelectedItem(selectedNodeId);
  }, renderTree = (node) => /* @__PURE__ */ React.createElement(
    TreeItem,
    {
      key: node.id,
      nodeId: node.id,
      label: node.name,
      section: node.section,
      selected: selectedItem === node.id,
      select: handleSelected
    },
    Array.isArray(node.children) ? node.children.map((item) => renderTree(item)) : null
  );
  return /* @__PURE__ */ React.createElement("div", { id: "treeview", className: "treeview" }, renderTree(data));
}, TreeView$1 = TreeView;
export {
  TreeView$1 as TreeView
};
