import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div>
        <Link to="/" className="font-bold text-lg">Muro</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/register">Registrarse</Link>
        <Link to="/new-post">Nuevo post</Link>
      </div>
    </nav>
  );
}
