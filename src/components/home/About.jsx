import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = (e) => {
    e.preventDefault();
    navigate('/how-to-help');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="lg:w-11/12 mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            About Our Mission
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="relative"
            data-aos="fade-right"
          >
            <img
              src="https://i.ibb.co.com/mSBYj6j/image.png"
              alt="Winter Donation Mission"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 z-0"></div>
          </div>
          <div 
            className="space-y-6"
            data-aos="fade-left"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Our mission is to ensure that no one in Bangladesh has to suffer
              from the cold during winter. We believe that everyone deserves to
              stay warm and comfortable during the harsh winter months.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Through our platform, we connect generous donors with those in
              need, making it easy to contribute winter clothing and bring
              warmth to vulnerable communities across the country.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Join us in our mission to make a difference in people's lives this
              winter season.
            </p>
            <div className="pt-4">
              <button 
                onClick={handleLearnMore}
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 
                  transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
