import { SectionHeader } from "./SectionHeader";
import { ReviewCard } from "./ReviewCard";

export const Reviews = () => {
  const reviewsData = [
    {
      category: "Customer Support",
      review:
        "The support provided was excellent. A prompt reply and satisfactory and prompt solution (less than 24 hours). Thanks and congrats.",
      author: "1mendozmau",
    },
    {
      category: "Customer Support",
      review:
        "Awesome customer support. Initially the file was not working due to some technical issues. They fixed asap and also helped me to upload the theme. Thanks a lot!",
      author: "arunalis",
    },
    {
      category: "Design Quality",
      review:
        "Definitely a FIVE-STAR product. Very pleased with the quality of the design and the technical functions related to booking. Support service is excellent—quick and professional help with everything I needed.",
      author: "rhbusiness23",
    },
    {
      category: "Other",
      review:
        "I must say thank you again Alam for the great and quick support. Sensational!",
      author: "computemobi",
    },
    {
      category: "Design Quality",
      review: "Very nice design.!",
      author: "NoraMilena2019",
    },
    {
      category: "Customer Support",
      review:
        "Very good support. Resolved all the issues fastest. Highly recommended.",
      author: "sameer_aakar",
    },
    {
      category: "Customer Support",
      review:
        "The customer support is top notch, within a day the issue was fixed and the theme is super nice and easy to customise.",
      author: "kodecity",
    },
    {
      category: "Customizability",
      review:
        "Features are too good, easy customization, error-free code, fast loading, everything fantastic. Thank you Team.",
      author: "neerajofficial",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-[140px]">
      <div className="max-w-[1200px] mx-auto px-[12px]">
        <SectionHeader
          subtitle="REAL REVIEWS"
          title="What Our Customers Saying"
          bgwhite={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          {reviewsData.map((review, index) => (
            <ReviewCard
              key={index}
              category={review.category}
              review={review.review}
              author={review.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
