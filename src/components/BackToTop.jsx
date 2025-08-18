import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';


export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`flex items-center justify-center fixed rounded-full right-5 z-[10] w-10 h-10 text-center leading-[30px] cursor-pointer  border-0 bg-[#ab8965] text-white transition-all duration-300 hover:bg-[#95764f] ${
        isVisible ? 'bottom-5 opacity-100' : '-bottom-10 opacity-0'
      }`}
      style={{
        textDecoration: 'none'
      }}
      aria-label="Back to top"
    >
        <ChevronUp className="w-5 h-5" />
    </button>
  );
};
