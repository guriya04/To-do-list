import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setNotes(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button
          onClick={() => {
            setItems((prevItems)=>{
              return [...prevItems,notes]
            })
            setNotes('');
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item)=>{
           return <li>{item}</li>;
         })
}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
