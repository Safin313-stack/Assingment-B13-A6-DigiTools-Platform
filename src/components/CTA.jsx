const CTA = () => (
  <section className="py-16" style={{background: 'linear-gradient(135deg, #4F39F6 0%, #7C3AED 100%)'}}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="font-extrabold text-3xl lg:text-4xl text-white mb-3">
        Ready To Transform Your Workflow?
      </h2>
      <p className="text-purple-200 text-sm mb-8 max-w-md mx-auto">
        Join 50,000+ professionals using DigiTools to build, grow, and scale their digital businesses.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="#products">
          <button className="bg-white text-[#4F39F6] font-bold px-7 py-3 rounded-lg hover:bg-purple-50 transition-colors text-sm">
            Get Started Free
          </button>
        </a>
        <a href="#steps">
          <button className="border border-white/40 text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">
            Learn More
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
