import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう", "えええ"]);
  return (
    <>
      {/* TODO入力 */}
      <div className="input-todo">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      {/* 未完了TODO一覧 */}
      <div className="incomplete-todo">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* 配列の中身を1つずつ表示 */}
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      {/* 完了済TODO一覧 */}
      <div className="complete-todo">
        <p className="title">完了のTODO</p>
        <ul>
          {/* 配列の中身を1つずつ表示 */}
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
