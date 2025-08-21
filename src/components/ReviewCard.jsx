export const ReviewCard = ({ category, review, author }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-2xl bg-white" data-aos="fade-up" data-aos-easing="ease-out">
      <div className="p-[30px]">
        <div className="pb-[24px] text-[18px] font-normal text-[#8c8c8c] font-jost">
          For <span className="font-semibold text-black">{category}</span>
        </div>

        <p className="text-[24px] leading-[1.4em] mb-[24px] text-black">
          {review}
        </p>

        <hr className="border-gray-300 mb-[24px]" />

        <div className="flex items-center gap-[20px]">
          <div className="bg-[#f1f1f1] rounded-full w-[48px] h-[48px] flex items-center justify-center">
            <img
              src="https://themewant.com/products/wordpress/landing/almaris/images/author.svg"
              alt=""
              className="w-[19px]"
            />
          </div>
          <div className="font-marcellus text-[20px] font-semibold tracking-[0.5px]">
            <h4 className="text-black">{author}</h4>
            <img
              src="https://themewant.com/products/wordpress/landing/almaris/images/star-icon.png"
              alt="5 star rating"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
