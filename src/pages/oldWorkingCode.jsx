import { useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([])

  const addvalue = () => {
    if(input){
    setData([...data, input])
    setInput('')
  }
  }

  const del = (id) => {
    console.log(id);
    const updateItem = data.filter((elem, i) => {
      return i !== id
    })
    setData(updateItem)
  }

  return (
    <>
     <h1>Crud App</h1>
     <input type="text" value={input} placeholder="Create your todo" onChange={(e) => setInput(e.target.value)}/>
     <button onClick={addvalue}> Add </button>
    <ul>
      {data.map((inputData, i) => {
        return(
          <li key={i}>{inputData} <button onClick={() => del(i)}> - </button></li>
        )
      })}
    </ul>
    </>
  );
}

export default App;
