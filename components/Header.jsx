import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="site-header">
      <div className="inner-width">
        <img className="site-header__logo" src="/img/vercel.svg" alt="Vercel" />
        <Navigation />
      </div>
    </header>
  );
}
