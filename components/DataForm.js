import { useEffect, useState } from "react";
import { useGlobalArrayContext } from "../context/GlobalArrayContext";

function DataForm({ data }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const { addData, globalArray } = useGlobalArrayContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input1);
    console.log(input2);
    data && input1 === "" && input2 === ""
      ? addData(data)
      : addData([input1, input2]);
    setInput1("");
    setInput2("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Your Page</h1>
      <label>latitude</label>
      <input
        id="latitude"
        type="number"
        step="0.0000000000000001"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Float Number 1"
      />
      <br />
      <label>longitude</label>
      <input
        id="longitude"
        type="number"
        step="0.0000000000000001"
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
