import moment from "moment/moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormBox() {
  const [startDate, setStartDate] = useState(null);
  const [catatan, setCatatan] = useState("");
  const [nama, setNama] = useState("");
  const [noTelp, setNoTelp] = useState("");

  const handleSubmit = () => {
    const tanggalPemesanan = moment(startDate).format("MMMM, DD YYYY");
    window.open(
      `https://wa.me/62895341237733?text=Pesanan%20Zuppa%20Soup%20Ginza%0AKonfirmasi%20untuk%20booked%20pada%20tanggal%0A%0A${tanggalPemesanan}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20%0ACatatan%0A${catatan}%0A%0A%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%0A%0ADATA%20PEMESAN%20%0ANama%20%3A${nama}%2C%0ANo%20Hp%20%3A%20${noTelp}`
    );
  };

  return (
    <div
      className="px-20 my-10 flex gap-10 md:flex-col justify-between sms:px-8"
      id="pesan"
    >
      <div className="w-[40%] overflow-hidden md:w-full flex items-center justify-center">
        <iframe
          width="520"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=PV45+PRH,%20Jl.%20Raya%20Tengah,%20RT.9/RW.3,%20Gedong,%20Kec.%20Ps.%20Rebo,%20Kota%20Jakarta%20Timur,%20Daerah%20Khusus%20Ibukota%20Jakarta%2013520%20+(ZUPPASOUP)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="w-[55%] md:w-full">
        <div className="text-center">
          <h2 className="text-3xl text-orangePrima font-semibold md:mb-4">
            Tunggu Apalagi?
          </h2>
          <p className="sms:text-sm">
            Lakukan pemesanan, sesuaikan kebutuhan dan tanyakan hal menarik.
          </p>
        </div>
        <div className="py-5 flex flex-col gap-y-5">
          <div className="flex gap-5 w-full md:flex-col">
            <div className="flex flex-col w-full">
              <label>Nama</label>
              <input
                type="text"
                placeholder="Nama"
                className="p-2 border-2 w-full rounded-[4px]"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label>No Handphone/Whatapps</label>
              <input
                min={0}
                type="number"
                placeholder="No Whatapps (Ex:081111)"
                className="p-2 border-2 w-full rounded-[4px]"
                value={noTelp}
                onChange={(e) => setNoTelp(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Rencana Tanggal Pemesanan</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="p-2 w-full border-2  rounded-[4px]"
              minDate={new Date()}
              showDisabledMonthNavigation
              placeholderText="Tentukan tanggal"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Catatan</label>
            <input
              type="text"
              placeholder="Catatan"
              className="p-2 border-2 w-full rounded-[4px]"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-orangePrima text-white rounded-md"
        >
          Kirim dan Hubungi Sekarang
        </button>
      </div>
    </div>
  );
}
