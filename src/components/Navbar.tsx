import Link from "next/link";
import ModeToggleButton from "./ModeToggleButton";

export default function Navbar() {
  return (
    <nav className="px-10 md:px-20 lg:px-40 py-8 sticky top-0 z-10 bg-white dark:bg-slate-800">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-burtons dark:text-white">developedbyyz</h1>
        <ul className="flex items-center">
          <li className="text-3xl flex items-center">
            <ModeToggleButton />
          </li>
          <li>
            <Link
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-2 px-4 py-2 rounded-md md:ml-8"
              href="#"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
