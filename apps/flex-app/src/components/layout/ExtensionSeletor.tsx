import { useState } from "react"
import { useInjection } from "inversify-react"
import { TYPES, LayoutRegistry } from "@nubeio/flex-core"
import { Popover, PopoverContent, PopoverTrigger } from "@nubeio/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@nubeio/ui/select"

export const WidgetSelection = (props: any) => {
  const { children, extensionManifest, selectedPanel } = props
  const layoutRegistry = useInjection<LayoutRegistry>(TYPES.LayoutRegistry)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const extraOptions = [
    {
      name: "wires_counter",
      url: "wires://nube.app/?id=counter",
    },
    {
      name: "wires_todo",
      url: "wires://nube.app/?id=todo",
    },
    {
      name: "wires_trigger",
      url: "wires://nube.app/?id=trigger",
    },
  ]

  const handleExtensionChange = async (extensionUrl: string) => {
    layoutRegistry.changeLayoutContent(selectedPanel, extensionUrl)

    // close the popover
    setIsPopoverOpen(false)
  }

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={(open: boolean) => setIsPopoverOpen(open)}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Extension Selection</h4>
            <p className="text-sm text-muted-foreground">
              Select an extension to add to this panel
            </p>
          </div>
          <div className="grid gap-2">
            <Select onValueChange={handleExtensionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an extension" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available Extensions</SelectLabel>
                  {[...extraOptions, ...extensionManifest].map(
                    (item: any, index: number) => {
                      return (
                        <SelectItem key={item.url} value={item.url}>
                          {item.name}
                        </SelectItem>
                      )
                    }
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
