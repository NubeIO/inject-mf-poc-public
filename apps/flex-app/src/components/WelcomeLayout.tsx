import PBUi from "flex_ui/button";
import PBBusiness from "flex_business/button";
import { Button } from "@nubeio/ui/button";
import { Can, useTranslation } from "@nubeio/flex-core";
import { ThemeColorToggle } from "./theme-color-toggle";
import { ThemeModeToggle } from "./theme-mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@nubeio/ui/card";
import { Input } from "@nubeio/ui/input";
import { Label } from "@nubeio/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@nubeio/ui/select";
type WelcomeComponentProps = {};

export const WelcomeLayout: React.FC<WelcomeComponentProps> = () => {
  const { localize } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-2">
        <ThemeModeToggle />
        <ThemeColorToggle />
      </div>
      <h2 className="mb-4 font-bold text-2xl	">
        {localize("welcome", { fallback: "Hi" })}
      </h2>
      <p className="mb-4">Start building amazing things with Rsbuild.</p>
      <div className="flex gap-2">
        <PBUi />
        <PBBusiness />
      </div>
      <ButtonGroup />
      <CardExample />
      <Can action="delete" subject="Database">
        <Button className="mt-2">Delete Database</Button>
      </Can>
    </div>
  );
};

const ButtonGroup = () => {
  return (
    <div className="flex gap-2">
      <Button className="mt-2" variant="destructive">
        Destructive
      </Button>
      <Button className="mt-2" variant="ghost">
        Ghost
      </Button>
      <Button className="mt-2" variant="link">
        Link
      </Button>
      <Button className="mt-2" variant="outline">
        Outline
      </Button>
      <Button className="mt-2" variant="secondary">
        Secondary
      </Button>
    </div>
  );
};

const CardExample = () => {
  return (
    <Card className="w-[350px] mt-3">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};
