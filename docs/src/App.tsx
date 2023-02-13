import "./App.css";
import { AppIcon } from "@ode-react-ui/core";

function App() {
  return (
    <div className="App">
      <AppIcon
        app={{
          icon: "blog",
          address: "",
          display: false,
          displayName: "",
          isExternal: false,
          name: "Blog",
          scope: [],
        }}
      />
    </div>
  );
}

export default App;
