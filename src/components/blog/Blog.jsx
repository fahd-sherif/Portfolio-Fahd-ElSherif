import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "12 Mar, 2024",
    comments: 120,
    title: "Understanding Business KPIs with Power BI",
    link: "https://creatum.online/2025/03/23/how-to-create-a-power-bi-kpi-scorecard-a-comprehensive-step-by-step-guide/",
  },
  {
    id: 2,
    image: img2,
    date: "30 Dec, 2025",
    comments: 130,
    title: "Building Interactive Dashboards in Tableau",
    link: "https://mindmajix.com/interactive-dashboards-in-tableau",
  },
  {
    id: 3,
    image: img3,
    date: "12 Jun, 2025",
    comments: 215,
    title: "Data Cleaning: Turning Raw Data into Valuable Insights",
    link: "https://www.linkedin.com/pulse/data-transformation-turning-raw-actionable-insights-pooja-pawar-pdric/",
  },
  {
    id: 4,
    image: img4,
    date: "22 Oct, 2025",
    comments: 246,
    title: "Storytelling with Data: From Numbers to Narratives",
    link: "https://www.facebook.com/7H.Academy.eg.edu/posts/%EF%B8%8F-from-data-to-storytelling-transforming-numbers-into-meaningful-narrativesin-to/1377571583940333/",
  },
  
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent blog posts where I share insights on data analysis, visualization, and turning numbers into business insights.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
