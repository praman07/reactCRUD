export default function PostItem({ post, index, onDelete, onEdit }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onEdit(index)}
          className="flex-1 bg-yellow-400 p-2 rounded hover:bg-yellow-500"
        >
           Edit
        </button>

        <button
          onClick={() => onDelete(index)}
          className="flex-1 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
           Delete
        </button>
      </div>
    </div>
  );
}