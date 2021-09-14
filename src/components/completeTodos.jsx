import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    //{/* 完了済TODO一覧 */}
    <div className="complete-todo">
      <p className="title">完了のTODO</p>
      <ul>
        {/* 配列の中身を1つずつ表示 */}
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
