import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarjalankaki1 from "../../assets/image/gambarjalankaki1.png";
import Gambarjalankaki3 from "../../assets/image/gambarjalankaki3.png";
import Gambarjalankaki4 from "../../assets/image/gambarjalankaki4.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";
import UploadFoto from "../../component/UploadFoto";

const ArtikelOlahragaJalanKaki = () => {
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
            Hari 1 : Panduan Aktifitas Jalan Kaki
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Jalan kaki adalah salah satu aktivitas fisik yang mudah dan murah
            yang dapat membantu Anda mengatasi stres.
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambarjalankaki1}
              alt="GambarJalanKaki1"
            />
          </div>
        </section>

        <div className="flex flex-wrap lg:flex-row-reverse mt-24 ">
          <div className="w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0 ">
            <img
              src={Gambarjalankaki3}
              alt="GambarJalanKaki3"
              className="ml-auto"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:pr-6 ">
            <h3 className="text-2xl font-bold mb-5 text-[#04364A] text-center">
              Panduan Jalan Kaki
            </h3>
            <p className="text-[#04364A] mb-5">
              <span className="font-semi-bold flex items-center mr-12">
                <img src={iconring} alt="IconRing" className="mr-2" />
                Pilih area yang aman dan nyaman.
              </span>
            </p>
            <p className="text-[#04364A] mb-5">
              <span className="font-semi-bold flex items-center mr-12">
                <img src={iconring} alt="IconRing" className="mr-2" />
                Gunakan pakaian yang nyaman dan sesuai dengan cuaca.
              </span>
            </p>
            <p className="text-[#04364A] mb-5">
              <span className="font-semi-bold flex items-center mr-12">
                <img src={iconring} alt="IconRing" className="mr-2" />
                Lakukan pemanasan ringan selama 5 - 10 menit
              </span>
            </p>
            <p className="text-[#04364A] mb-5">
              <span className="font-semi-bold flex items-center mr-12">
                <img src={iconring} alt="IconRing" className="mr-2" />
                Mulailah berjalan dengan kecepatan santai selama beberapa menit
                untuk membiarkan tubuh menyesuaikan diri.
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mt-24">
          <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <img className="" src={Gambarjalankaki4} alt="GambarJalanKaki4" />
          </div>
          <div className="w-full lg:w-6/12 lg:pl-6">
            <p className="text-[#04364A] mt-5">
              <span className="font-semi-bold flex items-center mr-12">
                <img src={iconring} alt="IconRing" className="mr-2" />
                Tarik napas dalam-dalam melalui hidung dan hembuskan melalui
                mulut.
              </span>
            </p>
            <p className="text-[#04364A] mt-5">
              <span className="font-semi-bold flex items-center mr-12">
                <img src={iconring} alt="IconRing" className="mr-2" />
                Setelah selesai berjalan, lakukan pendinginan dengan berjalan
                perlahan selama 5-10 menit.
              </span>
            </p>
            <p className="text-[#04364A] mt-5">
              <span className="font-semi-bold flex items-center mr-12">
                <img src={iconring} alt="IconRing" className="mr-2" />
                Minumlah air dan Istirahat sejenak kemudian, nikmati manfaat
                dari aktivitas jalan kaki Anda.
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-12 font-Montserrat">
          <div className="mx-auto w-full max-w-[1080px]">
            <h2 className="mb-5 text-center text-[#04364A] text-3xl font-bold mt-20">
              Yeay Aktifitas Jalan Kaki Telah Selesai !!
            </h2>
            <UploadFoto />
            <form action="" method="POST">
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-bold text-[#07074D] mt-5"
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

export default ArtikelOlahragaJalanKaki;
