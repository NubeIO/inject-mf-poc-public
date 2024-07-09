import {
  TYPES,
  URI,
  OpenService,
  useInjection,
  useStore,
  BearStore,
} from "@nubeio/flex-core";
import { Tree, Folder, File } from "@nubeio/ui/tree/tree-view-api";

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
          name: "main.app",
        },
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
        {
          id: "6",
          isSelectable: true,
          name: "schedule",
          children: [
            {
              id: "7",
              isSelectable: true,
              name: "schedule.sch",
            },
          ],
        },
      ],
    },
  ];
  const openHandler = useInjection<OpenService>(TYPES.OpenService);
  const bearService = useStore<BearStore>(TYPES.BearStore);
  const bears = bearService.bears;

  return (
    <Tree
      className="rounded-md w-60 h-60 bg-background overflow-hidden p-2"
      initialSelectedId="21"
      elements={elements}
    >
      <Folder element="src" value="1">
        <Folder value="20" element="wires">
          <File
            isSelect
            handleSelect={() => {
              openHandler.open(URI.parse("wires://nube.app/?id=counter"));
            }}
            value="21"
          >
            <p>counter.wires</p>
          </File>
          <File isSelect handleSelect={bearService.increasePopulation} value="21">
            <p>Bears: {bears}</p>
          </File>
          <File
            handleSelect={() => {
              openHandler.open(URI.parse("wires://nube.app/?id=trigger"));
            }}
            value="22"
          >
            <p>trigger.wires</p>
          </File>
        </Folder>
        <Folder value="6" element="schedule">
          <File
            handleSelect={() => {
              openHandler.open(URI.parse("schedule://nube.app/?id=123"));
            }}
            value="7"
          >
            <p>schedule.sch</p>
          </File>
        </Folder>
      </Folder>
      <File
        handleSelect={() => {
          openHandler.open(URI.parse("nube://nube.app/settings"));
        }}
        value="2"
      >
        <p> settings </p>
      </File>
    </Tree>
  );
};

export default LeftTree;
