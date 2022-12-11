// eslint-disable-next-line import/no-extraneous-dependencies
import { AppCard, Button, IconButton, SearchButton } from "@ode-react-ui/core";
import { AddUser } from "@ode-react-ui/icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Button variant="filled" color="danger" type="button">
        Button
      </Button>
      <IconButton
        type="button"
        color="primary"
        variant="outline"
        icon={<AddUser />}
      />
      <SearchButton type="button" />
      <AppCard
        app={{
          address: "/blog",
          icon: "blog-large",
          name: "Blog",
          scope: [],
          display: false,
          displayName: "",
          isExternal: false,
        }}
      >
        <AppCard.Icon />
      </AppCard>
    </div>
  );
}

export default App;
