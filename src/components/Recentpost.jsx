
function RecentPosts() {
  return (
    <section id="blog" className="bg-[#EDF7FA] py-7">
      <div className="max-w-[1152px] mx-auto px-6 md:px-12">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[22px] text-[#21243D]">
            Recent posts
          </h2>

          <a
            href="#blog"
            className="hidden md:block text-[#00A8CC] text-[16px]"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="bg-white p-6 rounded-sm shadow-sm">
            <h3 className="text-[26px] font-bold text-[#21243D]">
              Making a design system from scratch
            </h3>

            <div className="flex items-center gap-5 my-5 text-[16px] text-[#21243D]">
              <span>12 Feb 2020</span>
              <span className="border-l border-[#21243D] h-5"></span>
              <span>Design, Pattern</span>
            </div>

            <p className="text-[16px] leading-6 text-[#21243D]">
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm shadow-sm">
            <h3 className="text-[26px] font-bold text-[#21243D]">
              Creating pixel perfect icons in Figma
            </h3>

            <div className="flex items-center gap-5 my-5 text-[16px] text-[#21243D]">
              <span>12 Feb 2020</span>
              <span className="border-l border-[#21243D] h-5"></span>
              <span>Figma, Icon Design</span>
            </div>

            <p className="text-[16px] leading-6 text-[#21243D]">
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RecentPosts;
