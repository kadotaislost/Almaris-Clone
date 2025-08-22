import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const imageUrls = [
      "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ss-left.webp",
      "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ss-right.webp",
    ];

    let loadedCount = 0;
    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          resolve();
        };
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        // Set to true anyway to prevent infinite loading
        setImagesLoaded(true);
      });
  }, []);

  useEffect(() => {
    // Initialize AOS only after images are loaded
    if (imagesLoaded) {
      AOS.init({
        duration: 600,
        easing: "ease-out",
        once: true,
        offset: 100,
      });
      // Refresh AOS to detect elements
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagesLoaded]);

  // Calculate transform values based on scroll position
  // The images will move down as we scroll down (max 600px movement)
  const imageTransform = Math.min(scrollY * 0.8, 600);

  return (
    <section className="bg-[url('https://themewant.com/products/wordpress/landing/almaris/demo-wp/bg.webp')] bg-cover bg-center bg-no-repeat min-h-screen relative">
      <main className="flex items-center min-h-screen font-marcellus relative">
        {/* Left bottom corner image */}
        <div
          className={`absolute bottom-0 left-0 w-[40%] transition-all duration-300 ease-in-out ${
            imagesLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${imageTransform}px)`,
          }}
        >
          <img
            src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/ss-left.webp"
            alt="image-left"
            className="w-full h-auto"
            data-aos="fade-right"
            data-aos-delay="100"
            loading="eager"
          />
        </div>

        {/* Center content */}
        <div className="max-w-[1200px] mx-auto z-10">
          <div className="flex justify-center items-center mt-16 px-2">
            <div className="text-center max-w-[1000px] mx-auto">
              {/* Made by Elite Author - First animation */}
              <div
                className="mb-[16px] text-[#ab8965] tracking-[2px] font-semibold text-[13px] font-jost"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                MADE BY ELITE AUTHOR
              </div>

              {/* Main title - Second animation */}
              <h1
                className="mb-[20px] text-white font-marcellus text-[48px] md:text-[64px] leading-[1.2]"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Luxury Hotel and Booking WordPress Theme
              </h1>

              {/* Button - Third animation */}
              <a
                href="#"
                className="py-[10px] px-[20px] bg-[#ab8965] font-jost text-white text-[12px] text-center tracking-[2px] font-medium hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                VIEW DEMO
              </a>
            </div>
          </div>

          {/* Bottom stats - Fourth animation */}
          <div
            className="hidden lg:flex justify-center text-white font-normal mt-20 text-[16px] font-jost"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="px-6 mx-6">Trusted by 10,000+</div>
            <div className="px-6 mx-6">Made by Elite Author</div>
            <div className="px-6 mx-6">Lifetime Free Update</div>
          </div>
        </div>

        {/* Right bottom corner image */}
        <div
          className={`absolute bottom-0 right-0 w-[40%] transition-all duration-300 ease-in-out ${
            imagesLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${imageTransform}px)`,
          }}
        >
          <img
            src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/ss-right.webp"
            alt="image-right"
            className="w-full h-auto"
            data-aos="fade-left"
            data-aos-delay="100"
            loading="eager"
          />
        </div>

        {/* gradient */}
        <div className="absolute bottom-0 h-[30%] w-full bg-gradient-to-t from-[#ab8965]/80 from-25% to-transparent"></div>
      </main>
    </section>
  );
};
