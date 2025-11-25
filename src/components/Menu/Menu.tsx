import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-[#d9d9d9] h-16 w-full flex items-center px-5">
      <div className="bg-white flex items-center rounded-full px-4 h-10 flex-1 max-w-md">
        <input
          type="text"
          placeholder="🔍︎ I'm lookin' for..."
          className="flex-1 text-gray outline-none"
        />
      </div>
      <ul className="flex items-center gap-4 ml-auto">
        <li>
          <Link
            to="/about"
            className="w-56 h-10 flex items-center justify-center bg-neutral-400 rounded-full text-white text-lg font-[Quando] hover:bg-neutral-500 transition">Bout JoaoHBL</Link>
        </li>
        <li>
          <Link
            to="/buy-me-a-coffee"
            className="w-56 h-10 flex items-center justify-center bg-neutral-400 rounded-full text-white text-lg font-[Quando] hover:bg-neutral-500 transition">Buy me a Coffee</Link>
        </li>
      </ul>
    </nav>
  );
}
