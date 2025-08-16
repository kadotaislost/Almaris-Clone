export const DemoCard = ({ href, imgSrc, title }) => {
  return (
    <div className="text-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:shadow-lg transition-shadow duration-300"
      >
        <img src={imgSrc} alt={title} className="w-full h-auto rounded-lg" />
      </a>
      <h5 className="font-marcellus text-[18px] font-bold mt-4">{title}</h5>
    </div>
  );
};
