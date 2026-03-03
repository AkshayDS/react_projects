import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const entryElement = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        {...entry}
      ></Entry>
    );
  });
  return (
    <>
      <Header></Header>
      <main className="container">{entryElement}</main>
    </>
  );
}

export default App;
