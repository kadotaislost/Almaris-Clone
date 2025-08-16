export const FeatureCard = ({ image, title, description, alt = "" }) => {
  return (
    <div className="flex-1">
      <img
        src={image}
        alt={alt}
        className="mb-4 rounded-xl w-full h-auto object-cover"
      />
      <h3 className="text-[26px] text-white font-marcellus mb-[10px]">
        {title}
      </h3>
      <p className="text-[#c3c3c3] font-jost font-normal leading-[1.7rem]">
        {description}
      </p>
    </div>
  );
};
