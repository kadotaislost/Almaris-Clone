export const PricingCard = ({
  image,
  title,
  description,
  saveAmount = "$19",
}) => {
  return (
    <div className="mt-[30px] p-[20px] bg-[#232323] rounded-lg h-full flex flex-col">
      <div className="flex justify-between font-jost">
        <div className="rounded-4xl bg-[#f4791f] py-[2px] px-[10px] text-white text-[15px]">
          Included
        </div>
        <div className="rounded-4xl bg-[#1f8d8d] py-[2px] px-[10px] text-white text-[15px]">
          Save {saveAmount}
        </div>
      </div>

      <div className="pl-2 pr-2 pb-2 pt-0 flex flex-col flex-grow">
        <img
          src={image}
          alt=""
          className="mb-[24px] w-[100px] mx-auto h-[100px]"
        />
        <h4 className="font-marcellus text-[22px] text-white mb-[10px] text-center font-semibold">
          <span className="text-[#919191]">EHB </span>
          {title}
        </h4>
        <p className="text-[#c3c3c3] font-jost text-center flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};
