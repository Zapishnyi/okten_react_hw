import React from "react";
import "./App.css";
import Toggle from "./components/Toggle/Toggle";
import Previous from "./components/Previous/Previous";
import Storage from "./components/Storage/Storage";

const App = () => {
  return (
    <div className="App">
      <Toggle />
      <Previous />
      <Storage />
    </div>
  );
};
export default App;
