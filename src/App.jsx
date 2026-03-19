import { useState } from "react";
import Navbar from "./components/Navbar";
import PostGrid from "./components/PostGrid";
import PostForm from "./components/PostForm";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const addPost = (data) => {
    if (editingIndex !== null) {
      const updated = [...posts];
      updated[editingIndex] = data;
      setPosts(updated);
      setEditingIndex(null);
    } else {
      setPosts([...posts, data]);
    }
    setShowForm(false);
  };

  const deletePost = (index) => {
    const updated = [...posts];
    updated.splice(index, 1);
    setPosts(updated);
  };

  const editPost = (index) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-purple-500 to-pink-500">

      <Navbar />

      {showForm ? (
        <PostForm
          onAdd={addPost}
          editingPost={editingIndex !== null ? posts[editingIndex] : null}
        />
      ) : (
        <PostGrid
          posts={posts}
          onDelete={deletePost}
          onEdit={editPost}
        />
      )}

      {/* Floating Button */}
      <button
        onClick={() => setShowForm((prev) => !prev)}
            className="
        fixed bottom-5 right-5 sm:bottom-8 sm:right-8
        px-4 sm:px-5
        py-2 sm:py-3
        rounded-full
        flex items-center justify-center
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        shadow-2xl
        hover:bg-white/30
        hover:scale-110
        transition-all duration-300
        active:bg-white
      "
      >
        {showForm ? (
          <span className="text-4xl text-white text-base sm:text-xl text-white">✕</span>
        ) : (
          <span className="text-xl text-white text-base sm:text-xl text-white">Add post</span>
        )}
      </button>

    </div>
  );
}