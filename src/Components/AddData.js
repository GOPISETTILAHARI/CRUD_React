import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../Context/MainContext";
const AddData = () => {
  const { item, AddWork, EditWork } = useContext(MainContext);
  const [data, setData] = useState({ Topic: "", Details: "" });
  useEffect(() => {
    if (item) setData(item);
  }, [item]);
  const handleTopic = (e) => {
    setData({ ...data, Topic: e.target.value });
  };
  const handleDetails = (e) => {
    setData({ ...data, Details: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ Topic: e.target.Topic.value, Details: e.target.Details.value });
    item ? EditWork(data) : AddWork(data);
    setData({ Topic: "", Details: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Topics</h2>
      <input
        onChange={handleTopic}
        value={data.Topic}
        type="text"
        name="Topic"
        placeholder="Topic"
      />
      <input
        onChange={handleDetails}
        value={data.Details}
        type="text"
        name="Details"
        placeholder="Details"
      />

      <button type="submit" className="btn btn-primary">
        {item ? "Edit" : "Add"}
      </button>
    </form>
  );
};
export default AddData;
