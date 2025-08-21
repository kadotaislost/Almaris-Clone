export const SectionHeader = ({
  subtitle,
  title,
  subtitleColor = "#ab8965",
  titleColor = "white",
  titleSize = "text-[36px]",
  centered = true,
  description,
  bgwhite = false,
}) => {
  const alignment = centered ? "text-center" : "text-left";
  //  if bg white is true make the title color black
  if (bgwhite) {
    titleColor = "black";
  }

  return (
    <div className="mb-[24px]">
      <div
        className={`${alignment} font-jost tracking-[2px] text-[13px] font-semibold mb-[16px]`}
        style={{ color: subtitleColor }}
        data-aos="fade-up"
        data-aos-easing = "ease-out"

      >
        {subtitle}
      </div>
      <h2
        className={`font-marcellus ${titleSize} md:text-[40px] lg:text-[52px] ${alignment} mb-[8px]`}
        style={{ color: titleColor }}
        data-aos="fade-up"
        data-aos-delay="200"
         data-aos-easing = "ease-out"
      >
        {title}
      </h2>

      <p
        className={`text-[#c3c3c3] font-jost font-light text-[17px] leading-[32px] ${alignment}`}
        data-aos="fade-up"
      >
        {description}
      </p>
    </div>
  );
};
