import { useForm } from "react-hook-form";

export default function PostForm({ onAdd }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const file = data.image[0];

    const newPost = {
      caption: data.caption,
      image: URL.createObjectURL(file),
    };

    onAdd(newPost);
    reset();
  };

  return (
    <div className="p-4 sm:p-8 md:p-10 flex justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="
            w-full
            max-w-lg
            p-6 sm:p-8 md:p-10
            rounded-3xl
            bg-white/20
            backdrop-blur-xl
            border border-white/30
            shadow-2xl
            flex flex-col gap-5
            text-white
        "
      >
        <h2 className="text-2xl font-bold">
          Create Post
        </h2>

        {/* IMAGE UPLOAD */}
        <div className="flex flex-col gap-1">
          <input
            type="file"
            accept="image/*"
            {...register("image", {
              required: "Please upload an image",
            })}
            className="
              bg-white/20 border border-white/30
              p-3 rounded-lg
              file:text-white
            "
          />

          {errors.image && (
            <p className="text-red-200 text-sm">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* CAPTION */}
        <div className="flex flex-col gap-1">
          <textarea
            {...register("caption", {
              required: "Caption is required",
              minLength: {
                value: 5,
                message: "Caption must be at least 5 characters",
              },
            })}
            placeholder="Write a caption..."
            className="
              bg-white/20 border border-white/30
              p-4 rounded-lg h-32
              placeholder-white/70
              outline-none
              resize-none
            "
          />

          {errors.caption && (
            <p className="text-red-200 text-sm">
              {errors.caption.message}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="
            bg-white/30 hover:bg-white/40
            p-4 rounded-xl font-semibold
            backdrop-blur
            border border-white/40
            transition
            active:bg-black 
            active:text-white
            
          "
        >
          Share Post
        </button>
      </form>
    </div>
  );
}