export const Features = () => {
  return (
    <section className="min-h-screen bg-[#181818]">
      <div className="max-w-[1824px] mx-auto px-4">
        <div className="mb-20">
          <div className="text-[#ab8965] text-center font-jost tracking-[2px] text-[13px] font-semibold mb-20">
            POWERFUL FEATURES
          </div>
          <h2 className="font-marcellus text-[52px] text-white text-center">
            Effortlessly Create a Hotel Website
          </h2>
        </div>

        <div className="flex gap-8 items-start">
          <div className="flex-1">
            <img
              src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/features-booking.webp"
              alt=""
              className="mb-4 rounded-xl w-full h-auto object-cover"
            />
            <h3 className="text-[26px] text-white font-marcellus mb-[10px]">
              Booking Form
            </h3>
            <p className="text-[#c3c3c3] font-jost font-normal leading-[1.7rem]">
              Our built-in booking form provides a quick and easy reservation,
              allowing guests to select dates, rooms, and preferences
              seamlessly.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/features-elementor.webp"
              alt=""
              className="mb-4 rounded-xl w-full h-auto object-cover"
            />
            <h3 className="text-[26px] text-white font-marcellus mb-[10px]">
              Elementor Page Builder
            </h3>
            <p className="text-[#c3c3c3] font-jost font-normal leading-[1.7rem]">
              A fast, intuitive, and smart page builder will make your
              customization fast and easy. Your layout will be ready for
              publishing in a minute!
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/features-homepages.webp"
              alt=""
              className="mb-4 rounded-xl w-full h-auto object-cover"
            />
            <h3 className="text-[26px] text-white font-marcellus mb-[10px]">
              Pre-designed Templates
            </h3>
            <p className="text-[#c3c3c3] font-jost font-normal leading-[1.7rem]">
              Includes 8 elegant homepage designs, tailored to showcase hotels,
              resorts, and vacation rentals with style and ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
