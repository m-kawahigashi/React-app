import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //　入力内容格納変数を定義
  const [inputText, setInputText] = useState("");
  const onChangeInpuText = (e) => setInputText(e.target.value);
  const onClickAdd = () => {
    if (inputText === "") return;
    //alert(inputText);
    const newTodos = [...incompleteTodos, inputText];
    setIncompleteTodos(newTodos);
    setInputText("");
  };

  // 削除ボタンのクリックイベント
  const onClickDelete = (index) => {
    //現状の未完了タスク一覧を取得
    const newTodos = [...incompleteTodos];
    //indexのタスクを1つ削除
    newTodos.splice(index, 1);
    //削除後の状態に更新
    setIncompleteTodos(newTodos);
  };

  // タスク一覧変数を定義
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう", "えええ"]);
  return (
    <>
      {/* TODO入力 */}
      <div className="input-todo">
        <input
          placeholder="TODOを入力"
          value={inputText}
          onChange={onChangeInpuText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      {/* 未完了TODO一覧 */}
      <div className="incomplete-todo">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* 配列の中身を1つずつ表示 */}
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
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
