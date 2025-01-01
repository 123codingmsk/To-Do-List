import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import InputArea from "./components/InputArea";

const App=()=>{
  const [items, setnewItems] = useState([]);

  function Pushitem(inputText){
    setnewItems((prevValue)=>{
      return [
        ...prevValue,
        inputText
      ]
    })
  }

  function deleteItem(id){
    setnewItems((prevValue)=>{
      return prevValue.filter(
        (item, index)=>{
          return index !== id;
        }
      )
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea newItem = {Pushitem}/>
      <div>
        <ul>
          {items.map((item, index)=>(<TodoItem key={index} id={index}  text = {item} itemDelete={deleteItem}/>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
