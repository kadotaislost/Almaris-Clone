import { SectionHeader } from "./SectionHeader";
import { DemoCard } from "./DemoCard";

export const DemoPreview = () => {
  const demoData = [
    {
      href: "https://themewant.com/products/wordpress/almaris/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/homepage-1.webp",
      title: "Homepage Main",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/sidebar-demo/",
      imgSrc:
        "https://madebydesignesia.com/themes/almaris/demo/preview/homepage-18.webp",
      title: "Sidebar Demo",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/modern/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/homepage-5.webp",
      title: "Homepage Modern",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/glamping/",
      imgSrc:
        "https://madebydesignesia.com/themes/almaris/demo/preview/homepage-17.webp",
      title: "Glamping Hotel",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/home-2",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/home-2.jpeg",
      title: "Home Room Slider 1",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/home-3",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/home-3.jpeg",
      title: "Home Room Slider 2",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/home-lake-view-2/",
      imgSrc:
        "https://madebydesignesia.com/themes/almaris/demo/preview/homepage-14.webp",
      title: "Lake Side 2",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/home-lake-view/",
      imgSrc:
        "https://madebydesignesia.com/themes/almaris/demo/preview/homepage-13.webp",
      title: "Lake Side",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/city-apartment/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/homepage-4.webp",
      title: "Homepage City Apartment",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/mountain-hotel/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/homepage-2.webp",
      title: "Homepage Mountain Hotel",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/ski-resort/",
      imgSrc:
        "https://madebydesignesia.com/themes/almaris/demo/preview/homepage-11.webp",
      title: "Ski Resort",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/minimal/",
      imgSrc:
        "https://madebydesignesia.com/themes/almaris/demo/preview/homepage-12.webp",
      title: "Minimal",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/holiday/",
      imgSrc:
        "https://madebydesignesia.com/themes/almaris/demo/preview/homepage-10.webp",
      title: "Holiday Demo",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/elegant/",
      imgSrc:
        "https://madebydesignesia.com/themes/almaris/demo/preview/homepage-9.webp",
      title: "Elegant Demo",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/bold/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/homepage-7.webp",
      title: "Homepage Bold",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/bold-2/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/homepage-8.webp",
      title: "Homepage Bold 2",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/modern-2/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/homepage-6.webp",
      title: "Homepage Modern 2",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/beach-resort/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/homepage-3.webp",
      title: "Homepage Beach Resort",
    },
  ];
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-[70px] lg:py-[140px] px-2 sm:px-4 lg:px-8 overflow-hidden">
      <div className="max-w-[1824px] mx-auto w-full px-2 md:px-4 lg:px-0">
        <SectionHeader
          subtitle="ALL DEMO ARE INCLUDED"
          title="Demo Preview"
          bgwhite={true}
        />
        <div data-aos="fade-up" data-aos-easing="ease-out">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {demoData.map((demo, index) => (
              <DemoCard
                key={index}
                href={demo.href}
                imgSrc={demo.imgSrc}
                title={demo.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
