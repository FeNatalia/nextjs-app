import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-center space-x-4">
    <Link href="/">
      <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        Home Page
      </a>
    </Link>
    <Link href="/about">
      <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        About Page
      </a>
    </Link>
  </nav>
);

export default Navbar;
