import React from "react";
import { Active } from "./components/Active";
import Achieves from "./components/Achieves";
import Set from "./components/Set";

function App() {
  //---- useState for contents choice and make onClick event handler

  const [activePage, setActivePage] = React.useState(true);
  const [achievePage, setAchievePage] = React.useState(false);
  const [setPage, setSetPage] = React.useState(false);

  const list1 = ["ActivePage", "AchievePage", "SetPage"];
  const pageHandler = (e) => {
    const target = e.target.value

    list1.map((i) => {
      console.log(set{i});
        // target===i?{set{i}(true)}:{set{i}(false)};
    });
  };

  return (
    <div className="App">
      <h1>here comes the comps</h1>
      <div className="index-nav">
        <button value="ActivePage" onClick={pageHandler} className="index-card">
          Active
        </button>
        <button value="SetPage" onClick={pageHandler} className="index-card">
          Set
        </button>
        <button
          value="AchievePage"
          onClick={pageHandler}
          className="index-card"
        >
          Achieves
        </button>
      </div>
      <div className="main-container">
        {activePage === true ? (
          <Active />
        ) : achievePage === true ? (
          <Achieves />
        ) : setPage === true ? (
          <Set />
        ) : null}
      </div>
    </div>
  );
}

export default App;
