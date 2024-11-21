import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 block ${
              isActive 
                ? "bg-white/10 text-white" 
                : "text-white/90 hover:bg-white/10 hover:text-white"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/campaigns"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 block ${
              isActive 
                ? "bg-white/10 text-white" 
                : "text-white/90 hover:bg-white/10 hover:text-white"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/how-to-help"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 block ${
              isActive 
                ? "bg-white/10 text-white" 
                : "text-white/90 hover:bg-white/10 hover:text-white"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          How to Help
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 block ${
                isActive 
                  ? "bg-white/10 text-white" 
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="fixed top-0 w-full z-50 bg-blue-800 shadow-md">
      <div className="max-w-[83.333333%] mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-blue-200 transition-all duration-300"
          >
            <span className="text-2xl">❄️</span>
            <span className="hidden sm:inline">Winter Donation</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-8 h-8 rounded-full border-2 border-white/50 group-hover:border-white transition-all duration-300"
                    title={user.displayName}
                  />
                </div>
                <button 
                  onClick={handleLogOut} 
                  className="hidden sm:block px-3 py-1 rounded-md hover:bg-red-600 text-white text-sm font-medium transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="px-4 py-1 rounded-md bg-white hover:bg-blue-50 text-blue-800 text-sm font-medium transition-all duration-300"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden bg-white/10 p-1.5 rounded-md hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
          <ul className="space-y-2">
            {navLinks}
            {user && (
              <li>
                <button 
                  onClick={() => {
                    handleLogOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1 rounded-md text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
