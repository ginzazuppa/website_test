import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import waLogo from "/src/images/LOGO-WA-ZUPPA.webp";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
        rel="noreferrer"
        target="_blank"
        className="fixed z-50 right-5 bottom-5 sms:right-2"
      >
        <img
          src={waLogo}
          className="w-40 h-40 object-contain sms:w-32 sms:h-32"
          alt="tanya lewat whatapps kami"
        />
      </a>
    </div>
  );
}
