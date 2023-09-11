import { useState } from "react";
import { useGlobalArrayContext } from "../context/GlobalArrayContext";

function DataForm() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const { addData, globalArray } = useGlobalArrayContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [parseFloat(input1), parseFloat(input2)];
    addData(newData);
    setInput1("");
    setInput2("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>latitude</label>
      <input
        className="latitude"
        type="number"
        step="0.01"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Float Number 1"
      />
      <br />
      <label>longitude</label>
      <input
        className="longitude"
        type="number"
        step="0.01"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Float Number 2"
      />
      <button type="submit">Submit</button>
      <div>
        <h2>Global Array Data</h2>
        <ul>
          {globalArray.map((item, index) => (
            <li key={index}>
              [{item[0]}, {item[1]}]
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default DataForm;
