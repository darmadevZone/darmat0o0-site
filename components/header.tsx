import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

interface HeaderNavLink {
  name: string;
  href: string;
}

const headerNavLinks: HeaderNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  return (
    <header className="container h-16 border-b flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link href="/">DarmaT0o0 Site</Link>
      </h1>
      <div className="flex items-center space-x-3">
        <ul className="flex gap-3">
          {headerNavLinks.map((item) => (
            <li key={item.name} className="">
              <Link
                href={item.href}
                className="text-lg p-2 rounded-lg  hover:bg-slate-200 hover:font-bold"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
