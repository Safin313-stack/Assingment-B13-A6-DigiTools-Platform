const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#4F39F6] flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="font-bold text-lg text-[#101727]">DigiTools</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Products', 'Resources', 'Business', 'More Info'].map(l => (
              <a key={l} href="#" className="text-[#627382] hover:text-[#4F39F6] text-sm font-medium transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#products" className="relative p-2 text-[#627382] hover:text-[#4F39F6]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-9H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4F39F6] text-white text-[10px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </a>
            <button className="text-sm font-semibold text-[#4F39F6] bg-[#EDE9FE] hover:bg-[#4F39F6] hover:text-white px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
