import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SectionHeader } from "./SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Booking = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const bookingFeatures = [
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-room-management.webp",
      title: "Room Management",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-room-reservation.webp",
      title: "Room Reservation",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-room-search-filter.webp",
      title: "Room Search & Filter",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-extra-services.webp",
      title: "Extra Services",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-room-list.webp",
      title: "Room List",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-email-notification.webp",
      title: "Email Notification",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-[140px] px-4 lg:px-12">
      <div className="max-w-[1824px] mx-auto bg-[#181818] rounded-xl px-4 py-[48px] relative"
      data-aos ="fade-up">
        <div className="mb-[60px]"></div>
        <div className="w-full max-w-[1232px] mx-auto px-[48px]">
          <SectionHeader
            subtitle="BOOKING FEATURES"
            title="Room Management & Booking"
            bgwhite={false}
            description="Almaris theme makes creating a hotel website with booking functionality straightforward and efficient. Its built-in room booking system, combined with WooCommerce payment integration, allows you to accept secure online payments and manage bookings seamlessly."
          />
        </div>

        {/* Carousel */}
        <div data-aos= "fade-up" data-aos-easing = "ease-out" data-aos-duration = "800" data-aos-delay ="200">
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute -left-4 top-[75%] xs:top-[45%] transform -translate-y-1/2 z-10 rounded-r-full w-[40px] h-[40px] bg-[#ab8965] flex items-center justify-center text-white hover:bg-[#95764f] transition-colors duration-300 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="absolute -right-4 top-[75%] xs:top-[45%] transform -translate-y-1/2 z-10 rounded-l-full w-[40px] h-[40px] bg-[#ab8965] flex items-center justify-center text-white hover:bg-[#95764f] transition-colors duration-300 cursor-pointer"
          > 
            <ChevronRight size={20} />
          </button>

          <div className="px-[40px]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              loop={true}
              autoplay={false}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="booking-swiper"
            >
              {bookingFeatures.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="mb-[10px] w-full max-w-[556px] rounded-lg mx-auto"
                    />
                    <h3 className="text-white font-marcellus text-[26px] text-center mb-[10px]">
                      {feature.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mb-[60px]"></div>
        </div>
      </div>
    </section>
  );
};
