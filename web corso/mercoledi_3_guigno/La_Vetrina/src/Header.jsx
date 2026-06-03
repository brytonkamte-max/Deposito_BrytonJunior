export function Header() {

  return (
    <header>
      <h1>La Vetrina</h1>
      {/*  un menu di navigazione  */ }
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Team</a></li>
        <li><a href="#contact">Contatti</a></li>
        </ul>
    </nav>

    </header>
  );
}