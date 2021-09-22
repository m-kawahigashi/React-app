import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodos";
import { IncompleteTodo } from "./components/incompleteTodos";
import { CompleteTodo } from "./components/completeTodos";

export const App = () => {
  //定数・エラーメッセージ
  const ZYOUGEN_COUNT = 5;
  const ZYOUGEN_ERR_MSG = (
    <p style={{ color: "red" }}>
      これ以上登録出来ません。登録件数は最大5件までです。
    </p>
  );
  const ZYOUGEN_BACK_ERR_MSG = (
    <p style={{ color: "red" }}>
      これ以上戻せません。戻せるのは最大5件までです。
    </p>
  );

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

  //　完了ボタンのクリックイベント
  const onClickComplete = (index) => {
    //現状の未完了タスク一覧を取得
    const newIncompleteTodos = [...incompleteTodos];
    //完了のタスク一覧を取得&追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //完了したタスクを完了のTODOに追加
    setCompleteTodos(newCompleteTodos);
    //完了のTODOに追加した要素を削除
    newIncompleteTodos.splice(index, 1);
    //削除後の状態に更新
    setIncompleteTodos(newIncompleteTodos);
  };

  // 戻すボタンのクリックイベント
  const onClickBack = (index) => {
    //現状の未完了タスク一覧を取得
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    //完了のタスク一覧を取得&追加
    const newCompleteTodos = [...completeTodos];
    setIncompleteTodos(newIncompleteTodos);
    //未完了のTODOに戻した要素を削除
    newCompleteTodos.splice(index, 1);
    //削除後の状態に更新
    setCompleteTodos(newCompleteTodos);
  };

  // タスク一覧変数を定義
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  return (
    <>
      {/* TODO入力 */}
      <InputTodo
        inputText={inputText}
        onChange={onChangeInpuText}
        onClick={onClickAdd}
        disabledFlag={incompleteTodos.length >= ZYOUGEN_COUNT}
      />

      {/* 未完了TODO一覧 */}
      {incompleteTodos.length >= ZYOUGEN_COUNT && ZYOUGEN_ERR_MSG}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />

      {/* 完了済TODO一覧 */}
      {incompleteTodos.length >= ZYOUGEN_COUNT && ZYOUGEN_BACK_ERR_MSG}
      <CompleteTodo
        completeTodos={completeTodos}
        onClickBack={onClickBack}
        disabledFlag={incompleteTodos.length >= ZYOUGEN_COUNT}
      />
    </>
  );
};
