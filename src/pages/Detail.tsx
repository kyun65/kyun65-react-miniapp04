import { useParams, Link } from "react-router-dom";
import type { Kiji } from "../types/kiji";

type Props = {
  form: Kiji[];
};

export default function Detail({ form }: Props) {
  const { id } = useParams<{ id: string }>();
  const item = form[Number(id)];

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-500">
        <p className="text-lg">投稿が見つかりません。</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-200"
        >
          ← 一覧へ戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
          {item.title}
        </h2>

        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
          {item.content}
        </p>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            ← 投稿一覧へ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
