import { injectable } from "inversify";

import { MenuNode, MenuPath } from "./menu-type";

@injectable()
export class MenuRegistry {
  protected readonly _root: MenuNode = {
    children: [],
  };

  get root(): MenuNode {
    return this._root;
  }

  registerMenuAction(menuPath: MenuPath, item: MenuNode): void {
    if (menuPath.length > 0 && menuPath[0] === "menubar") {
      this.addToMenu(this._root.children!, menuPath.slice(1), item);
      this.sortChildren(this._root);
    }
  }

  private sortChildren(node: MenuNode): void {
    if (node.children) {
      node.children.sort((a, b) => {
        if (a.id && b.id) {
          return a.id.localeCompare(b.id);
        }
        return 0;
      });

      node.children.forEach((child) => this.sortChildren(child));
    }
  }

  private addToMenu(
    nodes: MenuNode[],
    menuPath: MenuPath,
    item: MenuNode,
  ): void {
    const currentId = menuPath[0];
    let currentNode = nodes.find((node) => node.id === currentId);

    if (!currentNode) {
      currentNode = { id: currentId, label: "", children: [] };
      nodes.push(currentNode);
    }

    if (menuPath.length === 1) {
      currentNode.label = item.label;
      currentNode.execute = item.execute;
      return;
    }

    if (!currentNode.children) {
      currentNode.children = [];
    }

    this.addToMenu(currentNode.children, menuPath.slice(1), item);
  }
}
