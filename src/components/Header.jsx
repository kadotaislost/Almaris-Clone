const Header = () => {
  return (
    <header className="bg-transparent p-4 absolute top-0 left-0 right-0 z-10">
      <div className=" max-w-[1200px]  mx-auto mt-2">
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
            <ul className="flex space-x-[30px] font-jost font-normal">
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
          <div className="flex items-center justify-center">
            <div className="ml-[20px] border border-[rgba(255,255,255,0.5)] py-[5px] px-[20px] hover:bg-[#ab8965] transition-colors duration-300">
              <a
                href="#"
                className="text-white text-xs tracking-[2px] font-semibold font-jost"
              >
                PURCHASE NOW
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
