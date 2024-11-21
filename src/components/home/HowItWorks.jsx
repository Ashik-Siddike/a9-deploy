import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const handleStartDonating = (e) => {
    e.preventDefault();
    navigate('/campaigns');
  };

  const steps = [
    {
      icon: "🎁",
      title: "Choose Items to Donate",
      description: "Select warm clothing, blankets, or winter essentials that can help someone stay warm this winter."
    },
    {
      icon: "📝",
      title: "Fill Donation Form",
      description: "Provide your donation details and select a convenient pickup location. We make the process simple and secure."
    },
    {
      icon: "🚚",
      title: "Collection Process",
      description: "Our trusted volunteers will collect items from your location within 24-48 hours of your submission."
    },
    {
      icon: "❤️",
      title: "Distribution",
      description: "Your donations are distributed to pre-verified beneficiaries across Bangladesh within 72 hours."
    }
  ];

  const impactPoints = [
    {
      title: "Emergency Response",
      description: "We prioritize areas experiencing severe cold waves and provide immediate support to affected communities."
    },
    {
      title: "Transparency",
      description: "Track your donation's journey and receive updates about the communities you've helped."
    },
    {
      title: "Quality Assurance",
      description: "All donations undergo quality checks to ensure they meet our standards for warmth and durability."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="lg:w-11/12 mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            How It Works
          </span>
        </h2>

        {/* Main Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 
            className="text-3xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            Our Impact & Commitment
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {impactPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-bold mb-3">{point.title}</h4>
                <p className="text-blue-100">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your donation can help protect vulnerable communities from harsh winter conditions. 
            Join our mission to spread warmth across Bangladesh.
          </p>
          <button 
            onClick={handleStartDonating}
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 
              transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Start Donating Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 