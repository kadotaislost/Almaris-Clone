import { SectionHeader } from "./SectionHeader";
import { PricingCard } from "./PricingCard";

export const Pricing = () => {
  const pricingData = [
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ehb/ehb-min-max.png",
      title: "Min Max",
      description:
        "Allows bookings only when they meet the specified minimum or maximum number of days",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ehb/ehb-database.png",
      title: "Database",
      description:
        "You can easily manage booking requests from the admin panel and export them as PDF or CSV files.",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ehb/ehb-week.png",
      title: "Week",
      description:
        "Customize your booking calendar by specifying check-in and check-out day and applying special weekly rates.",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ehb/ehb-pricing.png",
      title: "Advanced Pricing",
      description:
        "Allows you to set seasonal pricing for more advanced rate management.",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ehb/ehb-ical.png",
      title: "iCal",
      description:
        "Works with all iCal-supported platforms, including Airbnb, Booking.com, Google Calendar, and more.",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ehb/ehb-review.png",
      title: "Review",
      description:
        "Allows users to easily submit reviews for their favorite hotels and accommodations.",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/ehb/ehb-single-day.png",
      title: "Single Day",
      description:
        "Effortlessly manage single-day bookings with flexible, custom pricing.",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-4">
      <div className="max-w-[1824px] mx-auto px-4 bg-[#181818] rounded-xl py-[48px]">
        <div className="mb-[60px]"></div>
        <SectionHeader
          subtitle="EASY HOTEL BOOKING"
          title="Unlock Premium Add-ons for Free, Save $200"
          description="Build and manage your hotel site like a pro, with high-end tools included at no extra cost."
          bgwhite={false}
        />
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] px-[48px] pb-[48px] auto-rows-fr">
          {pricingData.map((card, index) => (
            <div
              key={index}
              className={`flex ${
                index === pricingData.length - 1 && pricingData.length % 3 === 1
                  ? "lg:col-start-2"
                  : ""
              }`}
            >
              <PricingCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
