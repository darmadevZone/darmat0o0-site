import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

interface HeaderNavLink {
  name: string;
  href: string;
}

const headerNavLinks: HeaderNavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

const Header = () => {
  return (
    <header className=" container h-16 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">
          <Link href="/">DarmaT0o0</Link>
        </h1>
      </div>
      <div>
        {/* Mobile Menu Button */}
        {/* <div className="sm:hidden">
          <div className="w-8 h-1 bg-slate-600 relative">
            <div className="w-4 h-1 bg-slate-600 absolute top-4 right-8"></div>
          </div>
        </div> */}
        <div className="hidden sm:flex items-center space-x-3 ">
          <ul className="flex  gap-3">
            {headerNavLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-lg p-2 rounded-lg   hover:bg-slate-200 hover:font-bold hover:opacity-70"
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
      </div>
    </header>
  );
};

export default Header;
