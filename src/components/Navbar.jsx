export default function Navbar() {
  return (
    <div
     className="
        sticky top-0 z-50
        bg-white/20 backdrop-blur-xl
        border-b border-white/30
        shadow-lg
        px-4 sm:px-6 md:px-8
        py-3 sm:py-4
        flex justify-between items-center
        ">
            
    <h1 className="text-xl sm:text-2xl font-bold text-white">
        Postify
      </h1>

      <div className="flex items-center gap-3">
        <span className="text-white font-medium">
          Praman
        </span>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full ring-2 ring-white/60"
        />
      </div>
    </div>
  );
}