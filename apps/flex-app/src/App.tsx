import PBUi from "flex_ui/button";
import PBBusiness from "flex_business/button";

import { Button } from "@nubeio/ui/button";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div className="flex gap-2">
        <PBUi />
        <PBBusiness />
      </div>
      <Button className="mt-2">Hi from App</Button>
    </div>
  );
};

export default App;
