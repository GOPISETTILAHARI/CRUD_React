import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";

const ShowData = ({ work }) => {
  const { Modify, Delete } = useContext(MainContext);
  console.log(work);
  return (
    <div>
      <tr>
        <td>{work.Topic}</td>
        <td>
          <button onClick={() => Modify(work)} className="btn btn-default">
            Edit
          </button>
        </td>
        <td>
          <button onClick={() => Delete(work)} className="btn btn-default">
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
};
export default ShowData;
