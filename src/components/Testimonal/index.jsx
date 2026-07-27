import React from "react";
import Slider from "react-slick";
import StarIcon from "../../../public/assets/Icon/star";
import { Testimonials } from "../../Constant/CustomerReview";


const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 ">
      <Slider {...settings}>
        {Testimonials.map((testimonial, index) => (
          <div key={index} className="px-3 ">
            <div className="bg-white  rounded-lg p-6 h-full flex flex-col justify-between text-gray-700">
              <div className="text-4xl text-gray-300 leading-none mb-4">“</div>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    className="size-12 flex-none rounded-full bg-gray-50"
                  />
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <StarIcon
                        key={item}
                        className="w-3 h-3"

                      />
                    );
                  })}
                </div>
              </div>

              <p className="text-base mb-4">{testimonial.quote}</p>
              <p className="font-semibold text-black">
                {testimonial.name},{" "}
                <span className="text-gray-600">{testimonial.location}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
