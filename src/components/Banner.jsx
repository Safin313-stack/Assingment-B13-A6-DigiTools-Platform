import heroImg from '../assets/hero.webp';

const Banner = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center min-h-[480px] gap-8 py-12">
          {/* Left — text content */}
          <div>
            <p className="text-[#4F39F6] text-xs font-semibold uppercase tracking-widest mb-3">
              Welcome To DigiTools
            </p>
            <h1 className="font-extrabold text-4xl lg:text-5xl leading-tight text-[#101727] mb-5">
              Supercharge Your<br />
              <span className="text-[#4F39F6]">Digital Workflow</span>
            </h1>
            <p className="text-[#627382] text-sm leading-relaxed mb-8 max-w-md">
              Discover and purchase the best digital tools for your business. AI writing, design, marketing, and more — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#products">
                <button className="bg-[#4F39F6] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#3B27E8] transition-colors text-sm shadow">
                  Get Started
                </button>
              </a>
              <a href="#steps">
                <button className="flex items-center gap-2 border border-gray-200 text-[#101727] font-semibold px-5 py-3 rounded-lg hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors text-sm bg-white">
                  <span className="w-6 h-6 rounded-full bg-[#4F39F6] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 8 10">
                      <path d="M0 0l8 5-8 5V0z"/>
                    </svg>
                  </span>
                  Watch Demo
                </button>
              </a>
            </div>
          </div>

          {/* Right — hero image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={heroImg}
                alt="Digital workflow"
                className="w-full h-auto rounded-3xl object-cover"
                style={{maxHeight: '420px'}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
/* Commit 5: Banner style comment */
/* Banner animation improvements */
