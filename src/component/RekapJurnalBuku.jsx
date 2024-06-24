import React from "react";
import Edit from "../assets/image/edit.png";
import { Link } from "react-router-dom";
import iconleft1 from "../assets/image/kiri.png";

const data = [
  {
    id: 1,
    tanggal: "8 Mei 2024",
    deskripsi:
      "Hari ini saya membaca buku “Filosofi teras” oleh Henry Manampiring sampai chap...",
  },
  {
    id: 2,
    tanggal: "9 Mei 2024",
    deskripsi:
      "Hari ini saya membaca buku “Filosofi teras” oleh Henry Manampiring sampai chap...",
  },
  {
    id: 3,
    tanggal: "10 Mei 2024",
    deskripsi:
      "Hari ini saya membaca buku “Filosofi teras” oleh Henry Manampiring sampai chap...",
  },
  {
    id: 4,
    tanggal: "11 Mei 2024",
    deskripsi:
      "Hari ini saya membaca buku “Filosofi teras” oleh Henry Manampiring sampai chap...",
  },
];

function RekapJurnal() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className=" text-primary p-5 lg:px-20 lg:py-12">
        <Link to="/ChallengeBacaBuku">
          <button
            type="button"
            className="flex items-center text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form "
          >
            <img src={iconleft1} alt="IconLeft" className="mr-2" />
            Kembali
          </button>
        </Link>

        <div className="container md:mx-auto px-10 p-20 mb-5 font-Montserrat">
          <h1 className="text-2xl font-bold mb-4 mt-4 ">
            Rekap Jurnal Membaca Buku
          </h1>
          <div className="table-fixed p-8 shadow-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white ">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">No</th>
                    <th className="py-2 px-4 border-b">Tanggal</th>
                    <th className="py-2 px-4 border-b"></th>
                    <th className="py-2 px-4 border-b">
                      Hasil catatan kemajuan harian
                    </th>
                    <th className="py-2 px-4 border-b">Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((entry) => (
                    <tr key={entry.id}>
                      <td className="py-2 px-4 border-b text-center">
                        {entry.id}
                      </td>
                      <td className="py-2 px-4 border-b">{entry.tanggal}</td>
                      <td className="py-2 px-4 border-b">
                        {/* <img src={entry.foto} alt={`Foto harian ${entry.id}`} className="w-16 h-16 object-cover rounded-full" /> */}
                      </td>

                      <td className="py-2 px-4 border-b">{entry.deskripsi}</td>
                      <td className="py-2 px-4 border-b text-center">
                        <Link to="/EditJurnalBacaBuku">
                          <button className="text-blue-500 hover:text-blue-700">
                            <img src={Edit} alt="edit" />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-4">
              <span>Showing 1 to 4 of 4 entries</span>
              <div>
                <button className="px-4 py-2 border rounded-l bg-[#C5EBE9] text-[#176B87] ">
                  Previous
                </button>
                <button className="px-4 py-2 border rounded-none bg-[#04364A] text-[#F9FAF9]">
                  1
                </button>
                <button className="px-4 py-2 border rounded-r bg-[#C5EBE9] text-[#176B87] ">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default RekapJurnal;
