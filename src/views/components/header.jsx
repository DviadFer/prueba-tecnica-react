import { Link } from "react-router-dom";

function Header({ isLoading }) {
  return (
    <header>
      <h1>
        <Link to="/">Podcaster</Link>
      </h1>
      {isLoading && <p>&#x231B; Cargando...</p>}
    </header>
  );
}

export default Header;