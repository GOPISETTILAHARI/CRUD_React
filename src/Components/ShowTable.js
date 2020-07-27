import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainContext } from "../Context/MainContext";
import ShowData from "./ShowData";
const ShowTable = () => {
  const { table } = useContext(MainContext);
  return (
    <div className="container" style={{ backgroundColor: "#F0E68C" }}>
      {table.length ? (
        <table className="list">
          <tbody>
            {table.map((work) => {
              return <ShowData work={work} key={uuidv4()} />;
            })}
          </tbody>
        </table>
      ) : (
        <h3>NoTopic</h3>
      )}
    </div>
  );
};

export default ShowTable;
