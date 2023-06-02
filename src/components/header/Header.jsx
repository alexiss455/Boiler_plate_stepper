import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="border-b  bg-yellow-50 bg-opacity-[.1]">
      <div className="h-14 flex items-center justify-between max-w-7xl mx-auto">
        <div className="font-Kanit text-[1.6rem]">tailwindcss</div>

        <div>
          <ul className="flex gap-[1rem] font">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
