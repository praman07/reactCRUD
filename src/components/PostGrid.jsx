import PostCard from "./PostCard";

export default function PostGrid({ posts, onDelete, onEdit }) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-white mt-20">
        No posts yet
      </p>
    );
  }

  return (
    <div className="  max-w-7xl mx-auto
  p-4 sm:p-6 md:p-8
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-6 md:gap-8">
      {posts.map((post, index) => (
        <PostCard
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