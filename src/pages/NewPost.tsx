import { useState } from "react";
import { Link } from "react-router-dom";
import type { Kiji } from "../types/kiji";

type Props = {
  setForm: React.Dispatch<React.SetStateAction<Kiji[]>>;
};

export default function NewPost({ setForm }: Props) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onAdd = () => {
    if (title.trim() === "" || content.trim() === "") return;
    setForm((prev) => [...prev, { title, content }]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        {/* 見出し */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b pb-3">
          ✏️ 新規投稿
        </h2>

        {/* 入力フォーム */}
        <div className="space-y-6">
          {/* タイトル */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              タイトル
            </label>
            <input
              type="text"
              placeholder="タイトルを入力..."
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* 一言内容 */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              一言内容
            </label>
            <input
              type="text"
              placeholder="内容を入力..."
              value={content}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setContent(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* 登録ボタン */}
          <button
            onClick={onAdd}
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-600 transition-all duration-200"
          >
            登録する
          </button>
        </div>

        {/* 戻るリンク */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            ← 投稿一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
