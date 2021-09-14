import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickDelete, onClickComplete } = props;
  return (
    // {/* 未完了TODO一覧 */}
    <div className="incomplete-todo">
      <p className="title">未完了のTODO</p>
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
