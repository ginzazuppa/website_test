import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import Slider from "react-slick";
import testi1 from "/src/images/testi/testi-1.webp";
import testi3 from "/src/images/testi/testi-3.webp";
import testi4 from "/src/images/testi/testi-4.webp";
import testi5 from "/src/images/testi/testi-5.webp";
import testi6 from "/src/images/testi/testi-6.webp";
import testi7 from "/src/images/testi/testi-7.webp";
import testi8 from "/src/images/testi/testi-8.webp";
import testi9 from "/src/images/testi/testi-9.webp";
import testi10 from "/src/images/testi/testi-10.webp";
import testi11 from "/src/images/testi/testi-11.webp";

export default function Testi() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dost: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div
      className="w-full overflow-x-hidden px-32 mt-20 md:px-10 sms:px-5"
      id="testi"
    >
      <div>
        <h2 className="text-4xl text-orangePrima font-semibold text-center sms:text-3xl">
          Apa Kata Mereka?
        </h2>
      </div>
      <Slider
        {...settings}
        className="mt-10 md:h-[500px] md:overflow-hidden flex "
      >
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5  bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi1}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi3}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi4}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi5}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi6}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi7}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi8}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi9}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi10}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi11}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
        <div className="h-[600px] w-[20%] md:h-[400px]">
          <div className="w-full h-full px-5 bg-white shadow-xl rounded-xl py-10">
            <img
              src={testi6}
              className="object-cover w-full h-full rounded-2xl"
              alt="testi zuppasoup"
            />
          </div>
        </div>
      </Slider>
      <div className="my-10">
        <div className="pb-5">
          <h2 className="capitalize text-2xl font-semibold">
            Apa yang sering ditanyakan?
          </h2>
        </div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base">
                <p className="w-[90%]">
                  Bagaimana prosedur pemesanan ginza zuppa soup?
                </p>

                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      Cara atau prosedur pemesanan kami cukup sederhana, yakni:
                    </p>
                    <p>
                      1. Pertama, Anda perlu memilih paket anggaran atau biaya
                      sesuai dengan tamu undangan acara atau event anda.
                    </p>
                    <p>
                      2. Kami akan mengirimkan invoice atau tagihan pembayaran
                      uang jadi/dp sesuai jumlah pesanan.
                    </p>
                    <p>
                      3. Transfer sesuai dengan nominal tagihan yang ada di
                      invoice dan mengirim bukti transfernya.
                    </p>
                    <p>
                      4. Pembayaran kami terima minimal H-3 acara berlangsung.
                    </p>
                    <p>
                      5. Mengirim foto lokasi dan link google maps acara anda.
                    </p>
                    <p>
                      6. Mengirim keterangan atau deskripsi rundown acara anda.
                    </p>
                    <p>
                      7. Kami akan menyesuaikan rundown acara dengan waktu
                      kedatangan serta persiapan memanggang zuppa soup.
                    </p>
                    <p>
                      8. Setelah acara selesai, kami akan serah terima dengan
                      panitia pelaksana bahwasanya tugas kami sudah selesai.
                    </p>
                    <p>
                      9. Kami akan mengirimkan invoice atau tagihan pembayaran
                      uang pelunasan sesuai jumlah pesanan.
                    </p>
                    <p>
                      10. Transfer sesuai dengan nominal tagihan yang ada di
                      invoice dan mengirim bukti transfernya.
                    </p>
                    <p>
                      11. Pembayaran kami terima maksimal H+3 setelah acara
                      berlangsung.
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">Kenapa harus ginza zuppa soup?</p>

                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      Bermula dari 1 lapak pada tahun 2017, kami terus
                      mengembangkan bisnis kami dan berkolaborasi untuk terus
                      menjadi suksesor event acara. Hingga saat ini sudah ada 3
                      lapak di Jakarta Timur dan terlaksana lebih dari 100++
                      event yang kami adakan di Jabodetabek
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">Berapa biaya pemesanan zuppa soup?</p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>Paket tersedia mulai dari:</p>
                    <p>1. 1.5 juta/paket untuk 100 porsi atau 15.000/porsi</p>
                    <p>2. 2.9 juta/paket untuk 200 porsi atau 14.500/porsi</p>
                    <p>3. 4.2 juta/paket untuk 300 porsi atau 14.000/porsi</p>
                    <p>
                      Silahkan pelajari paket zuppasoup atau langsung{" "}
                      <a
                        href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
                        className="text-orangePrima"
                      >
                        konsultasikan ke kami.
                      </a>{" "}
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">
                  Apa saja keuntungan menggunakan vendor ginza zuppa soup?
                </p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      • Ada banyak keuntungan dan manfaat besar yang menjadi
                      alasan mengapa para event organizer atau wedding organizer
                      memilih kami menjadi vendor dalam event atau pernikahan,
                      diantaranya:
                    </p>
                    <p>
                      • Sangat efektif: Anda hanya perlu membuat pesanan sesuai
                      perhitungan undangan tamu dan sisanya serahkan kekami
                      dalam mengatur jumlah pesanan hingga akhir acara.
                    </p>
                    <p>
                      • Hasil Memuaskan: Fakta yang tidak dapat disangkal bahwa
                      zuppa soup merupakan menu favorit dalam sebuah acara atau
                      pernikahan, maka asumsi kami dengan hadirnya menu zuppa
                      akan menambah nilai satisfied keluarga pengantin kepada
                      wedding organizer.
                    </p>
                    <p>
                      • Mudah disesuaikan: Anda dapat membuat permintaan khusus,
                      seperti porsi khusus untuk keluarga pengantin dengan
                      packing take-away atau dalam penyajian zuppa dibagi
                      menjadi 2 sesi.
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">
                  Layanan apa saja yang akan kami dapatkan?
                </p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      1. Alat Makan, Dalam penyajian zuppa soup package, kami
                      menggunakan aluminium foil sebagai mangkok soup, serta
                      anda akan mendapatkan sendok plastik dan piring kue kertas
                      sebagai alas aluminium foil. Jika anda tertarik untuk
                      menggunakan mangkok kuping dan piring silahkan hubungi
                      kami untuk info lebih lanjut.
                    </p>
                    <p>
                      2. Free Sample Tester, Sample dapat diambil setelah
                      pembayaran maupun sebelum pembayaran dp, kami optimis
                      bahwasanya rasa soup dan renyah pastry kami tidak akan
                      mengecewakan pembeli.
                    </p>
                    <p>
                      3. Bebas Biaya On The Spot, Biaya yang kami tawarkan sudah
                      terima bersih tanpa perlu memikirkan sewa oven dan
                      kapasitas listrik, karena kami menggunakan oven gas agar
                      hasil lebih maksimal, Biaya tersebut juga sudah termasuk
                      ongkos perjalanan seperti, biaya bensin, biaya e-toll, dan
                      biaya parkir.
                    </p>
                    <p>
                      4. Pramusaji Stand Gubuk, Layanan ini kami hadirkan atas
                      saran dari EO dan WO yang sudah berkerjasama dengan kami
                      sebelumnya.
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">
                  Apa saja yang perlu client persiapkan pada saat acara
                  berlangsung?
                </p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      Area tempat oven disarankan tidak didalam ruangan, maka
                      kami membutuhkan 1 meja display untuk tempat zuppa didalam
                      ruangan dan 1 meja diarea luar ruangan untuk tempat
                      transit keluar zuppa dari oven
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">
                  Dimana lokasi lapak yang dapat kami kunjungi?
                </p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      Untuk warga Jakarta Timur, kami memiliki 3 lapak yang
                      aktif beroperasi, diantaranya:
                    </p>
                    <p>
                      1. Lapak Condet Lapak awal mula kami memperkenalkan zuppa
                      soup, berlokasi di Jl Tengah Raya Tengah RT 9/RW3.
                      Ancer-ancer 5km dari universitas indraprasta, dekat dengan
                      Mie Yamien 88 depan Gg. Waru
                    </p>
                    <p>
                      2. Lapak Halim Lapak Halim hanya tersedia pada hari Minggu
                      saja, berlokasi pada Pasar Pagi, Minggu Ria, Halim.
                      Ancer-ancer 10km dari Tamini Square, dan pintu masuk Pasar
                      Pagi persis disamping RS. Asrama Haji
                    </p>
                    <p>
                      3. Lapak Cijantung Lapak Cijantug hanya tersedia pada hari
                      Minggu saja, berlokasi pada Car Free Day, Ancer-ancer
                      gapura Kopassus Graha Cijantung deretan lapak arah Depok.
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">
                  Bagaimana testimoni customer pembeli ginza zuppa soup?
                </p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      Anda dapat melihat screenshot percakapan admin dengan
                      client pada{" "}
                      <a href="#testi" className="text-orangePrima">
                        halaman ini
                      </a>
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">
                  Kapan voucher cashback 100.000 rupiah berakhir?
                </p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      Periode voucher akan berakhir jika kuota sudah memenuhi,
                      kami sarankan untuk segera claim voucher dan booked
                      tanggal pemesanan secepatnya
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">
                  Bagaimana cara booked tanggal pemesanan?
                </p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      Sudah kami siapkan form box order untuk anda pilih,
                      berikan catatan untuk info lebih lanjut.
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2 px-5 bg-orangePrima w-full text-left rounded-t-2xl text-white z-10 flex justify-between items-center relative text-lg sms:text-base mt-2">
                <p className="w-[90%]">
                  Apakah menerima pesanan dengan quantity dibawah 100porsi?
                </p>
                <div className="h-6 w-6 items-center flex justify-center rounded-full text-orangePrima bg-white text-xl ">
                  {open ? "-" : "+"}
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className=" bg-slate-100 p-5 text-black">
                  <div className="flex flex-col gap-2">
                    <p>
                      Kami menerima pesanan dibawah 100porsi, info lebih lanjut
                      hubungi whatsapp kami di 0895341237733{" "}
                      <a
                        href="https://api.whatsapp.com/send?phone=62895341237733&"
                        className="text-orangePrima"
                      >
                        Tanya Kami
                      </a>
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <div className="flex items-center justify-center flex-col max-w-[500px] text-center my-10 gap-y-5 mx-auto">
          <p className="text-lg sms:text-base">
            Tidak menemukan jawaban atas pertayaan anda? konsultasikan ke kami
            sekarang juga
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=62895341237733&text=saya%20mau%20tanya%20dong%20min"
            target="_blank"
            className="py-2 px-8 bg-orangePrima text-white rounded-full shadow-lg"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
