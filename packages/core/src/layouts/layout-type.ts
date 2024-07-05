import { panelPresetArr, presetIdArr } from "../constants";

export type LayoutConfig = {
  id: string;
  style: string;
  parentId: string | null;
  children: LayoutConfig[];
  content: React.ReactNode | null;
  contentUrl: string | null;
};

export type Layout = {
  layout: LayoutConfig;
  name: string;
  icon: string;
  id: string;
};

export type AllLayouts = {
  [index: string]: Layout;
};

export type LayoutPresetType = {
  iconName: string;
  numOfPanels: PresetID;
  layoutMode: PanelPresetModes | undefined;
};

export type PresetID = (typeof presetIdArr)[number];
export type PanelPresetModes = (typeof panelPresetArr)[number];

export type ChangeListener = () => void;

export type LayoutContextMenuProps = {
  children: React.ReactNode;
  layout: Layout;
};
