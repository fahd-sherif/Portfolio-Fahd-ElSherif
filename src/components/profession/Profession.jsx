import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Data Analysis",
    description:
      "I collect, clean, and analyze raw data to uncover trends, patterns, and relationships that help businesses make smarter, evidence-based decisions.",
  },
  {
    id: 2,
    title: "Data Visualization",
    description:
      "I design clear and engaging dashboards using tools like Power BI and Tableau, transforming complex information into visuals that tell meaningful stories.",
  },
  {
    id: 3,
    title: "Reporting & Automation",
    description:
      "I create automated reports and workflows that save time, improve accuracy, and ensure key metrics are always up to date for decision-makers.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in analyzing complex datasets, creating insightful visualizations, and building interactive dashboards that drive data-driven decisions.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines analytical thinking and technical skills to deliver insights that are both actionable and easy to understand for stakeholders.
          </p>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=fahdsherif2005@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
