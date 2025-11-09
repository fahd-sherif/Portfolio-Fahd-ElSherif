import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    quote: `I’ve had the pleasure of working with Fahd on multiple projects, and one of the most remarkable experiences we shared was during the Digital Egypt Pioneers Initiative (DEPI). Throughout our collaborations, Fahd consistently demonstrated professionalism, dedication, and a strong team spirit.`,
    name: "Faris Sherif",
    designation: "Data Analyst Trainee at DEPI",
  },
  {
    quote: `Fahd stood out for his active participation in discussions, the quality of his assignments, and his readiness to support his peers. I believe he has the skills and mindset to grow in his career path and succeed as a freelancer.`,
    name: "Ahmed Khalifa",
    designation: "Freelancing Trainer, DEPI",
  },
  {
    quote: `Fahd is a proficient Data Analyst with a solid background in statistical analysis and data visualization. He is experienced in building interactive dashboards, extracting trends, and presenting insights that drive performance improvements.`,
    name: "Amr Khaled",
    designation: "Data Analyst Trainee at DEPI",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
