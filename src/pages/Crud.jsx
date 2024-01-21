import { useState } from "react";

function Crud() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addValue = () => {
    if (input) {
      if (editIndex !== null) {
        const updatedData = [...data];
        updatedData[editIndex] = input;
        setData(updatedData);
        setEditIndex(null); // Reset editIndex after editing
      } else {
        // Otherwise, add a new item
        setData([...data, input]);
      }
      setInput('');
    }
  }

  const del = (id) => {
    const updatedData = data.filter((elem, i) => i !== id);
    setData(updatedData);
    setEditIndex(null); // Reset editIndex after deleting
  }

  const edit = (inputData, id) => {
    setInput(inputData);
    setEditIndex(id);
  }

  return (
    <>
      <h1>Crud App</h1>

      <input
        type="text"
        value={input}
        placeholder="Create your todo"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addValue}> Add </button>

      <ul>
        {data.map((inputData, i) => (
          <li key={i}>
            {editIndex === i ? (
              // If editing, show input field
              <>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => addValue()}>Save</button>
              </>
            ) : (
              // Otherwise, show default text
              <>
                {inputData}
                <button onClick={() => del(i)}> del </button>
                <button onClick={() => edit(inputData, i)}>edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Crud;
