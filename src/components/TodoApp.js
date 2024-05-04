import React, { useState } from "react";
import { StyledTodo } from "./styles";

const TodoApp = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleButtonClick = () => {
    setTodos([...todos,{'todo':text,status:''}]);
    setText("");
  };
  console.log(todos);

  const handleChange = (index) => {
    // setChecked(!checked)
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, status: todo.status === "done" ? "" : "done" } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <StyledTodo>
    <div className="mainContainer">
      <div className="">
        <h3>Todo Details</h3>
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleButtonClick}>Add Todo</button>
      <div style={{ display: "flex",flexDirection:'column' }}>
        <div>
          <h4>Todo List</h4>
          {todos?.map((todo, index) => (
            <>
            <div key={index}>
              <label key={index}>{todo?.todo}</label>
              <input type="checkbox" checked={todo?.status==='done'} onChange={()=>handleChange(index)}/>
              <br/>
            </div>
            </>
          ))}
        </div>
        <br/>
        <div>
          <h4>Completed</h4>
          {todos?.map((todo, index) => (
            <>
            <div key={index}>
            {todo.status==='done' &&
              <h3>{todo?.todo}</h3>
            }
     
             
            </div>
            </>
          ))}
        </div>
      </div>
    </div>
    </StyledTodo>
  );
};

export default TodoApp;
