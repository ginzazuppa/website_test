import React from "react";
import Slider from "react-slick";
import content1 from "/src/images/content/content-1.webp";
import content2 from "/src/images/content/content-2.webp";
import content3 from "/src/images/content/content-3.webp";
import content from "/src/images/content/content-img.webp";

export default function Content() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="max-h-[800px] h-screen w-full overflow-hidden relative">
      <div className="h-screen left-0 top-0  w-screen z-[5]  bg-gradient-to-r from-orangePrima to-transparent  absolute"></div>
      <div className="absolute z-[6] h-[300px] w-[500px] p-10 border border-white/20 rounded-2xl backdrop-blur bg-white/10 top-1/2 -translate-y-1/2 left-0 translate-x-1/3 text-white md:w-[80%] md:-translate-x-1/2 md:left-1/2 md:h-fit sms:px-5">
        <h2 className="text-4xl font-bold tracking-wide sms:text-3xl">
          <span className="text-emerald-300">ZUPPASOUP</span> - Wedding Package
        </h2>
        <p className="text-lg pt-3 mb-5 sms:text-sm">
          Kami membantumu menyediakan makanan sesuai keinginanmu, dan Jadikan
          pernikahanmu yang terbaik dengan kami!
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
          target="_blank"
          className="py-2 px-5 bg-[#e58203] text-white rounded-md  w-fit shadow-xl"
        >
          Hubungi Kami
        </a>
      </div>
      <Slider {...settings} className="overflow-hidden h-screen">
        <div className="h-screen">
          <img
            src={content}
            alt="ZUPPASOUP"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-screen">
          <img
            src={content1}
            alt="ZUPPASOUP"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-screen">
          <img
            src={content2}
            alt="ZUPPASOUP"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-screen">
          <img
            src={content3}
            alt="ZUPPASOUP"
            className="object-cover w-full h-full"
          />
        </div>
      </Slider>
    </div>
  );
}
