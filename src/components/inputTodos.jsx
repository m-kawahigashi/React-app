import React from "react";

const inputTodo = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { inputText, onChange, onClick } = props;
  return (
    // {/* TODO入力 */}
    <div style={inputTodo}>
      <input placeholder="TODOを入力" value={inputText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
