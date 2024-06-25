import "./App.css";
import "antd/dist/antd.css";
import React from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

const App: React.FC = () => {
  return (
    <>
      <Page1></Page1>
      <Page2></Page2>
    </>
  );
};

export default App;
