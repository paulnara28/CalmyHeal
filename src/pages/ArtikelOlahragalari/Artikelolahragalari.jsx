import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarlari1 from "../../assets/image/lari1.png";
import Gambarlari2 from "../../assets/image/lari2.png";
import Gambarlari3 from "../../assets/image/lari3.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";
import UploadFoto from "../../component/UploadFoto";

const ArtikelOlahragaLari = () => {
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
            Hari 3 : Panduan Aktifitas Lari
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Lari adalah salah satu aktivitas fisik yang mudah dan murah yang
            dapat membantu Anda mengatasi stres.
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambarlari1}
              alt="gambar sepeda"
            />
          </div>
        </section>

        <div className="mb-24">
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse items-center">
            <div className="w-full lg:w-6/12 lg:pl-15 mb-6 lg:mb-0">
              <img
                src={Gambarlari2}
                alt="Gambar sepeda 2"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6 ">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A] text-center">
                Panduan Lari
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Lakukan pemanasan selama 5 - 10 menit sebelum mulai lari.
                  Pemanasan bisa berupa jalan cepat, gerakan dinamis, atau
                  peregangan ringan untuk mengurangi risiko cedera.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Mulailah dengan kecepatan yang nyaman. Jangan terlalu cepat di
                  awal untuk menghindari kelelahan dini. Biarkan tubuh Anda
                  beradaptasi dengan ritme lari.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Jaga postur tubuh yang baik. Tegakkan punggung, rilekskan
                  bahu, dan pandangan ke depan. Hindari membungkuk atau melihat
                  ke bawah.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img className="" src={Gambarlari3} alt="Gambar sepeda 4" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Minumlah air secukupnya sebelum, selama, dan setelah lari.
                  Jangan tunggu sampai merasa haus karena itu bisa menjadi tanda
                  awal dehidrasi.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Berikan tubuh Anda waktu untuk pulih dengan istirahat yang
                  cukup. Pastikan tidur yang berkualitas dan hindari latihan
                  berlebihan yang bisa menyebabkan cedera.
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

export default ArtikelOlahragaLari;
