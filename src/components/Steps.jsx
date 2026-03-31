import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const steps = [
  { title: "Create Account", description: "Sign up for free in seconds and get instant access to our full marketplace of digital tools.", img: userImg },
  { title: "Choose Products", description: "Browse 500+ premium tools, compare features and pricing, then add your picks to cart.", img: packageImg },
  { title: "Start Creating", description: "Get immediate access after purchase and start supercharging your digital workflow today.", img: rocketImg },
];

const Steps = () => (
  <section id="steps" className="py-16 bg-[#F8F9FF]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-extrabold text-3xl text-[#101727] mb-2">Get Started in 3 Steps</h2>
        <p className="text-[#627382] text-sm max-w-md mx-auto">Simple, fast, and effective. Join thousands of professionals today.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-10 left-[22%] right-[22%] h-px border-t-2 border-dashed border-[#4F39F6]/30 z-0" />
        {steps.map((s, i) => (
          <div key={i} className="relative z-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-5 shadow-sm p-4">
              <img src={s.img} alt={s.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-[#101727] text-base mb-2">{s.title}</h3>
            <p className="text-[#627382] text-sm leading-relaxed max-w-xs">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Steps;
