import React from "react";
import { init, loadRemote } from "@module-federation/enhanced/runtime";
import axios from "axios";
import { injectable } from "inversify";



import { generateUuid } from "@nubeio/ui";



import { LAYOUT_LOCAL_STORAGE_KEY, presetIdArr } from "../constants";
import { fourPanel, onePanel, threePanel, twoPanel } from "./layout-presets";
import { AllLayouts, ChangeListener, Layout, LayoutConfig, PanelPresetModes, PresetID } from "./layout-type";


@injectable()
export class LayoutRegistry {
  protected allLayouts: AllLayouts = {};
  protected selectedLayout: Layout | undefined = undefined;
  private layoutChangeListeners = new Set<ChangeListener>();
  private layoutSelectedListeners = new Set<ChangeListener>();

  constructor() {
    const storedLayouts = localStorage.getItem(LAYOUT_LOCAL_STORAGE_KEY);
    if (storedLayouts) {
      // parsedLayouts contains the saved layouts, however, the content of each none empty layout needs to be repopulated
      // this is due to the fact that the content of a layout is a react component and it cannot be serialised and saved in local storage
      const parsedLayouts = JSON.parse(storedLayouts);
      (async () => {
        const response: any = await axios.get("http://localhost:4000/manifest");
        if (!response || !response?.data?.manifest) return;
        const manifest = response?.data?.manifest;
        const manifestUrls = manifest.map((item: any) => item.url);

        await init({
          name: "host",
          remotes: manifest,
        });
        for (const key in parsedLayouts) {
          const singleLayout = parsedLayouts[key];
          const newLayout: Layout = {
            ...singleLayout,
            layout: await this.traverseAndPopulate(
              singleLayout.layout,
              manifestUrls,
            ),
          };
          parsedLayouts[key] = newLayout;
        }
        this.allLayouts = parsedLayouts;
        this.notifyLayoutChangeListeners();
      })();
    }
  }

  get getAllLayouts(): AllLayouts {
    return this.allLayouts;
  }
  get getSelectedLayout(): Layout | undefined {
    return this.selectedLayout;
  }

  set setAllLayouts(layouts: AllLayouts) {
    this.allLayouts = layouts;
    this.notifyLayoutChangeListeners();
  }
  set setSelectedLayout(layout: Layout | undefined) {
    if (!layout) return;
    this.selectedLayout = layout;
    this.notifySelectedLayoutChangeListeners();
    this.allLayouts[layout.id] = layout;
    this.notifyLayoutChangeListeners();
  }

  async loadRemoteModuleByUrl(url: string): Promise<any> {
    const res: any = await loadRemote(url);
    const Extension = res.default;
    return <Extension />;
  }

  async traverseAndPopulate(
    singleLayout: LayoutConfig,
    manifestUrls: string[],
  ) {
    if (singleLayout.children.length === 0) {
      if (
        singleLayout.content &&
        singleLayout.contentUrl &&
        manifestUrls.includes(singleLayout.contentUrl)
      ) {
        const content = await this.loadRemoteModuleByUrl(
          singleLayout.contentUrl,
        );
        return {
          ...singleLayout,
          content: content,
        };
      }
      return {
        ...singleLayout,
        content: null,
      };
    } else {
      const children: LayoutConfig[] = await Promise.all(
        singleLayout.children.map(async (child: LayoutConfig) => {
          return await this.traverseAndPopulate(child, manifestUrls);
        }),
      );
      return {
        ...singleLayout,
        children: children,
      };
    }
  }

  registerLayout(
    presetId: PresetID,
    mode: PanelPresetModes | undefined,
    name: string,
    iconName: string,
  ): void {
    if (!presetIdArr.includes(presetId)) return;
    let preset: LayoutConfig | undefined = undefined;
    switch (presetId) {
      case "one":
        preset = onePanel();
        break;
      case "two":
        preset = mode ? twoPanel(mode) : undefined;
        break;
      case "three":
        preset = mode ? threePanel(mode) : undefined;
        break;
      case "four":
        preset = fourPanel();
        break;

      default:
        preset = onePanel();
        break;
    }

    if (!preset) return;

    const newLayout: Layout = {
      layout: preset,
      name: name,
      icon: iconName,
      id: generateUuid(),
    };

    this.add(newLayout);
    this.notifyLayoutChangeListeners();
  }

  removeLayout(id: string): void {
    if (!this.allLayouts[id]) return;
    this.remove(id);
    this.notifyLayoutChangeListeners();
    if (this.selectedLayout && this.selectedLayout.id === id) {
      this.selectedLayout = undefined;
      this.notifySelectedLayoutChangeListeners();
    }
  }

  persistLayouts(): void {
    localStorage.setItem(
      LAYOUT_LOCAL_STORAGE_KEY,
      JSON.stringify(this.allLayouts),
    );
  }

  private add(newLayout: Layout): void {
    // add layout to allLayouts
    this.allLayouts[newLayout.id] = newLayout;
  }
  private remove(id: string): void {
    // remove layout from allLayouts
    delete this.allLayouts[id];
  }

  onLayoutChange(listener: ChangeListener): void {
    this.layoutChangeListeners.add(listener);
  }
  removeOnLayoutChange(listener: ChangeListener): void {
    this.layoutChangeListeners.delete(listener);
  }
  private notifyLayoutChangeListeners(): void {
    // persist layouts
    this.persistLayouts();
    // notify all listeners
    for (const listener of this.layoutChangeListeners) {
      listener();
    }
  }

  onSelectedLayoutChange(listener: ChangeListener): void {
    this.layoutSelectedListeners.add(listener);
  }
  removeOnSelectedLayoutChange(listener: ChangeListener): void {
    this.layoutSelectedListeners.delete(listener);
  }
  private notifySelectedLayoutChangeListeners(): void {
    for (const listener of this.layoutSelectedListeners) {
      listener();
    }
  }

  changeLayoutContent = (
    selectedPanel: LayoutConfig,
    content: React.ReactNode,
    extensionUrl: string | null,
  ) => {
    if (!this.selectedLayout) return;
    // create a copy of the initial layout and modify it
    const copy: LayoutConfig = { ...this.selectedLayout.layout };
    // locate the selected panel in the layout and update its content
    const currentPanel = this.findPanelById(copy, selectedPanel.id);
    if (currentPanel === null) return;
    currentPanel.content = content;
    currentPanel.contentUrl = extensionUrl;

    this.selectedLayout.layout = copy;

    this.notifyLayoutChangeListeners();
    this.notifySelectedLayoutChangeListeners();
  };

  changeLayout = (
    selectedPanel: LayoutConfig,
    orientation: string,
    op: string,
  ) => {
    if (!this.selectedLayout) return;

    const newConfig = {
      id: generateUuid(),
      style: orientation,
      parentId: selectedPanel.parentId,
      children: [],
      content: null,
      contentUrl: null,
    };

    // create a copy of the initial layout and modify it
    const copy: LayoutConfig = { ...this.selectedLayout.layout };

    const traverseAndModify = (copyLayout: LayoutConfig) => {
      // find the parent of the current selected panel
      // check if the children of each level of the old layout and modified the parent of the selected panel
      let positionInChildrenArray = -1;
      const hasChild = copyLayout.children.some(
        (child: LayoutConfig, index: number) => {
          if (child.id === selectedPanel.id) {
            positionInChildrenArray = index;
            return true;
          } else {
            return false;
          }
        },
      );

      if (hasChild && positionInChildrenArray !== -1) {
        const parent = copyLayout;

        if (op === "add") {
          if (parent.style === orientation) {
            // if the newly added style is the same with the parent style then add the new config to the parent's children
            parent.children.splice(positionInChildrenArray + 1, 0, newConfig);
          } else {
            // else make the current selected panel a new parent and add its former self and the new panel to its children
            const newParentId = generateUuid();
            const newParent = {
              id: newParentId,
              style: orientation,
              parentId: parent.id,
              children: [
                {
                  ...selectedPanel,
                  parentId: newParentId,
                },
                { ...newConfig, parentId: newParentId },
              ],
              content: null,
              contentUrl: null,
            };
            parent.children[positionInChildrenArray] = newParent;
          }
        } else if (op === "remove") {
          // parent.children.splice(positionInChildrenArray, 1);
          if (parent.children.length > 2) {
            // if the number of children is greater than 2 then remove the selected panel from the parent's children
            parent.children.splice(positionInChildrenArray, 1);
          } else {
            // else remove the selected panel and make its sibling the parent
            // find the sibling of the selected panel
            const sibling = parent.children.filter(
              (child: LayoutConfig) => child.id !== selectedPanel.id,
            )[0];

            // if the style of sibling is the same with its grandparent then spread all the children of the sibling to the grandparent
            // find grandparent style
            const grandParent = this.findPanelById(copy, parent.parentId);
            if (
              sibling.children.length !== 0 &&
              grandParent &&
              grandParent.style === sibling.style
            ) {
              const updatedSibilingChildren = sibling.children.map(
                (child: LayoutConfig) => {
                  child.parentId = grandParent.id;
                  return child;
                },
              );
              // find the index of the parent in the grandparent's children array
              const parentIndex = grandParent.children.findIndex(
                (child: LayoutConfig) => child.id === parent.id,
              );
              // remove the parent from the grandparent's children array
              grandParent.children.splice(parentIndex, 1);
              // spread the updated sibling children to the grandparent's children array
              grandParent.children.splice(
                parentIndex,
                0,
                ...updatedSibilingChildren,
              );
            } else {
              parent.children = [...sibling.children];
              parent.style = sibling.style;
              parent.id = sibling.id;
              parent.content = sibling.content;
              parent.contentUrl = sibling.contentUrl;
            }
          }
        }
      } else {
        copyLayout.children.forEach((child: LayoutConfig) => {
          traverseAndModify(child);
        });
      }
    };

    if (copy.children.length === 0 && copy.parentId === null) {
      // if the layout has no children, then the selected panel is the root
      // make a new root and the old root its child
      copy.id = generateUuid();
      copy.style = orientation;
      copy.children = [
        { ...selectedPanel, parentId: copy.id },
        { ...newConfig, parentId: copy.id },
      ];
    } else {
      traverseAndModify(copy);
    }

    this.selectedLayout.layout = copy;
    this.notifyLayoutChangeListeners();
    this.notifySelectedLayoutChangeListeners();
  };

  findPanelById = (
    layout: LayoutConfig,
    id: string | null,
  ): LayoutConfig | null => {
    if (id === null) {
      return layout;
    } else if (layout.id === id) {
      return layout;
    } else if (layout.children.length !== 0) {
      for (let i = 0; i < layout.children.length; i++) {
        const res = this.findPanelById(layout.children[i], id);
        if (res !== null) {
          return res;
        }
      }
    }

    return null;
  };
}