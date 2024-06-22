import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-success ms-4" onClick={addElement}>Add Element</button>
      <ul>
      <table className="mt-2 pb-3">
        <tbody>
        {array.map((item, index) => (
          <tr>
          <div key={index} className="border pt-2 pb-2">
            <b className="h4 ms-2 me-5">{item}</b>
            <button className="btn btn-danger ms-5 me-3" onClick={() => deleteElement(index)}
                    id="wd-delete-element-click">
              Delete</button>
          </div>
          </tr>
        ))}
        </tbody>
      </table>
      </ul>
      <hr/>
    </div>
  );
}
