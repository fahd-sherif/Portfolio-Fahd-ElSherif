import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Dashboard (Power BI)",
    title: "retail_sales_2024",
    description:
      "A focused analysis of retail sales and profit metrics, providing insight into regional and category performance.",
    link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNmMzMGY5ZDktZDEzZi00YjQ4LTliY2ItM2FkZWYwODYxYTZjIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
  },
  {
    id: 2,
    image: card2,
    category: "Dashboard (Power BI)",
    title: "Sample - Superstore 2019",
    description:
      "Delivering a comprehensive analysis on Superstore sales, profit, and order metrics across various segments and regions effectively.",
    link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNzc2MGQ3NDItNTQzZC00NTE4LTk5MTAtOWNlYmNjZGFlYTc4IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
  },
  {
    id: 3,
    image: card3,
    category: "Dashboard (Power BI)",
    title: "UK Train Rides",
    description:
      "Delivering a comprehensive analysis of train trips, revenue, punctuality, and delays across different stations and regions effectively.",
    link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiYzMwNjlhZmMtNDI0OS00ZDBiLTg3OGMtMzM0ZWRkYzhlODVkIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
  }
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Project</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
