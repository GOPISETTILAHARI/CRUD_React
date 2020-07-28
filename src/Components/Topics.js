import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";

const Topics = () => {
  const { table } = useContext(MainContext);

  return (
    <div className="container">
      {table.length ? (
        <div>
          <h4>Number of Topics : {table.length}</h4>
          <table className="list">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {table.map((work) => {
                return (
                  <tr key={work._id}>
                    <td>{work.Topic}</td>
                    <td>{work.Details}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>NoTopic</h3>
      )}
    </div>
  );
};

export default Topics;
