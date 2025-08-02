import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link to="/" className="hover:text-yellow-300">Home</Link>
      <Link to="/about" className="hover:text-yellow-300">About</Link>
    </nav>
  );
}
