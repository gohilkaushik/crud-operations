import type { Posts } from "./HomePage";

const Card = ({
  posts,
  serial,
  onDelete,
}: {
  posts: Posts;
  serial: number;
  onDelete: () => void;
}) => {
  return (
    <li className="rounded overflow-hidden shadow-lg px-6 py-4">
      <div className="">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {serial}
        </span>
      </div>
      <div className="">
        <div className="font-bold text-xl mb-2">{posts.title}</div>
        <p className="text-gray-700 text-base">{posts.body}</p>
      </div>
      <button
        className="text-gray-700 bg-amber-700 text-base p-2"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Card;
