import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MainContext = createContext();
const MainContextProvider = (props) => {
  useEffect(() => {
    const func = async () => {
      const res = await axios.get("http://localhost:5000/data");
      setTable(res.data);
    };
    func();
  }, []);
  const [table, setTable] = useState([]);
  const [item, setItem] = useState(null);
  const Modify = (work) => {
    setItem(work);
  };
  const EditWork = async (work) => {
    const res = await axios.patch(
      `http://localhost:5000/data/${item._id}`,
      work
    );
    console.log(res);
    let works = [...table];
    setTable(works.map((w) => (work._id === w._id ? work : w)));
    setItem(null);
  };
  const AddWork = async (work) => {
    const res = await axios.post("http://localhost:5000/data", work);
    const works = [...table, res.data];
    setTable(works);
  };
  const Delete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/data/${id}`);
    console.log(res);
    let works = [...table];
    setTable(works.filter((w) => w._id !== id));
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
