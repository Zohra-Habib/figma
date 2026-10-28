
function Hero() {
  return (
    <section className="max-w-[1152px] mx-auto px-6 md:px-12 pt-8 md:pt-28 pb-16 md:pb-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        <div className="text-center md:text-left max-w-[500px]">
          <h1 className="text-[32px] md:text-[44px] font-bold leading-tight text-[#21243D]">
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>

          <p className="mt-6 text-[16px] leading-6 text-[#21243D]">
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt
            nostrud amet.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block mt-8 bg-[#FF6464] text-white px-5 py-3 text-[20px] font-medium rounded-sm"
          >
            Download Resume
          </a>
        </div>

        <div className="shrink-0">
          <img
            src="/profile.png"
            alt="John Profile"
            className="w-[180px] h-[180px] md:w-[243px] md:h-[243px] rounded-full object-cover shadow-[-8px_12px_0px_#EDF7FA]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
