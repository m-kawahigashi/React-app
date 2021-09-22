import React from "react";

const todo = {
  backgroundColor: "#ffe0f7",
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

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack, disabledFlag } = props;
  return (
    //{/* 完了済TODO一覧 */}
    <div style={todo}>
      <p style={title}>完了のTODO</p>
      <ul>
        {/* 配列の中身を1つずつ表示 */}
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                disabled={disabledFlag}
                onClick={() => onClickBack(index)}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
