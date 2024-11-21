const Statistics = () => {
  const stats = [
    {
      number: "10K+",
      label: "Donations Received",
      icon: "🎁"
    },
    {
      number: "50+",
      label: "Active Campaigns",
      icon: "📢"
    },
    {
      number: "100+",
      label: "Volunteers",
      icon: "👥"
    },
    {
      number: "20K+",
      label: "People Helped",
      icon: "❤️"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/pattern.png')] opacity-10"></div>
      <div className="lg:w-11/12 mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-bold mb-3 text-white">
                {stat.number}
              </div>
              <div className="text-xl text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Statistics; 