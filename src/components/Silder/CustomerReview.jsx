import React, { useState } from "react";
import Slider from "react-slick";
import { SilderChosse } from "../../Constant/CustomerReview";
function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // screens <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // screens <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isExpanded, setIsExpanded] = useState(null);
  //   // Toggle the "Read More" and "Read Less" state
  const toggleReadMore = (index) =>
    setIsExpanded(isExpanded === index ? null : index);
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

      <Slider {...settings}>
        {SilderChosse?.map((item, index) => {
          return (
            <div className="p-2 sm:p-4" key={index}>
              <div className="bg-bgSlider  p-4 rounded-sm   shadow-md line-clamp-3">
                <div>
                  <div className="flex justify-between">
                    {" "}
                    <div className="flex  gap-3 items-center">
                      <img
                        alt=""
                        src={
                          item?.img
                            ? item?.img
                            : "https://via.placeholder.com/150"
                        }
                        className="size-12 flex-none rounded-full bg-gray-50"
                      />
                      <span className="flex flex-col">
                        <h6 className="text-sm"> {item?.title}</h6>{" "}
                        <p className="text-xs text-[#bdbdbd]">{item?.date}</p>
                      </span>
                    </div>
                    <div>
                      <img
                        src="/assets/image/google.png"
                        alt="google icon"
                        className="size-5 w-8 h-8 object-contain flex-none rounded-full bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="flex py-3">
                    {" "}
                    {/* {[1, 2, 3, 4, 5]?.map((item) => {
                      return {
                         <Star
                           key={item}
                           className="w-3 h-3"
                           color={"#f6bb06"}
                         /> 
                      };
                    })} */}
                  </div>
                  <p className="text-black text-xs text-start ">
                    {" "}
                    {isExpanded === index
                      ? item?.description
                      : `${item?.description.slice(0, 100)}...`}
                  </p>
                </div>
                <p
                  className="text-[#bdbdbd] text-xs pt-3"
                  onClick={() => toggleReadMore(index)}
                >
                  {" "}
                  {isExpanded === index ? "Read Less" : "Read More"}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderComponent;
