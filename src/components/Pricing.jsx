const plans = [
  { name: "Starter", price: 0, period: "Free forever", description: "Perfect for individuals getting started.", features: ["10 free tools", "Community support", "Basic analytics", "1 user"], cta: "Get Started", highlight: false },
  { name: "Pro", price: 29, period: "per month", description: "For professionals who need the full toolkit.", features: ["200+ tools", "Priority support", "Advanced analytics", "5 users", "API access"], cta: "Start Free Trial", highlight: true },
  { name: "Enterprise", price: 99, period: "per month", description: "For teams and organizations at scale.", features: ["Unlimited tools", "Dedicated support", "Custom integrations", "Unlimited users", "SLA guarantee"], cta: "Contact Sales", highlight: false },
];

const Pricing = () => (
  <section id="pricing" className="py-16 bg-[#F8F9FF]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-extrabold text-3xl text-[#101727] mb-2">Simple, Transparent Pricing</h2>
        <p className="text-[#627382] text-sm max-w-md mx-auto">No hidden fees. Cancel anytime. Start free.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 items-center">
        {plans.map((plan, i) => (
          <div key={i} className={`rounded-2xl p-7 flex flex-col gap-5 relative transition-all ${plan.highlight ? 'text-white scale-105 shadow-2xl' : 'bg-white border border-gray-200 hover:border-[#4F39F6]/30 hover:shadow-md'}`} style={plan.highlight ? {background: 'linear-gradient(135deg, #4F39F6 0%, #7C3AED 100%)'} : {}}>
            {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">⭐ Most Popular</span>}
            <div>
              <h3 className={`font-bold text-lg ${plan.highlight ? 'text-white' : 'text-[#101727]'}`}>{plan.name}</h3>
              <p className={`text-xs mt-1 ${plan.highlight ? 'text-purple-200' : 'text-[#627382]'}`}>{plan.description}</p>
            </div>
            <div>
              <span className={`font-extrabold text-4xl ${plan.highlight ? 'text-white' : 'text-[#101727]'}`}>${plan.price}</span>
              <span className={`text-sm ml-2 ${plan.highlight ? 'text-purple-200' : 'text-[#627382]'}`}>{plan.period}</span>
            </div>
            <ul className="space-y-2.5 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-purple-100' : 'text-[#627382]'}`}>
                  <span className={`font-bold ${plan.highlight ? 'text-white' : 'text-[#4F39F6]'}`}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full font-bold py-3 rounded-xl text-sm transition-all ${plan.highlight ? 'bg-white text-[#4F39F6] hover:bg-purple-50' : 'bg-[#4F39F6] hover:bg-[#3B27E8] text-white'}`}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Pricing;
