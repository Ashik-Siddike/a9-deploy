import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahima Begum",
      role: "Donor",
      image: "https://i.ibb.co.com/bmcZq17/image.png",
      quote:
        "Being able to help those in need during winter gives me immense satisfaction. This platform makes it so easy to donate.",
    },
    {
      name: "Kamal Hassan",
      role: "Volunteer",
      image: "https://i.ibb.co.com/ZWCVP24/image.png",
      quote:
        "I've seen firsthand how these donations change lives. The smiles on people's faces when they receive warm clothes is priceless.",
    },
    {
      name: "Nusrat Jahan",
      role: "Beneficiary",
      image: "https://i.ibb.co.com/Dfy55pt/image-1.png",
      quote:
        "The warm clothes we received helped our family survive the harsh winter. We're grateful for all the donors.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          What People Say
        </h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-4xl"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 text-lg mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
