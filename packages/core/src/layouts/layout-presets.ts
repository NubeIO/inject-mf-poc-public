import { PanelPresetModes } from "./layout-type";

const H = "horizontal";
const V = "vertical";

export const onePanel = () => {
  return {
    id: "a",
    style: H,
    parentId: null,
    content: null,
    children: [],
  };
};

// possible modes: horizontal, vertical
export const twoPanel = (mode: PanelPresetModes) => {
  const topLevelMode = mode.split("-")[0];
  return {
    id: "a",
    style: topLevelMode === H ? H : V,
    parentId: null,
    content: null,
    children: [
      {
        id: "b",
        style: H,
        parentId: "a",
        children: [],
        content: null,
      },
      {
        id: "c",
        style: H,
        parentId: "a",
        children: [],
        content: null,
      },
    ],
  };
};

// possible modes: horizontal-n, vertical-n, horizontal-r, vertical-r
export const threePanel = (mode: PanelPresetModes) => {
  const [topLevelMode, subLevelMode] = mode.split("-");
  return {
    id: "a",
    style: topLevelMode === H ? H : V,
    parentId: null,
    content: null,
    children: [
      {
        id: "b",
        style: topLevelMode === H ? V : H,
        parentId: "a",
        children:
          subLevelMode === "r"
            ? [
                {
                  id: "e",
                  style: H,
                  parentId: "b",
                  children: [],
                  content: null,
                },
                {
                  id: "d",
                  style: H,
                  parentId: "b",
                  children: [],
                  content: null,
                },
              ]
            : [],
        content: null,
      },
      {
        id: "c",
        style: V,
        parentId: "a",
        children:
          subLevelMode === "r"
            ? []
            : [
                {
                  id: "g",
                  style: H,
                  parentId: "c",
                  children: [],
                  content: null,
                },
                {
                  id: "f",
                  style: H,
                  parentId: "c",
                  children: [],
                  content: null,
                },
              ],
        content: null,
      },
    ],
  };
};

export const fourPanel = () => {
  return {
    id: "a",
    style: H,
    parentId: null,
    content: null,
    children: [
      {
        id: "b",
        style: V,
        parentId: "a",
        children: [
          {
            id: "c",
            style: H,
            parentId: "b",
            children: [],
            content: null,
          },
          {
            id: "d",
            style: H,
            parentId: "b",
            children: [],
            content: null,
          },
        ],
        content: null,
      },
      {
        id: "e",
        style: V,
        parentId: "a",
        children: [
          {
            id: "f",
            style: H,
            parentId: "e",
            children: [],
            content: null,
          },
          {
            id: "g",
            style: H,
            parentId: "e",
            children: [],
            content: null,
          },
        ],
        content: null,
      },
    ],
  };
};
