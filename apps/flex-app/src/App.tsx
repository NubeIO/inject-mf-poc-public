import "./App.css";

import PBUi from "flex_ui/button";
import PBBusiness from "flex_business/button";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <PBUi />
        <PBBusiness />
      </div>
    </div>
  );
};

export default App;
