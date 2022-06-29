import Link from "next/link";

const Navbar = () => (
  <div>
    <Link href="/">
      <a>Home Page</a>
    </Link>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
);

export default Navbar;
