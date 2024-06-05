import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarrenang1 from "../../assets/image/renang1.png";
import Gambarrenang2 from "../../assets/image/renang2.png";
import Gambarrenang3 from "../../assets/image/renang3.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";
import UploadFoto from "../../component/UploadFoto";

const ArtikelOlahragaRenang = () => {
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
            Hari 4 : Panduan Renang
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Renang merupakan salah satu olahraga yang memiliki banyak manfaat
            dan keuntungan berenang bagi kesehatan tubuh kamu, terutama bagi
            sistem pernapasan.
          </p>
          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambarrenang1}
              alt="gambar renang 1"
            />
          </div>
        </section>
        <div className="mb-24">
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse items-center">
            <div className="w-full lg:w-6/12 lg:pl-15 mb-6 lg:mb-0">
              <img
                src={Gambarrenang2}
                alt="Gambarrenang2"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6 ">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A] text-center">
                Panduan Renang
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Lakukan pemanasan sebelum masuk ke air. Pemanasan bisa berupa
                  peregangan ringan atau gerakan dinamis untuk mengurangi risiko
                  cedera dan mempersiapkan otot.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tentukan gaya renang yang ingin Anda lakukan, seperti gaya
                  bebas, gaya punggung, gaya dada, atau gaya kupu-kupu. Pilih
                  gaya yang sesuai dengan kemampuan dan tujuan Anda.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Latih teknik pernapasan yang benar. Untuk gaya bebas,
                  misalnya, bernapaslah secara bergantian ke kanan dan kiri
                  setiap beberapa kayuhan. Tarik napas melalui mulut di atas
                  permukaan air dan buang napas di dalam air.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img src={Gambarrenang3} alt="Gambarrenang3" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Jaga posisi tubuh yang streamline (sejajar dan lurus) untuk
                  mengurangi hambatan air. Posisi tubuh yang baik membantu
                  meningkatkan efisiensi dan kecepatan renang.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Perhatikan gerakan tangan dan kaki sesuai dengan gaya renang
                  yang kamu pilih. Untuk gaya bebas, lakukan gerakan tangan yang
                  memutar dengan kuat dan gerakan kaki yang bergantian naik
                  turun.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Jika Anda pemula, gunakan alat bantu seperti papan renang atau
                  pull buoy untuk membantu meningkatkan teknik dan kenyamanan di
                  air.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Setelah selesai renang, lakukan pendinginan dengan berenang
                  perlahan atau melakukan peregangan ringan di air. Ini membantu
                  tubuh pulih dan mengurangi risiko kram atau cedera.
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

export default ArtikelOlahragaRenang;
