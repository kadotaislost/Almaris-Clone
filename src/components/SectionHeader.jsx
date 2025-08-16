export const SectionHeader = ({ 
  subtitle, 
  title, 
  subtitleColor = "#ab8965", 
  titleColor = "white",
  titleSize = "text-[52px]",
  centered = true ,
  description,
  bgwhite = false
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
      >
        {subtitle}
      </div>
      <h2 
        className={`font-marcellus ${titleSize} ${alignment} mb-[8px]`}
        style={{ color: titleColor }}
      >
        {title}
      </h2>

      <p className={`text-[#c3c3c3] font-jost font-light leading-[32px] ${alignment}`}>
        {description}
      </p>
    </div>
  );
};