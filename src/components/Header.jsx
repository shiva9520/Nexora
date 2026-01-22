import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for blur background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex justify-between items-center py-4 px-4 lg:px-20">
          <Link to="/">
            <h1 className="text-3xl font-light cursor-pointer">NEXORA</h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <Link to="/company">COMPANY</Link>
            <Link to="/features">FEATURES</Link>
            <Link to="/resources">RESOURCES</Link>
            <Link to="/docs">DOCS</Link>
          </nav>

          <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium">
            SIGNIN
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl z-50"
          >
            <i className="bx bx-menu"></i>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-4xl p-5"
          >
            <i className="bx bx-x"></i>
          </button>

          <nav className="flex flex-col items-center gap-8 mt-16 text-lg">
            <Link to="/company" onClick={() => setMenuOpen(false)}>
              COMPANY
            </Link>
            <Link to="/features" onClick={() => setMenuOpen(false)}>
              FEATURES
            </Link>
            <Link to="/resources" onClick={() => setMenuOpen(false)}>
              RESOURCES
            </Link>
            <Link to="/docs" onClick={() => setMenuOpen(false)}>
              DOCS
            </Link>
          </nav>
        </div>
      )}

      {/* Spacer so content doesn’t hide under fixed header */}
      <div className="h-[72px]" />
    </>
  );
};

export default Header;
