import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambaryoga from "../../assets/image/gambaryoga.png";
import Gambaryoga1 from "../../assets/image/gambaryoga1.png";
import Gambaryoga2 from "../../assets/image/gambaryoga2.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";
import UploadFoto from "../../component/UploadFoto";

const ArtikelOlahragaYoga = () => {
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
            Hari 2 : Panduan Aktifitas Yoga
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Yoga dapat membantu mengurangi stres, karena aktivitas fisik ini
            bisa meningkatkan relaksasi. 
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambaryoga}
              alt="gambar yoga"
            />
          </div>
        </section>

        <div className="mb-24">
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse items-center">
            <div className="w-full lg:w-6/12 lg:pl-15 mb-6 lg:mb-0">
              <img src={Gambaryoga1} alt="Gambaryoga1" className="ml-auto" />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6 ">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A] text-center">
                Panduan Yoga
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Temukan tempat yang tenang dan bebas gangguan untuk berlatih
                  yoga. Pastikan ruangannya cukup luas dan nyaman.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Matras yoga memberikan kenyamanan dan mencegah cedera. Jika
                  tidak memiliki matras, gunakan permukaan yang tidak licin.
                </span>
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Lakukan pemanasan ringan untuk mempersiapkan tubuh. Beberapa
                  gerakan pemanasan seperti putaran leher, bahu, dan pergelangan
                  tangan dapat membantu.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img src={Gambaryoga2} alt="Gambaryoga2" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Pernapasan adalah kunci dalam yoga. Usahakan untuk bernapas
                  dalam dan teratur, melalui hidung. Fokus pada pernapasan dalam
                  setiap gerakan.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Jangan memaksakan diri dalam melakukan pose. Dengarkan tubuh
                  Anda dan lakukan modifikasi jika diperlukan. Yoga harus
                  menyenangkan dan tidak menyebabkan rasa sakit.
                </span>
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-semi-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Akhiri sesi yoga dengan relaksasi dalam pose Corpse Pose
                  (Savasana). Berbaringlah terlentang dengan tangan di samping
                  tubuh, tutup mata, dan fokus pada pernapasan. Pertahankan pose
                  ini selama 5-10 menit untuk menenangkan tubuh dan pikiran.
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

export default ArtikelOlahragaYoga;
