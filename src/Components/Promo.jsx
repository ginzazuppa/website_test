import React, { useEffect, useState } from "react";

export default function Promo() {
  const [deti, setDeti] = useState(10);
  const [menit, setMenit] = useState(40);
  const [jam, setJam] = useState(10);
  const [hari, setHari] = useState(5);

  useEffect(() => {
    deti > 0 && setTimeout(() => setDeti(deti - 1), 1000);
    if (deti == 0) {
      setDeti(60);
      setMenit((old) => old - 1);
    }
    if (menit == 0) {
      setMenit(59);
      setJam((old) => old - 1);
    }
    if (jam == 0) {
      setJam(23);
      setHari((old) => old - 1);
    }
  }, [deti, menit, jam, hari]);

  return (
    <div className="px-20 flex flex-col bg-[#3c8fff] text-white py-10 md:px-10 sms:px-2">
      <div className="text-2xl font-semibold flex flex-col items-center mb-10">
        <p>Promo</p>
        <p>Voucher 100.000</p>
        <p>Promo Berakhir Pada :</p>
      </div>
      <div className="flex gap-x-3 justify-center items-start mb-5">
        <div className=" flex flex-col gap-y-3">
          <div className="py-3 px-5 bg-white text-black rounded-md">
            <p className="text-xl sms:text-sm">{hari}</p>
          </div>
          <p className="text-center sms:text-sm">Hari</p>
        </div>
        <p className="text-xl font-semibold mt-3">:</p>
        <div className=" flex flex-col gap-y-3">
          <div className="py-3 px-5 bg-white text-black rounded-md">
            <p className="text-xl sms:text-sm">{jam}</p>
          </div>
          <p className="text-center sms:text-sm">Jam</p>
        </div>
        <p className="text-xl font-semibold mt-3">:</p>
        <div className=" flex flex-col gap-y-3">
          <div className="py-3 px-5 bg-white text-black rounded-md">
            <p className="text-xl sms:text-sm">{menit}</p>
          </div>
          <p className="text-center sms:text-sm">Menit</p>
        </div>
        <p className="text-xl font-semibold  mt-3">:</p>
        <div className=" flex flex-col gap-y-3">
          <div className="py-3 px-5 bg-white text-black rounded-md">
            <p className="text-xl sms:text-sm">{deti}</p>
          </div>
          <p className="text-center sms:text-sm">Detik</p>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20promo%20dong%20min"
        className="py-2 px-10 bg-white text-blue-500 rounded-full w-fit mx-auto text-lg"
      >
        Hubungi Kami Segera
      </a>
    </div>
  );
}
