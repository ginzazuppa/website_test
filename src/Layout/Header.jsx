import React, { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  return (
    <div className="px-20 flex items-center justify-between py-5 absolute w-screen z-50 text-white sms:px-3">
      <h1 className="text-xl font-semibold uppercase">Zuppasoup</h1>
      <div
        className={`flex gap-x-10 items-center md:absolute md:top-1/2 md:left-1/2  md:-translate-x-1/2 md:flex-col md:bg-white md:w-[80%] md:h-[300px] md:text-orangePrima md:gap-y-5 md:justify-center md:items-center rounded-md ${
          nav ? "md:translate-y-10" : "md:-translate-y-[150%]"
        } transition-all`}
      >
        <a href="#produk" rel="noreferrer">
          Produk
        </a>
        <a href="#pesan" rel="noreferrer">
          Cara Pemesanan
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
          target="_blank"
          className="py-2 px-5 bg-[#e58203] text-white rounded-md shadow-lg"
        >
          Hubungi Kami
        </a>
        <div
          className="hidden md:block absolute top-5 right-5"
          onClick={handleNavbar}
        >
          <RxCross2 className="w-7 h-7 " />
        </div>
      </div>
      <div className="hidden md:block" onClick={handleNavbar}>
        <RxHamburgerMenu className="w-7 h-7" />
      </div>
    </div>
  );
}
