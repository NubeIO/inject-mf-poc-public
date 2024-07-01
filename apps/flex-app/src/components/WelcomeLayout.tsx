import PBUi from "flex_ui/button";
import PBBusiness from "flex_business/button";
import { Button } from "@nubeio/ui/button";
type WelcomeComponentProps = {};

export const WelcomeLayout: React.FC<WelcomeComponentProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 font-bold text-2xl	">Welcome Screen</h2>
      <p className="mb-4">Start building amazing things with Rsbuild.</p>
      <div className="flex gap-2">
        <PBUi />
        <PBBusiness />
      </div>
      <Button className="mt-2">Hi from App</Button>
    </div>
  );
};
