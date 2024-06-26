
import PBUi from "flex_ui/button";
import PBBusiness from "flex_business/button";
import { Button } from "@nubeio/ui/button";
import { LayoutMenu } from "./Menu";

interface ChildComponentProps {
}

export const ChildComponent: React.FC<ChildComponentProps> = () => {
    return (
      <div>
        <LayoutMenu />
        <div className="flex flex-col items-center justify-center h-screen">
          <p>Start building amazing things with Rsbuild.</p>
          <div className="flex gap-2">
            <PBUi />
            <PBBusiness />
          </div>
          <Button className="mt-2">Hi from App</Button>
        </div>
      </div>
    );
  };