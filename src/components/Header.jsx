import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <Link to="/">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-3xl md:4xl lg:5xl font-light m-0 cursor-pointer"
        >
          NEXORA
        </h1>
      </Link>
      <nav className="hidden md:flex items-center gap-12">
        <Link
          to="/company"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          COMPANY
        </Link>
        <Link
          to="/features"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          FEATURES
        </Link>
        <Link
          to="/resources"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          RESOURCES
        </Link>
        <Link
          to="/docs"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          DOCS
        </Link>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGNIN
      </button>
      {/* mobile - nav */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>
      {/* mobile - menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <Link
            to="/company"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            COMPANY
          </Link>
          <Link
            to="/features"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            FEATURES
          </Link>
          <Link
            to="/resources"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            RESOURCES
          </Link>
          <Link
            to="/docs"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            DOCS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
