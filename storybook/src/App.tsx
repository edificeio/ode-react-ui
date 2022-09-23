import { useState } from "react";

import { Accordion } from "@ode-react-ui/core";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      id: "1",
      title: "Accordion Item #1",
      text: "This is the first item's accordion body.",
    },
    {
      id: "2",
      title: "Accordion Item #2",
      text: "This is the second item's accordion body.",
    },
    {
      id: "3",
      title: "Accordion Item #3",
      text: "This is the third item's accordion body.",
    },
  ];

  return (
    <div className="App">
      <Accordion className="accordion" defaultKey="3" as="div">
        {data.map((item) => {
          return (
            <Accordion.Item key={item.id} itemKey={item.id}>
              <Accordion.Header
                headerClassName="accordion-header"
                buttonClassName="accordion-button"
                collapsedClassName="collapsed"
              >
                {item.title}
              </Accordion.Header>
              <Accordion.Body
                className="accordion-collapse collapse"
                showClassName="show"
              >
                <strong>{item.text}</strong>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
