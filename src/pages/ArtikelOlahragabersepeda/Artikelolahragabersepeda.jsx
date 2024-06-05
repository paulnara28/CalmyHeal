import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarsepeda from "../../assets/image/gambarsepeda.png";
import Gambarsepeda2 from "../../assets/image/gambarsepeda2.png";
import Gambarsepeda4 from "../../assets/image/gambarsepeda4.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";
import UploadFoto from "../../component/UploadFoto";

const ArtikelOlahragaBersepeda = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-10 mx-auto md:px-6 font-Montserrat ">
        <Link to="/ChallengeOlahraga">
          <button
            type="button"
            className="flex items-center py-3 px-8 text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form"
          >
            <img src={iconleft} alt="IconLeft" className="mr-2" />
            Kembali
          </button>
        </Link>

        <section className="mb-32">
          <p className="mb-6 text-center text-3xl font-bold text-[#04364A]">
            Hari 5 : Panduan Aktifitas Bersepeda
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Bersepeda adalah aktivitas fisik yang baik untuk tubuh. Rutin
            bersepeda dapat menghindarkan seseorang dari perasaan stres,
            tertekan bahkan depresi.
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambarsepeda}
              alt="gambar sepeda"
            />
          </div>
        </section>

        <div className="mb-24">
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse items-center">
            <div className="w-full lg:w-6/12 lg:pl-15 mb-6 lg:mb-0">
              <img
                src={Gambarsepeda2}
                alt="Gambar sepeda 2"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6 ">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A] text-center">
                Panduan Bersepeda
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Pilih sepeda yang sesuai dengan ukuran tubuh dan jenis
                  bersepeda yang akan Anda lakukan (jalan raya, gunung, atau
                  kota). Sepeda yang tepat meningkatkan kenyamanan dan
                  efisiensi.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Kenakan helm setiap kali bersepeda untuk melindungi kepala.
                  Selain itu, gunakan perlengkapan lain seperti sarung tangan,
                  pelindung lutut, dan pelindung siku jika diperlukan.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Pastikan semua komponen sepeda dalam kondisi baik. Periksa
                  tekanan ban, rem, rantai, dan lampu (jika bersepeda di malam
                  hari). Sepeda yang terawat baik mengurangi risiko kecelakaan.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Sesuaikan tinggi sadel dan setang agar sesuai dengan
                  kenyamanan Anda. Posisi duduk yang benar membantu mengurangi
                  ketegangan pada punggung dan lutut.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img className="" src={Gambarsepeda4} alt="Gambar sepeda 4" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Kenakan pakaian yang nyaman dan sesuai dengan cuaca. Jika
                  bersepeda jarak jauh, bawa air minum, makanan ringan, dan alat
                  perbaikan dasar.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Ikuti semua aturan lalu lintas saat bersepeda di jalan raya.
                  Gunakan sinyal tangan untuk memberi tahu pengendara lain
                  tentang arah yang akan kamu ambil. Bersepeda di jalur yang
                  ditentukan jika tersedia.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Mulailah dengan kecepatan yang nyaman dan tingkatkan secara
                  bertahap. Pertahankan ritme yang konsisten untuk menghindari
                  kelelahan dini dan meningkatkan daya tahan.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-12 font-Montserrat">
          <div className="mx-auto w-full max-w-[1080px]">
            <h2 className="mb-5 text-center text-[#04364A] text-3xl font-bold mt-15">
              Yeay Aktifitas Jalan Kaki Telah Selesai !!
            </h2>
            <UploadFoto />
            <form action="" method="POST">
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-bold text-[#07074D]"
                >
                  Catat hasil pengalaman challenge mu hari ini!
                </label>
                <textarea
                  rows="10"
                  columns="10"
                  name="message"
                  id="message"
                  placeholder=""
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[#4FA7A9] py-3 px-6 text-base font-medium text-[#F9FAF9] outline-none focus:shadow-md"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="hover:shadow-form rounded-xl bg-[#176B87] py-3 px-8 text-base font-semibold text-[#F9FAF9]"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtikelOlahragaBersepeda;
