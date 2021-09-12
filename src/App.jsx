import React from "react";
import "./styles.css";

export const App = () => {
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
          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>ううう</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      {/* 完了済TODO一覧 */}
      <div className="complete-todo">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>いいい</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>えええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
