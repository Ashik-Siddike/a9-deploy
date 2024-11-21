import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://i.ibb.co/L0PFkW5/image.png",
      title: "Share Warmth This Winter",
      subtitle: "Bringing Hope & Comfort",
      description:
        "Join our mission to provide warmth to those in need during the harsh winter months. Every donation makes a difference.",
      stats: "10,000+ families helped last winter",
    },
    {
      image: "https://i.ibb.co/9vXMmjw/image.png",
      title: "Make a Difference Today",
      subtitle: "Your Support Matters",
      description:
        "Help us reach more communities across Bangladesh with essential winter clothing and blankets.",
      stats: "Active in 64 districts",
    },
    {
      image: "https://i.ibb.co/2yVZdLb/image.png",
      title: "Together We Can Help",
      subtitle: "Community Support",
      description:
        "Connect with local volunteers and see the direct impact of your contributions in your community.",
      stats: "1000+ active volunteers",
    },
  ];

  const handleDonateClick = (e) => {
    e.preventDefault();
    navigate("/campaigns");
  };

  const handleLearnMore = (e) => {
    e.preventDefault();
    navigate("/how-to-help");
  };

  return (
    <div className="h-[80vh] md:h-[90vh] relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent">
                <div className="max-w-[83.333333%] mx-auto h-full flex flex-col items-center md:items-start justify-center px-4 md:px-0">
                  <div className="max-w-2xl space-y-4 md:space-y-6 text-center md:text-left">
                    <span
                      className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs md:text-sm font-medium mb-2"
                      data-aos="fade-down"
                    >
                      {slide.subtitle}
                    </span>
                    <h1
                      className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
                      data-aos="fade-down"
                      data-aos-delay="100"
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="text-base md:text-xl text-gray-300"
                      data-aos="fade-down"
                      data-aos-delay="200"
                    >
                      {slide.description}
                    </p>
                    <div
                      className="flex items-center justify-center md:justify-start gap-2 text-blue-400"
                      data-aos="fade-down"
                      data-aos-delay="300"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm md:text-base font-medium">
                        {slide.stats}
                      </span>
                    </div>
                    <div
                      className="flex flex-col md:flex-row items-center gap-4 pt-4"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <button
                        onClick={handleDonateClick}
                        className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white text-base md:text-lg font-semibold rounded-full 
                          hover:bg-blue-700 transform hover:scale-105 transition-all duration-300
                          shadow-lg hover:shadow-blue-500/50"
                      >
                        Donate Now
                      </button>
                      <button
                        onClick={handleLearnMore}
                        className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white text-base md:text-lg font-semibold rounded-full 
                          hover:bg-white/20 transition-all duration-300"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
    </div>
  );
};

export default Banner;
