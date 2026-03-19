export default function PostCard({ post, index, onDelete, onEdit }) {
  return (
    <div
      className="
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        rounded-2xl
        overflow-hidden
        shadow-xl
        flex flex-col
      "
    >
      {/* Image */}
      <img
        src={post.image}
        alt="post"
        className="w-full h-48 sm:h-52 md:h-56 object-cover"
      />

      {/* Caption */}
      <div className="p-4 text-white flex flex-col gap-4">
        <p>{post.caption}</p>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">

          {/* Edit */}
          <button
            onClick={() => onEdit(index)}
            className="
              flex-1
              bg-blue-500
              border border-blue-200/40
              rounded-lg
              py-2
              hover:bg-blue-500/50
              transition
            "
          >
             Edit
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(index)}
            className="
              flex-1
              bg-red-500
              border border-red-200/40
              rounded-lg
              py-2
              hover:bg-red-500/50
              transition
            "
          >
             Delete
          </button>

        </div>
      </div>
    </div>
  );
}