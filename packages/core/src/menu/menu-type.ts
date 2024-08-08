import { ACLPermission } from "../acl";
import { LanguageLabel } from "../i18n/types";

export type MenuPath = string[];
export const MAIN_MENU_BAR: MenuPath = ["menubar"];
export const FILE_MENU = [...MAIN_MENU_BAR, "1_file_menu"];
export const HELP_MENU = [...MAIN_MENU_BAR, "99_help_menu"];
export const LANGUAGE_MENU = [...MAIN_MENU_BAR, "8_language"];

export interface MenuNodeMetadata {
  id?: string;
  label?: string | LanguageLabel;
  permission?: ACLPermission;
  execute?(...args: any[]): any | undefined;
}

export interface CompoundMenuNode extends MenuNodeMetadata {
  children: MenuNode[];
  isSubmenu: boolean;
}

export type MenuNode = MenuNodeMetadata & Partial<CompoundMenuNode>;
