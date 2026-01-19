import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 bg-black/40 backdrop-blur-md">
      
      {/* Logo */}
      <h1
        data-aos="fade-down"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light tracking-widest text-violet-300"
      >
        NEXORA
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12">
        {["PLATFORM", "SOLUTIONS", "PRICING", "DOCS"].map((item, index) => (
          <a
            key={item}
            data-aos="fade-down"
            data-aos-duration={1000 + index * 500}
            className="text-sm tracking-widest text-gray-300 hover:text-violet-300 transition z-50 cursor-pointer"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Desktop Button */}
      <button className="hidden md:block bg-violet-400 text-black py-3 px-8 rounded-full font-medium transition-all duration-300 hover:bg-violet-300 z-50">
        START FREE
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50 text-violet-300"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 inset-x-0 bottom-0 p-5 md:hidden z-40 bg-black/80 backdrop-blur-xl"
      >
        <nav className="flex flex-col gap-8 items-center mt-10">
          {["PLATFORM", "SOLUTIONS", "PRICING", "DOCS"].map((item) => (
            <a
              key={item}
              className="text-lg tracking-widest text-gray-200 hover:text-violet-300 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
