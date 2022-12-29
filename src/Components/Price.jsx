import React from "react";
import courtFood from "/src/images/court-food.webp";
import courtFood2 from "/src/images/court-food-2.webp";
import peralatan1 from "/src/images/peralatan-1.webp";
import content from "/src/images/content/content-1.webp";
import produk2 from "/src/images/produk-kami/produk-kami-1.webp";
import njoja from "/src/images/kerjasama/njoja-logo.webp";
import mua from "/src/images/kerjasama/mua.webp";
import saenna from "/src/images/kerjasama/saenna-logo.webp";
import rg from "/src/images/kerjasama/rg-logo.webp";
import pakubo from "/src/images/kerjasama/pakubo.webp";

import cijantung from "/src/images/court/cijantung.webp";
import condet from "/src/images/court/condet.webp";
import halim from "/src/images/court/halim.webp";

import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { MdLocalOffer, MdSignalCellularAlt } from "react-icons/md";
import Slider from "react-slick";
import { IoPinSharp } from "react-icons/io5";

export default function Price() {
  const CardEx = ({ title, body, srcImg }) => {
    return (
      <div className="p-5 w-full md:w-[100%] md:max-w-[500px] bg-white rounded-2xl shadow-2xl">
        <div className="w-full h-52 md:h-80  rounded-2xl mb-5 overflow-hidden">
          <img
            src={srcImg}
            alt="image zuppasoup"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center relative pb-5">
          <h2 className="text-xl font-semibold mb-2 capitalize">{title}</h2>
          <p>{body}</p>
          <div className="w-[90px] h-[2px] absolute left-1/2 bottom-0 -translate-x-1/2 bg-orangePrima"></div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // swipe: false,
  };

  return (
    <div className="h-full w-full relative bg-amber-100">
      <div className="flex gap-x-5 rounded-2xl shadow-lg bg-white w-3/4 h-[200px] absolute z-[7] left-1/2 border-2 -translate-x-1/2 top-0 -translate-y-1/2 flex-col sms:w-[90%] overflow-x-hidden">
        <p className="text-xl font-semibold text-center pt-5 md:text-lg sms:text-sm">
          Dipercaya Sejak Tahun 2017 Menangani 100++ Event di Jabodetabek
        </p>
        <Slider
          {...settings}
          arrows={false}
          className="w-full m-auto sms:h-[50%] relative"
        >
          <div className="w-1/6  md:w-1/4 flex  ">
            <img
              src={njoja}
              className="w-5/6 mx-auto object-contain sms:h-[100px]"
              alt="kerjasama ZUPPASOUP"
            />
          </div>
          <div className="w-1/6 md:w-1/4 flex  ">
            <img
              src={mua}
              className="w-5/6 mx-auto object-contain sms:h-[100px]"
              alt="kerjasama ZUPPASOUP"
            />
          </div>
          <div className="w-1/6  md:w-1/4 flex  ">
            <img
              src={saenna}
              className="w-5/6 mx-auto object-contain sms:h-[100px]"
              alt="kerjasama ZUPPASOUP"
            />
          </div>
          <div className="w-1/6  md:w-1/4 flex  ">
            <img
              src={pakubo}
              className="w-5/6 mx-auto object-contain sms:h-[100px]"
              alt="kerjasama ZUPPASOUP"
            />
          </div>
          <div className="w-1/6  md:w-1/4 flex  sms:h-[100px]">
            <img
              src={rg}
              className="w-5/6 mx-auto h-20 object-contain"
              alt="kerjasama ZUPPASOUP"
            />
          </div>
        </Slider>
      </div>
      <div className="pt-40">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-orangePrima sms:text-3xl">
            Wedding All In Package
          </h2>
          <span className="italic pt-2">Starts from</span>
        </div>
        <div className="flex justify-between pt-10 md:flex-col md:items-center md:gap-5 sms:gap-y-10 px-20 gap-10 md:px-10 sms:px-2">
          <div className="w-1/3 sms:w-[100%] md:w-full  bg-white flex flex-col gap-y-5 pb-10 rounded-3xl overflow-hidden">
            <p className="w-full bg-[#00bfa6] py-3 text-white px-5 text-lg">
              Paket Hemat
            </p>
            <div className="flex flex-col px-5 gap-5">
              <div className="flex items-center justify-start gap-5">
                <RiNumber1 className="w-7 h-7" />
                <h2 className="text-2xl">Paket Hemat</h2>
              </div>
              <div className="flex gap-3 text-white flex-wrap">
                <div className="p-2 flex items-center gap-x-2 bg-[#ff9800] rounded-md">
                  <MdSignalCellularAlt />
                  <p>Hemat</p>
                </div>
                <div className="p-2 flex items-center gap-x-2 bg-[#007aff] rounded-md">
                  <MdLocalOffer />
                  <p>Cashback 100rb</p>
                </div>
              </div>

              <div>
                <span className="text-sm">Mulai dari</span>
                <p className="text-3xl text-[#ff9800]">
                  Rp 1,5jt
                  <span className="text-black text-base">/100 Porsi</span>
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
                className="py-3 w-full rounded-full bg-[#ff9800] text-white text-lg text-center shadow-lg shadow-[#ff990077]"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
          <div className="w-1/3 sms:w-[100%] md:w-full  bg-white flex flex-col gap-y-5 pb-10 rounded-3xl overflow-hidden">
            <p className="w-full bg-[#00bfa6] py-3 text-white px-5 text-lg">
              Paket Favorit
            </p>
            <div className="flex flex-col px-5 gap-5">
              <div className="flex items-center justify-start gap-5">
                <RiNumber2 className="w-7 h-7" />
                <h2 className="text-2xl">Paket Favorit</h2>
              </div>
              <div className="flex gap-3 text-white flex-wrap">
                <div className="p-2 flex items-center gap-x-2 bg-[#ff9800] rounded-md">
                  <MdSignalCellularAlt />
                  <p>Favorit</p>
                </div>
                <div className="p-2 flex items-center gap-x-2 bg-[#007aff] rounded-md">
                  <MdLocalOffer />
                  <p>Cashback 100rb</p>
                </div>
              </div>

              <div>
                <span className="text-sm">Mulai dari</span>
                <p className="text-3xl text-[#ff9800]">
                  Rp 2,9jt{" "}
                  <span className="text-black text-base">/200 Porsi</span>
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
                className="py-3 w-full rounded-full bg-[#ff9800] text-white text-lg text-center shadow-lg shadow-[#ff990077]"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
          <div className="w-1/3 sms:w-[100%] md:w-full  bg-white flex flex-col gap-y-5 pb-10 rounded-3xl overflow-hidden">
            <p className="w-full bg-[#00bfa6] py-3 text-white px-5 text-lg">
              Paket Eksklusif
            </p>
            <div className="flex flex-col px-5 gap-5">
              <div className="flex items-center justify-start gap-5">
                <RiNumber3 className="w-7 h-7" />
                <h2 className="text-2xl">Paket Eksklusif</h2>
              </div>
              <div className="flex gap-3 text-white flex-wrap">
                <div className="p-2 flex items-center gap-x-2 bg-[#ff9800] rounded-md">
                  <MdSignalCellularAlt />
                  <p>Eksklusif</p>
                </div>
                <div className="p-2 flex items-center gap-x-2 bg-[#007aff] rounded-md">
                  <MdLocalOffer />
                  <p>Cashback 100rb</p>
                </div>
              </div>

              <div>
                <span className="text-sm">Mulai dari</span>
                <p className="text-3xl text-[#ff9800]">
                  Rp 4,2jt{" "}
                  <span className="text-black text-base">/300 Porsi</span>
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
                className="py-3 w-full rounded-full bg-[#ff9800] text-white text-lg text-center shadow-lg shadow-[#ff990077]"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/6  h-36 my-10 mx-auto text-xl text-center justify-center flex items-center flex-col tracking-wide sms:w-[90%]">
        <p>Harga Termasuk :</p>
        <p className="pt-2 sms:text-sm">
          Gratis biaya pengiriman oven on the spot, Alat Makan(Sendok, Alas Cup,
          Saos), 1 porsi free sample
        </p>
      </div>
      <div className="grid grid-cols-4 justify-between px-20 gap-5 mb-32 md:flex-wrap md:gap-5 md:justify-center md:flex sms:px-7">
        <CardEx body="" title="Alat Makan" srcImg={peralatan1} />
        <CardEx body="" title="Free Sample Tester" srcImg={produk2} />
        <CardEx
          body=""
          title="Bebas Biaya Oven On The Spot"
          srcImg={courtFood2}
        />
        <CardEx
          body=""
          title="Pramusaji Stand Gubuk (S&K)"
          srcImg={courtFood}
        />
      </div>
      <div className="w-full h-[550px] relative bg-orangePrima md:h-[800px] ">
        <div className="absolute w-full h-full overflow-hidden">
          <svg
            className="absolute -top-px w-screen lg:w-full sms:w-[1000px] sms:-translate-x-10"
            viewBox="0 0 1280 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-[#fef3c7]"
              d="M1280 0H0C206.127 241.5 388.123 289.5 722.954 176.5C990.818 86.1 1205.93 155.5 1280 201.5V0Z"
            ></path>
          </svg>
        </div>
        <div className="z-10 relative px-20 sms:px-4">
          <h2 className="text-4xl font-semibold text-center text-orangePrima sms:text-3xl">
            Lapak Kami
          </h2>
          <div className="flex justify-center items-end mt-10 gap-x-20 md:flex-col md:gap-y-10 md:mt-20">
            <Slider
              {...settings2}
              arrows={false}
              className="w-1/2 h-full md:w-full flex"
            >
              <div className="flex justify-center items-center bg-white p-5 rounded-lg w-[80%]">
                <img
                  src={cijantung}
                  alt=""
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="flex items-center justify-center gap-x-2 text-orangePrima mt-2">
                  <IoPinSharp className="w-7 h-7" />
                  <p className="text-lg">Lapak Cijantung</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-white p-5 rounded-lg w-[80%]">
                <img
                  src={halim}
                  alt=""
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="flex items-center justify-center gap-x-2 text-orangePrima mt-2">
                  <IoPinSharp className="w-7 h-7" />
                  <p className="text-lg">Lapak Halim</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-white p-5 rounded-lg w-[80%]">
                <img
                  src={condet}
                  alt=""
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="flex items-center justify-center gap-x-2 text-orangePrima mt-2">
                  <IoPinSharp className="w-7 h-7" />
                  <p className="text-lg">Lapak Condet</p>
                </div>
              </div>
            </Slider>
            <div className="w-1/2  text-white md:w-full">
              <p className="capitalize text-3xl sms:text-2xl">
                Ditangani langsung oleh ahlinya
              </p>
              <div className="flex flex-col gap-y-3 py-2 mb-5">
                <div className="flex items-center gap-x-2 text-white">
                  <IoPinSharp className="w-7 h-7" />
                  <p className="text-lg">Jl Tengah Condet</p>
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <IoPinSharp className="w-7 h-7" />
                  <p className="text-lg">Car Free Day Cijantung</p>
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <IoPinSharp className="w-7 h-7" />
                  <p className="text-lg">Pasar Pagi, Minggu Ria, Halim</p>
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
                target="_blank"
                className="py-2 px-5 rounded-md bg-white text-orangePrima font-semibold"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
