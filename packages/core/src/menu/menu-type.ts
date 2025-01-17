export type MenuPath = string[];
export const MAIN_MENU_BAR: MenuPath = ["menubar"];
export interface MenuNodeMetadata {
  id?: string;
  label?: string;
  execute?(...args: any[]): any | undefined;
}

export interface CompoundMenuNode extends MenuNodeMetadata {
  children: MenuNode[];
  isSubmenu: boolean;
}

export type MenuNode = MenuNodeMetadata & Partial<CompoundMenuNode>;
