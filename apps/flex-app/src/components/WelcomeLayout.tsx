import PBUi from "flex_ui/button";
import PBBusiness from "flex_business/button";
import { Button } from "@nubeio/ui/button";
import { Can, useTranslation, useUser } from "@nubeio/flex-core";
type WelcomeComponentProps = {};

export const WelcomeLayout: React.FC<WelcomeComponentProps> = () => {
  const { localize } = useTranslation();
  const {
    state: { user },
    updateUser,
  } = useUser();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 font-bold text-2xl	">
        {localize("welcome", { fallback: "Hi" })}
      </h2>
      <p className="mb-4">Start building amazing things with Rsbuild.</p>
      <div className="flex gap-2">
        <Can action="delete" subject="Database">
          <PBUi />
        </Can>
        <PBBusiness />
      </div>
      <Button className="mt-2">Hi from App</Button>
    </div>
  );
};
