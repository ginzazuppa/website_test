import React from "react";
import instagram from "/src/images/instagram.webp";
import facebook from "/src/images/facebook.webp";
import footerImg from "/src/images/footer-img.webp";

export default function Footer() {
  return (
    <div className=" w-full h-[700px] md:h-[650px] relative mt-8 bg-gradient-to-r from-orangePrima to-orange-400 sms:mt-24">
      <div className="pt-20 text-white relative z-10 translate-y-48 md:translate-y-24 sms:translate-y-8">
        <div className="py-3 px-10 bg-gradient-to-r from-orangePrima to-yellow-500 w-fit mx-auto -translate-y-20 rounded-bl-2xl rounded-tr-2xl">
          <h2 className="uppercase text-3xl font-semibold">zuppasoup</h2>
          <p>Wedding - Package</p>
        </div>
        <p className="text-center -translate-y-12 md:w-[80%] mx-auto">
          Jl. Raya Tengah, RT.9/RW.3, Gedong, Kec. Ps. Rebo, Kota Jakarta Timur,
          Daerah Khusus Ibukota Jakarta 13520, Indonesia
        </p>
      </div>
      <div className="absolute w-full -top-px">
        <svg
          className="absolute -top-px w-screen lg:w-full"
          viewBox="0 0 1280 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-white"
            d="M1280 0H0C206.127 241.5 388.123 289.5 722.954 176.5C990.818 86.1 1205.93 155.5 1280 201.5V0Z"
          ></path>
        </svg>
      </div>
      <div className="text-white flex justify-between relative px-20 translate-y-48 z-10 md:translate-y-24 sms:translate-y-8 sms:flex-col sms:gap-y-10">
        <div className="flex flex-col gap-y-[2px]">
          <h3 className="text-xl font-semibold leading-snug -ml-4">
            Situs Kami
          </h3>
           <a href="https://zuppasoup.my.id/">Dokumentasi</a>
          <a href="https://zuppasoup.my.id/">Blog</a>
        </div>
        <div className="flex flex-col gap-y-[2px]">
          <h3 className="text-xl font-semibold leading-snug -ml-4">
            Ikuti Kami
          </h3>
          <div className="flex gap-x-5">
            <a
              href="https://www.instagram.com/zuppasoup.ginza/"
              target="_blank"
            >
              <img
                src={instagram}
                className="w-10 h-10 object-contain"
                alt="ig"
              />
            </a>
            <a href="https://web.facebook.com/ginza.zuppasoup" target="_blank">
              <img src={facebook} className="w-10 h-10 object-cover" alt="ig" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 z-[2]">
        <img
          src={footerImg}
          alt="Footer img"
          className="w-full h-[197px] md:object-cover"
        />
      </div>
    </div>
  );
}
