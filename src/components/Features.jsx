import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";
export const Features = () => {
  const features = [
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/features-booking.webp",
      title: "Booking Form",
      description:
        "Our built-in booking form provides a quick and easy reservation, allowing guests to select dates, rooms, and preferences seamlessly.",
      alt: "Booking form feature",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/features-elementor.webp",
      title: "Elementor Page Builder",
      description:
        "A fast, intuitive, and smart page builder will make your customization fast and easy. Your layout will be ready for publishing in a minute!",
      alt: "Elementor page builder",
    },
    {
      image:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/features-homepages.webp",
      title: "Pre-designed Templates",
      description:
        "Includes 8 elegant homepage designs, tailored to showcase hotels, resorts, and vacation rentals with style and ease.",
      alt: "Pre-designed templates",
    },
  ];
  return (
    <section className="min-h-screen bg-[#181818]  relative z-50 py-[70px] lg:py-[140px]">
      <div className="max-w-[1824px] mx-auto px-4 ">
        <SectionHeader
          subtitle="POWERFULL FEATURES"
          title="Effortlessly Create a Hotel Website"
        />
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              alt={feature.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
