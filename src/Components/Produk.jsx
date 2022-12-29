import React from "react";
import produk1 from "/src/images/produk-kami/produk-kami-1.webp";
import produk2 from "/src/images/produk-kami/produk-kami-2.webp";
import produk3 from "/src/images/produk-kami/produk-kami-3.webp";
import produk4 from "/src/images/produk-kami/produk-kami-4.webp";
import produk5 from "/src/images/produk-kami/produk-kami-5.webp";
import produk6 from "/src/images/produk-kami/produk-kami-6.webp";

export default function Produk() {
  return (
    <div className="mt-20 " id="produk">
      <h2 className="text-4xl font-semibold text-center mb-5 text-orangePrima sms:text-2xl">
        Produk Kami
      </h2>
      <div className="grid grid-cols-3 grid-rows-2 h-[500px] md:grid-rows-3 md:grid-cols-2 md:h-[800px] sms:grid-cols-1 sms:grid-rows-5 ">
        <div className="row-span-2 grid-cols-1 md:row-span-1 md:col-span-2 sms:col-span-1">
          <img
            src={produk1}
            className="object-cover  h-full w-full "
            alt="makanan zuppasoup"
          />
        </div>
        <div>
          <img
            src={produk2}
            className="object-cover h-full w-full"
            alt="makanan zuppasoup"
          />
        </div>
        <div>
          <img
            src={produk3}
            className="object-cover h-full w-full"
            alt="makanan zuppasoup"
          />
        </div>
        <div>
          <img
            src={produk6}
            className="object-cover h-full w-full"
            alt="makanan zuppasoup"
          />
        </div>
        <div>
          <img
            src={produk5}
            className="object-cover h-full w-full"
            alt="makanan zuppasoup"
          />
        </div>
      </div>
    </div>
  );
}
