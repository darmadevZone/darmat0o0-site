import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="container h-16 border-b flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link href="/">DarmaT0o0 Site</Link>
      </h1>
      <div className="flex items-center space-x-3">
        <ul className="flex gap-3">
          <li className="text-lg">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg">
            <Link href="/">Blog</Link>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
