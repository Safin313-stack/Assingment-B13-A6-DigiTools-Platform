const Footer = () => (
  <footer className="bg-[#101727] pt-14 pb-6">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-[#4F39F6] flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="font-bold text-lg text-white">DigiTools</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">The ultimate marketplace for digital tools. Empowering creators worldwide.</p>
          <div className="flex gap-2">
            {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-[#4F39F6] flex items-center justify-center text-gray-400 hover:text-white transition-all text-xs">{icon}</a>
            ))}
          </div>
        </div>
        {[
          { title: 'Product', links: ['AI Writing Pro', 'Design Tools', 'SEO Booster', 'Email Forge', 'Security Suite'] },
          { title: 'Resources', links: ['Documentation', 'Blog', 'Community', 'Support', 'Status'] },
          { title: 'More Info', links: ['About Us', 'Careers', 'Press', 'Privacy Policy', 'Terms'] },
        ].map((col, i) => (
          <div key={i}>
            <h4 className="font-bold text-white text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map(l => <li key={l}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-500 text-xs">© 2026 DigiTools Platform. All rights reserved.</p>
        <div className="flex gap-4">
          {['Privacy', 'Terms', 'Cookies'].map(l => <a key={l} href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">{l}</a>)}
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
