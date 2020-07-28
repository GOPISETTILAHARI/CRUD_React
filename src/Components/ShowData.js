import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";

const ShowData = ({ work }) => {
  const { Modify, Delete } = useContext(MainContext);
  return (
    <div>
      {work.Topic}
      {"   "}
      <button onClick={() => Modify(work)} className="btn btn-default">
        Edit
      </button>
      {"   "}
      <button onClick={() => Delete(work._id)} className="btn btn-default">
        Delete
      </button>
    </div>
  );
};
export default ShowData;
