import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Start</a>
      </Link>
      <Link href="/news">
        <a>News - 26.03</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/suche">
        <a>Suche</a>
      </Link>
      <Link href="/kontakt">
        <a>Kontakt</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
    </nav>
  );
}
