import PostItem from "./PostItem";

export default function PostList({ posts, onDelete, onEdit }) {
  if (posts.length === 0) {
    return <p className="text-gray-500">No posts yet</p>;
  }

  return (
    <div className="w-full max-w-md space-y-4">
      {posts.map((post, index) => (
        <PostItem
          key={index}
          post={post}
          index={index}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}