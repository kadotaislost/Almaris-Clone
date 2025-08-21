export const Ending = () => {
  return (
    <section className="min-h-screen bg-[url('https://themewant.com/products/wordpress/landing/almaris/demo-wp/bg-2.webp')] flex items-center justify-center relative ">
      <div className="text-center max-w-[1000px] mx-auto px-[12px]">
        <div className="mb-[16px] text-[#ab8965] tracking-[2px] font-semibold text-[13px] font-jost">
          GET ALMARIS NOW
        </div>
        <h1 className="mb-[20px] text-white font-marcellus text-[48px] md:text-[60px] lg:text-[64px] leading-[1.2]">
          Build stunning and powerfull hotel website in no time!
        </h1>
        <p className="font-jost text-[17px] font-light text-[#c3c3c3] mb-[20px]">
          One time purchase only, no additional fee required!
        </p>
        <a
          href="#"
          className="py-[10px] px-[20px] bg-[#ab8965] font-jost text-white text-[12px] text-center tracking-[2px] font-medium hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300"
        >
          $55 - PURCHASE NOW
        </a>
      </div>
      <div class="absolute bottom-0 h-[30%] w-full bg-gradient-to-t from-[#ab8965]/80 from-25% to-transparent z-1"></div>
    </section>
  );
};
