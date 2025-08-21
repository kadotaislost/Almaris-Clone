import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Minus } from "lucide-react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or near top
        setIsVisible(true);
      }

      // Set background based on position - only transparent at the very top
      setIsScrolled(currentScrollY > 50); // 50px threshold from the top
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    // set navbar background to 181818 on screen less than lg
    <header
      className={`${
        isMobileMenuOpen ? "min-h-screen" : ""
      } p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#181818] ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      } ${isScrolled ? "lg:bg-[#181818] shadow-lg" : "lg:bg-transparent"}`}
    >
      <div className={`w-full max-w-[1200px]  mx-auto mt-2 `}>
        <nav className="flex justify-between items-center font-medium ">
          <div>
            <a href="#">
              <img
                src="https://themewant.com/products/wordpress/landing/almaris/images/logo-white.webp"
                alt="logo"
                width={160}
              />
            </a>
          </div>

          <div>
            <ul className="hidden lg:flex space-x-[30px] font-jost font-normal">
              <li>
                <a href="#" className="text-white">
                  Intro
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Demos
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <div className="hidden ml-[20px] border border-[rgba(255,255,255,0.5)] py-[10px] px-[20px] hover:bg-[#ab8965] transition-colors duration-300 sm:flex items-center justify-center">
              <a
                href="#"
                className="text-white text-xs tracking-[2px] font-semibold font-jost"
              >
                PURCHASE NOW
              </a>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
              >
                {isMobileMenuOpen ? (
                  <Minus className="w-8 h-8 text-white cursor-pointer" />
                ) : (
                  <Menu className="w-8 h-8 text-white cursor-pointer" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu that takes all the screen height with 181818 background and has the ul elements*/}
        </nav>
      </div>

      {/* mobile menu after clicking the burger icon  */}
      {isMobileMenuOpen && (
        <div className="mt-8">
          <ul className="flex flex-col lg:hidden items-start justify-start h-full text-[17px] font-normal font-jost">
            <li className="py-[10px] border-b border-[rgba(255,255,255,0.2)] w-full">
              <a href="#" className="text-white py-4">
                Intro
              </a>
            </li>
            <li className="py-[10px] border-b border-[rgba(255,255,255,0.2)] w-full">
              <a href="#" className="text-white py-4">
                Demos
              </a>
            </li>
            <li className="py-[10px] border-b border-[rgba(255,255,255,0.2)] w-full">
              <a href="#" className="text-white py-4">
                Features
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
