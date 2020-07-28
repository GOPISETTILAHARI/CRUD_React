import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import ShowData from "./ShowData";
const ShowTable = () => {
  const { table } = useContext(MainContext);
  return (
    <div className="container" style={{ backgroundColor: "#F0E68C" }}>
      {table.length ? (
        <div className="list">
          {table.map((work) => {
            return <ShowData work={work} key={work._id} />;
          })}
        </div>
      ) : (
        <h3>NoTopic</h3>
      )}
    </div>
  );
};

export default ShowTable;
