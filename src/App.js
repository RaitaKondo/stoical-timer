import React from "react";
import { Active } from "./components/Active";
import Achieves from "./components/Achieves";
import Set from "./components/Set";

function App() {
  //---- useState for contents choice and make onClick event handler

  // const [activePage, setActivePage] = React.useState(true);
  // const [achievePage, setAchievePage] = React.useState(false);
  // const [setPage, setSetPage] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [adding, setAdding] = React.useState({});

  const [page, setPage] = React.useState({
    activePage: true,
    achievePage: false,
    setPage: false,
  });

  const [value, setValue] = React.useState({
    subject: "",
    hours: 0,
    minutes: 0,
  });
  console.log(items, value);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const pageHandler = (e) => {
    const target = e.target.value;

    const newPages = {};

    for (const key in page) {
      if (key === target) {
        newPages[key] = true;
      } else {
        newPages[key] = false;
      }
    }
    setPage(newPages);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems((prev) => {
      return [...prev, value];
    });
    setValue({
      subject: "",
      hours: 0,
      minutes: 0,
    });
  };

  return (
    <div className="App">
      <h1>here comes the comps</h1>
      <div className="index-nav">
        <button value="activePage" onClick={pageHandler} className="index-card">
          Active
        </button>
        <button value="setPage" onClick={pageHandler} className="index-card">
          Set
        </button>
        <button
          value="achievePage"
          onClick={pageHandler}
          className="index-card"
        >
          Achieves
        </button>
      </div>
      <div className="main-container">
        {page.activePage === true ? (
          <Active />
        ) : page.achievePage === true ? (
          <Achieves />
        ) : page.setPage === true ? (
          <Set
            items={items}
            addItem={addItem}
            handleChange={handleChange}
            value={value}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
