import { TYPES, URI } from "@nubeio/flex-core";
import * as flexCore from "@nubeio/flex-core";
import { Tree, Folder, File } from "@nubeio/ui/tree/tree-view-api";
import { useInjection } from "inversify-react";

const LeftTree = () => {
  const elements = [
    {
      id: "1",
      isSelectable: true,
      name: "src",
      children: [
        {
          id: "2",
          isSelectable: true,
          name: "app.tsx",
        },
        {
          id: "3",
          isSelectable: true,
          name: "components",
          children: [
            {
              id: "20",
              isSelectable: true,
              name: "pages",
              children: [
                {
                  id: "21",
                  isSelectable: true,
                  name: "counter.ts",
                },
                {
                  id: "22",
                  isSelectable: true,
                  name: "trigger.ts",
                },
              ],
            },
          ],
        },
        {
          id: "6",
          isSelectable: true,
          name: "ui",
          children: [
            {
              id: "7",
              isSelectable: true,
              name: "carousel.tsx",
            },
          ],
        },
      ],
    },
  ];
  const openHandler = useInjection<flexCore.OpenHandler>(TYPES.OpenHandler);

  return (
    <Tree
      className="rounded-md w-60 h-60 bg-background overflow-hidden p-2"
      initialSelectedId="21"
      elements={elements}
    >
      <Folder element="src" value="1">
        <File value="2">
          <p> app.tsx </p>
        </File>
        <Folder value="3" element="components">
          <Folder value="20" element="pages">
            <File
              isSelect
              handleSelect={() => {
                openHandler.open(URI.parse("wires://nube.wires/?id=counter"));
              }}
              value="21"
            >
              <p>counter.wires</p>
            </File>
            <File
              handleSelect={() => {
                openHandler.open(URI.parse("wires://nube.wires/?id=trigger"));
              }}
              value="22"
            >
              <p>trigger.wires</p>
            </File>
          </Folder>
        </Folder>
        <Folder value="6" element="ui">
          <File value="7">
            <p>carousel.tsx</p>
          </File>
        </Folder>
      </Folder>
    </Tree>
  );
};

export default LeftTree;
