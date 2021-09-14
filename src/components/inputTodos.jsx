import React from "react";

export const InputTodo = (props) => {
  const { inputText, onChange, onClick } = props;
  return (
    // {/* TODO入力 */}
    <div className="input-todo">
      <input placeholder="TODOを入力" value={inputText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
