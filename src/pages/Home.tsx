import { Link } from "react-router-dom";
import type { Kiji } from "../types/kiji";

type Props = {
  form: Kiji[];
  setForm: React.Dispatch<React.SetStateAction<Kiji[]>>;
};

export default function Home({ form, setForm }: Props) {
  const onDel = (index: number) => {
    setForm((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b pb-3">
          🏠 投稿一覧
        </h2>

        {/* 投稿がない場合 */}
        {form.length === 0 ? (
          <p className="text-center text-gray-400">まだ投稿がありません。</p>
        ) : (
          <ul className="space-y-5">
            {form.map((item, i) => (
              <li
                key={i}
                className="p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 bg-gradient-to-r from-white to-gray-50"
              >
                <div className="flex justify-between items-start">
                  {/* 投稿内容 */}
                  <Link to={`/detail/${i}`}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </Link>

                  {/* 削除ボタン */}
                  <button
                    onClick={() => onDel(i)}
                    className="ml-4 bg-red-500 text-white text-sm px-3 py-1.5 rounded-md hover:bg-red-600 shadow-sm transition-all duration-200"
                  >
                    削除
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* 新規投稿ボタン */}
        <div className="mt-10 text-center">
          <Link
            to="/newpost"
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-all duration-200"
          >
            ✏️ 新しい記事を投稿する
          </Link>
        </div>
      </div>
    </div>
  );
}
