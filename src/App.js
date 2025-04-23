import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col">

        {/* Navbar */}
        <nav className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-md px-6 py-4 flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold tracking-tight">🧱 Muro Interactivo</h1>
          <div className="space-x-6">
            <Link
              to="/"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition duration-300"
            >
              Muro
            </Link>
            <Link
              to="/login"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition duration-300"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition duration-300"
            >
              Registrarse
            </Link>
            <Link
              to="/new-post"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full transition duration-300"
            >
              Nuevo post
            </Link>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-grow p-6 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route
              path="*"
              element={<h2 className="text-center text-xl text-gray-700">Página no encontrada</h2>}
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm">© 2025 Muro Interactivo. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;