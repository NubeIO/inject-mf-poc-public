import { useRef, useState, forwardRef } from "react"
import { useInjection } from "inversify-react"
import {
  TYPES,
  LayoutRegistry,
  Layout,
  LayoutPresetType,
} from "@nubeio/flex-core"

import { Button } from "@nubeio/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@nubeio/ui/form"
import { Input } from "@nubeio/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@nubeio/ui/popover"
import { Icon } from "@nubeio/ui/universal-icon"
import { cardStyle } from "./ExtensionMenu"
import * as LucideIcons from "lucide-react"
import { FixedSizeList } from "react-window"

import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectGroup,
} from "@nubeio/ui/select"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  iconName: z.string().min(1, {
    message: "Icon name must be at least 2 characters.",
  }),
})

const LayoutPresets: LayoutPresetType[] = [
  {
    iconName: "Square",
    numOfPanels: "one",
    layoutMode: undefined,
  },
  {
    iconName: "PanelTop",
    numOfPanels: "two",
    layoutMode: "vertical-n",
  },
  {
    iconName: "PanelLeft",
    numOfPanels: "two",
    layoutMode: "horizontal-n",
  },
  {
    iconName: "PanelsLeftBottom",
    numOfPanels: "three",
    layoutMode: "horizontal-n",
  },
  {
    iconName: "PanelsRightBottom",
    numOfPanels: "three",
    layoutMode: "horizontal-r",
  },
  {
    iconName: "PanelsTopLeft",
    numOfPanels: "three",
    layoutMode: "vertical-n",
  },
  {
    iconName: "Table2",
    numOfPanels: "four",
    layoutMode: undefined,
  },
]

const iconNames = Object.keys(LucideIcons)
  .slice(0, -2)
  .filter((iconName) => {
    return !iconName.includes("Icon")
  })

export const LayoutCreation = forwardRef((props: any, forwardRef: any) => {
  const { children } = props
  const layoutRegistry = useInjection<LayoutRegistry>(TYPES.LayoutRegistry)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [selectedLayoutMode, setSelectedLayoutMode] = useState<
    LayoutPresetType | undefined
  >(undefined)
  const [selectedIndex, setSelectedIndex] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      iconName: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    layoutRegistry.registerLayout(
      selectedLayoutMode?.numOfPanels || "one",
      selectedLayoutMode?.layoutMode,
      values.name,
      values.iconName
    )
    closePopover()
  }

  const closePopover = () => {
    form.reset()
    setSelectedLayoutMode(undefined)
    setIsPopoverOpen(false)
  }

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={(open: boolean) => {
        setIsPopoverOpen(open)
        if (!open) {
          setSelectedLayoutMode(undefined)
          form.reset()
        }
      }}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-auto" side="right">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Create Layout</h4>
            <p className="text-sm text-muted-foreground">
              Select a layout preset to create a new layout
            </p>
          </div>
          <div className="flex flex-col items-start gap-y-[5px]">
            {!selectedLayoutMode ? (
              <div className="flex flex-row flex-wrap gap-[5px]">
                {LayoutPresets.map(
                  (preset: LayoutPresetType, index: number) => {
                    return (
                      <Icon
                        key={index}
                        name={preset.iconName}
                        className={`${cardStyle} h-[45px] w-[45px]`}
                        onClick={() => setSelectedLayoutMode(preset)}
                      />
                    )
                  }
                )}
              </div>
            ) : (
              <>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-[5px] w-full"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[15px]">Name</FormLabel>
                          <FormControl>
                            <Input
                              className="w-full h-[30px]"
                              placeholder="layout name..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="iconName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[15px]">
                            Icon Name
                          </FormLabel>
                          <Select
                            onValueChange={(val: any) => {
                              setSelectedIndex(val)
                              field.onChange(val)
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full h-[30px]">
                                <SelectValue>
                                  <span>{selectedIndex}</span>
                                </SelectValue>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Available Icons</SelectLabel>
                                <FixedSizeList
                                  width={"100%"}
                                  height={350}
                                  itemCount={iconNames.length}
                                  itemSize={30}
                                >
                                  {({ index, style, isScrolling }) => (
                                    <SelectItem
                                      value={iconNames[index].toString()}
                                      key={iconNames[index].toString()}
                                      style={{
                                        ...style,
                                      }}
                                    >
                                      {iconNames[index]}
                                    </SelectItem>
                                  )}
                                </FixedSizeList>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormDescription>
                            A valid icon name from the Lucide icon library.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="w-full flex flex-row justify-end">
                      <Button className="mt-[15px]" type="submit">
                        Create
                      </Button>
                    </div>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
})
