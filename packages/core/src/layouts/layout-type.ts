export type LayoutConfig = {
  id: string;
  style: string;
  parentId: string | null;
  children: LayoutConfig[];
  content: React.ReactNode | null;
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

export const presetIdArr = ["one", "two", "three", "four"] as const;
export const panelPresetArr = [
  "horizontal-n",
  "vertical-n",
  "horizontal-r",
  "vertical-r",
];
export type PresetID = (typeof presetIdArr)[number];
export type PanelPresetModes = (typeof panelPresetArr)[number];
