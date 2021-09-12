import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      {/* TODO入力 */}
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      {/* 未完了TODO一覧 */}
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>ううう</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      {/* 完了済TODO一覧 */}
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>いいい</li>
            <button>戻す</button>
          </div>
          <div>
            <li>えええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
