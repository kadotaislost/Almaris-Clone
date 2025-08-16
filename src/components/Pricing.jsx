import { SectionHeader } from "./SectionHeader";

export const Pricing = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-[1824px] mx-auto px-4 bg-[#181818] rounded-lg py-[48px]">
        <div className="mb-[60px]"></div>
        <SectionHeader
          subtitle="EASY HOTEL BOOKING"
          title="Unlock Premium Add-ons for Free, Save $200"
          description="Build and manage your hotel site like a pro, with high-end tools included at no extra cost."
          bgwhite={false}
        />

        <div className="mt-[30px] p-[16px] bg-[#232323]">
          <div className="flex justify-between font-jost" >
            <div className="rounded-4xl bg-[#f4791f] py-[2px] px-[10px] text-white text-[15px]">
              Included
            </div>
            <div className="rounded-4xl bg-[#1f8d8d] py-[2px] px-[10px] text-white text-[15px]">
              Save $19{" "}
            </div>
          </div>
          <img src="https://themewant.com/products/wordpress/landing/almaris/demo-wp/ehb/ehb-min-max.png" alt="" className="mb-[24px]"/>
          <h4 className="font-marcellus text-[22px] text-white mb-[10px]"><span className="text-[#919191]">EHB </span>Min Max</h4>
          <p className="text-[#c3c3c3] font-jost">Allows bookings only when they meet the specified minimum or maximum number of days</p>
        </div>
      </div>
    </section>
  );
};
