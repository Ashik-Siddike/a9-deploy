import { useNavigate } from "react-router-dom";
import { FaHandHoldingHeart, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const HowToHelp = () => {
  const navigate = useNavigate();

  const handleStartDonating = () => {
    navigate('/campaigns');
  };

  const donationSteps = [
    {
      icon: "🎁",
      title: "Select Items",
      description: "Choose clean, gently used winter clothing items like jackets, sweaters, blankets, and other warm clothing."
    },
    {
      icon: "📝",
      title: "Fill Form",
      description: "Complete our simple donation form with your contact details and item information."
    },
    {
      icon: "🚚",
      title: "Schedule Pickup",
      description: "We'll arrange a convenient pickup time from your location within 24-48 hours."
    },
    {
      icon: "✨",
      title: "Make Impact",
      description: "Your donations will be distributed to those in need, helping them stay warm this winter."
    }
  ];

  const collectionPoints = [
    {
      city: "Dhaka",
      address: "House 12, Road 5, Dhanmondi",
      contact: "+880 1711-123456",
      hours: "9 AM - 6 PM"
    },
    {
      city: "Chittagong",
      address: "15/A, O.R. Nizam Road",
      contact: "+880 1722-234567",
      hours: "10 AM - 5 PM"
    }
  ];

  const supportedDivisions = [
    "Dhaka", "Chittagong", "Rajshahi", "Khulna", 
    "Sylhet", "Barisal", "Rangpur", "Mymensingh"
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-[83.333333%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            How You Can Help
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our mission to provide warmth and comfort to those in need during winter. 
            Your support can make a real difference in someone's life.
          </p>
        </div>

        {/* Donation Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Donation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Points */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Collection Points</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collectionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">{point.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{point.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-blue-600" />
                    <span>{point.contact}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaHandHoldingHeart className="text-blue-600" />
                    <span>Open: {point.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Divisions */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">Supported Divisions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up">
            {supportedDivisions.map((division) => (
              <div
                key={division}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg 
                  transition-all duration-300 hover:bg-blue-50"
              >
                <p className="font-semibold text-gray-700">{division}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 p-12 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your contribution can help someone stay warm this winter. 
            Start your donation journey today.
          </p>
          <button 
            onClick={handleStartDonating}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold 
              hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Start Donating Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp; 