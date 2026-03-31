const stats = [
  { value: "50K+", label: "Customers" },
  { value: "200+", label: "Digital Tools" },
  { value: "4.9", label: "Rating" },
];
const Stats = () => (
  <section className="py-8" style={{background: 'linear-gradient(135deg, #4F39F6 0%, #7C3AED 100%)'}}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center gap-16 md:gap-32">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-extrabold text-2xl md:text-3xl text-white">{s.value}</p>
            <p className="text-purple-200 text-sm mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Stats;
