import React, { createContext, useState, useEffect } from "react";
export const MainContext = createContext();
const MainContextProvider = (props) => {
  const data = JSON.parse(localStorage.getItem("works")) || [];

  const [table, setTable] = useState(data);
  const [item, setItem] = useState(null);
  useEffect(() => {
    localStorage.setItem("works", JSON.stringify(table));
  }, [table]);
  const Modify = (work) => {
    setItem(work);
  };
  const EditWork = (work) => {
    let works = [...table];
    setTable(
      works.map((w) =>
        w.Topic === item.Topic && w.Details === item.Details ? work : w
      )
    );
    setItem(null);
  };
  const AddWork = (work) => {
    const works = [...table, work];
    setTable(works);
  };
  const Delete = (work) => {
    let works = [...table];
    setTable(
      works.filter(
        (w) => !(w.Topic === work.Topic && w.Details === work.Details)
      )
    );
  };
  return (
    <MainContext.Provider
      value={{ item, table, AddWork, EditWork, Modify, Delete }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default MainContextProvider;
