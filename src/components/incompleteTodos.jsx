import React from "react";

const todo = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

const title = {
  textAlign: "center",
  marginTop: "0",
  fontWeight: "bold",
  color: "#666"
};

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickDelete, onClickComplete } = props;
  return (
    // {/* 未完了TODO一覧 */}
    <div style={todo}>
      <p style={title}>未完了のTODO</p>
      <ul>
        {/* 配列の中身を1つずつ表示 */}
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
