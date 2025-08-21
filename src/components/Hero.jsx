import { useState, useEffect } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform values based on scroll position
  // The images will move down as we scroll down (max 600px movement)
  const imageTransform = Math.min(scrollY * 0.8, 600);

  return (
    <section className="bg-[url('https://themewant.com/products/wordpress/landing/almaris/demo-wp/bg.webp')] bg-cover bg-center bg-no-repeat min-h-screen relative">
      <main className="flex items-center min-h-screen font-marcellus relative">
        {/* Left bottom corner image */}
        <div
          className="absolute bottom-0 left-0 w-[40%] transition-transform duration-120 ease-in-out"
          style={{
            transform: `translateY(${imageTransform}px)`,
          }}
        >
          <img
            src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/ss-left.webp"
            alt="image-left"
            className="w-full h-auto"
          />
        </div>

        {/* Center content */}
        <div className="max-w-[1200px] mx-auto z-10">
          <div className="flex justify-center items-center mt-16 px-2">
            <div className="text-center max-w-[1000px] mx-auto">
              <div className="mb-[16px] text-[#ab8965] tracking-[2px] font-semibold text-[13px] font-jost">
                MADE BY ELITE AUTHOR
              </div>
              <h1 className="mb-[20px] text-white font-marcellus text-[48px] md:text-[64px] leading-[1.2]">
                Luxury Hotel and Booking WordPress Theme
              </h1>
              <a
                href="#"
                className="py-[10px] px-[20px] bg-[#ab8965] font-jost text-white text-[12px] text-center tracking-[2px] font-medium hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300"
              >
                VIEW DEMO
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center text-white font-normal mt-20 text-[16px] font-jost">
            <div className="px-6 mx-6">Trusted by 10,000+</div>
            <div className="px-6 mx-6">Made by Elite Author</div>
            <div className="px-6 mx-6">Lifetime Free Update</div>
          </div>
        </div>

        {/* Right bottom corner image */}
        <div
          className="absolute bottom-0 right-0 w-[40%] transition-transform duration-120 ease-in-out"
          style={{
            transform: `translateY(${imageTransform}px)`,
          }}
        >
          <img
            src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/ss-right.webp"
            alt="image-right"
            className="w-full h-auto"
          />
        </div>

        {/* gradiant */}
        <div class="absolute bottom-0 h-[30%] w-full bg-gradient-to-t from-[#ab8965]/80 from-25% to-transparent"></div>
      </main>
    </section>
  );
};
