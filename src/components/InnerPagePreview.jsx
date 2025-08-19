import { SectionHeader } from "./SectionHeader";
import { DemoCard } from "./DemoCard";

export const InnerPagePreview = () => {
  const innerPagePreviewData = [
    {
      href: "https://themewant.com/products/wordpress/almaris/eshb_accomodation/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/rooms.webp",
      title: "Rooms",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/eshb_accomodation/deluxe-room/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/room-single-style-2.webp",
      title: "Room Single",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/offers/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/special-offers.webp",
      title: "Special Offers",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/about-us/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/about.webp",
      title: "About",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/facilities/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/facilities.webp",
      title: "Facilities",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/gallery/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/gallery.webp",
      title: "Gallery",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/gallery-carousel/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/gallery-carousel.webp",
      title: "Gallery Carousel",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/news/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/news.webp",
      title: "News",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/transforming-common-spaces-in-modern-hotels/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/news-single.webp",
      title: "News Single",
    },
    {
      href: "https://themewant.com/products/wordpress/almaris/contact/",
      imgSrc:
        "https://themewant.com/products/wordpress/landing/almaris/demo-wp/preview/contact.webp",
      title: "Contact",
    },
  ];

  return (
    <section className="min-h-screen bg-white pb-[140px]">
      <div className="max-w-[1824px] mx-auto px-4">
        <SectionHeader
          subtitle="ALL DEMOS ARE INCLUDED"
          title="Inner Pages Preview"
          bgwhite={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {innerPagePreviewData.map((demo, index) => (
            <DemoCard
              key={index}
              href={demo.href}
              imgSrc={demo.imgSrc}
              title={demo.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
