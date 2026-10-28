
function FeaturedWorks() {
  const works = [
    {
      id: 1,
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      image: "/dashboard.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      image: "/portraits.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      image: "/typography.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <section
      id="works"
      className="max-w-[1152px] mx-auto px-6 md:px-12 py-10"
    >
      <h2 className="text-[22px] text-[#21243D] mb-6 text-center md:text-left">
        Featured works
      </h2>

      <div>
        {works.map((work) => (
          <div
            key={work.id}
            className="flex flex-col md:flex-row gap-5 py-7 border-b border-[#E0E0E0]"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full md:w-[246px] h-[230px] md:h-[180px] object-cover rounded-md"
            />

            <div className="flex-1">
              <h3 className="text-[26px] md:text-[30px] font-bold text-[#21243D]">
                {work.title}
              </h3>

              <div className="flex items-center gap-6 mt-4 mb-4">
                <span className="bg-[#142850] text-white px-3 py-0.5 rounded-full font-bold text-[18px]">
                  {work.year}
                </span>

                <span className="text-[#8695A4] text-[20px]">
                  {work.category}
                </span>
              </div>

              <p className="text-[16px] leading-6 text-[#21243D]">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedWorks;
