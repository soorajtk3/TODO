import React, { useState } from "react";
import { StyledTodo } from "./styles";
import trash from "../assets/trash.svg";
const TodoApp = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleButtonClick = () => {
    setTodos([...todos, { todo: text, status: "" }]);
    setText("");
  };
  console.log(todos);

  const handleChange = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index
        ? { ...todo, status: todo.status === "done" ? "" : "done" }
        : todo
    );
    setTodos(updatedTodos);
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <StyledTodo>
      <div className="mainContainer">
        <div className="">
          <h3 style={{textAlign:'center',color:'red'}}>Enter Todo Details</h3>
        </div>
        <div className="inputTodo">
          <input
          placeholder="Add your Todo Tasks..."
            className="inputField"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="addTodoBtn" onClick={handleButtonClick}>
            Add Todo
          </button>
        </div>
        <div>
         {todos.length >0 && <h4 style={{color:'#B22222'}}>Todo List</h4>} 
          {todos?.map((todo, index) => (
            <>
              <div className="todoDetails" key={index}>
                <label className="todoLabel" key={index}>{todo?.todo}</label>
                <div>
                <input
                  style={{ cursor: "pointer" }}
                  type="checkbox"
                  checked={todo?.status === "done"}
                  onChange={() => handleChange(index)}
                />
                <img
                  style={{ cursor: "pointer",marginLeft:'8px' }}
                  onClick={() => handleDeleteTodo(index)}
                  src={trash}
                />
                </div>
              </div>
              <br />
            </>
          ))}
        </div>
        <br />
        <div>
         {todos.length >0 && <h4 style={{color:'#B22222'}}>Completed</h4>} 
          {todos?.map((todo, index) => (
            <>
              <div key={index}>
                {todo.status === "done" && <p className="completedText">{todo?.todo}</p>}
              </div>
            </>
          ))}
        </div>
      </div>
    </StyledTodo>
  );
};

export default TodoApp;
