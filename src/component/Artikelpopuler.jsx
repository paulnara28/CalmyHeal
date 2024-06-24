import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import populer1 from "../assets/image/populer1.png";
import populer2 from "../assets/image/populer2.png";
import populer3 from "../assets/image/populer3.png";

const populer = [
  {
    id: 1,
    judul: "Manajemen Stres",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Dalam era digital yang kian berkembang, teknologi sangat berdampak terhadap setiap aspek kehidupan.",
    gambar: populer1,
    link: "../artikeledu", 
  },
  {
    id: 2,
    judul: "Manajemen Stres Pada Mahasiswa",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Stres merupakan suatu keadaan di mana sumber daya yang miliki oleh seseorang tidak dapat mendukung keinginan yang ingin dicapai",
    gambar: populer2,
    link: "../artikeledu1", 
  },
  {
    id: 3,
    judul: "Pengaruh Sosial Media Terhadap Tingkat Stres",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Media sosial sangat sering diakses setiap detiknya bahkan masyarakat khususnya remaja tidak bisa lepas dari media sosial.",
    gambar: populer3,
    link: "../artikeledu2", 
  },
];

const Artikelpopuler = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPopuler = populer.filter((data) =>
    data.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
      {/* Search bar */}
      <div className="flex justify-between lg:justify-center gap-2">
        <div className="">
          <input
            type="search"
            placeholder="Cari Artikel berdasarkan judul"
            className="w-[200px] lg:w-[530px] rounded-lg text-xs lg:text-xl py-2 pl-3"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="bg-secondary w-24 lg:w-36 rounded-lg flex gap-3 px-3">
          <AiOutlineSearch className="fill-fourt my-auto size-6" />
          <button className="text-fourt text-xs lg:text-xl">Cari</button>
        </div>
      </div>

      {/* Artikel populer */}
      <div className="py-5">
        <h1 className="text-base font-medium my-2 lg:text-3xl">
          Artikel Populer
        </h1>
        <div>
          <div className="flex flex-col gap-5 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4">
            {filteredPopuler.map((data, index) => (
              <a
                key={data.id}
                href={data.link}
                className={`rounded-lg bg-fifth cursor-pointer ${
                  index === 0 ? "lg:row-span-2 lg:flex-col" : "flex-row"
                } flex flex-row lg:flex lg:flex-row h-[125px] lg:h-auto`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={data.gambar}
                    className={`object-cover ${
                      index === 0
                        ? "w-[150px] h-[125px] lg:w-full lg:h-[348px] rounded-l-lg lg:rounded-t-lg lg:rounded-b-none"
                        : "w-[150px] h-[125px] lg:w-[200px] lg:h-full rounded-l-lg"
                    }`}
                    alt={data.judul}
                  />
                </div>
                <div className="flex flex-col justify-center p-2 lg:justify-start lg:p-4">
                  <h1 className="text-lg lg:text-xl font-semibold line-clamp-3 order-1 lg:order-2">
                    {data.judul}
                  </h1>
                  <p className="text-xs lg:text-sm lg:font-semibold order-2 lg:order-1">
                    {data.tanggal}
                  </p>
                  <p className="hidden lg:block text-sm lg:text-base mt-2 order-3">
                    {data.deskripsi}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikelpopuler;
