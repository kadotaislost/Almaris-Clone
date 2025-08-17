import { SectionHeader } from "./SectionHeader";
export const Booking = () => {
  return (
    <section className="min-h-screen bg-white py-[140px]">
      <div className="max-w-[1824px] mx-auto  bg-[#181818] rounded-xl px-4 py-[48px]">
        <div className="mb-[60px]"></div>
        <div className="w-[1232px] mx-auto px-[48px]">
          <SectionHeader
            subtitle="BOOKING FEATURES"
            title="Room Management & Booking"
            bgwhite={false}
            description="Almaris theme makes creating a hotel website with booking functionality straightforward and efficient. Its built-in room booking system, combined with WooCommerce payment integration, allows you to accept secure online payments and manage bookings seamlessly."
          />
        </div>

        {/* coursel here */}
        <div className="relative">
            <a className="absolute"></a>
            <a className="absolute"></a>

            <div className="flex items-center justify-center gap-8 ">
                <div>
                    <img src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-room-reservation.webp" alt=""  className="mb-[10px] w-[556px] rounded-lg"/>
                    <h3 className="text-white font-marcellus text-[26px] text-center mb-[10px]">Room Reservation</h3>
                </div>
                <div>
                    <img src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-room-reservation.webp" alt=""  className="mb-[10px] w-[556px] rounded-lg"/>
                    <h3 className="text-white font-marcellus text-[26px] text-center mb-[10px]">Room Reservation</h3>
                </div>
                <div>
                    <img src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/feature-room-reservation.webp" alt=""  className="mb-[10px] w-[556px] rounded-lg"/>
                    <h3 className="text-white font-marcellus text-[26px] text-center mb-[10px]">Room Reservation</h3>
                </div>
            </div>


        </div>
      </div>
    </section>
  );
};
