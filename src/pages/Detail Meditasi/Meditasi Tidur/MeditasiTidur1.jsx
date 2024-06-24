import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasiPengantarTidur";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi7.png";

export default function MeditasiTidur1() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Tidur"
        judul="Pengantar Tidur"
        keterangan="Meditasi Pengantar Tidur"
        durasi="35:39"
        kategori="Cerita Tidur"
      />
      <Footer />
    </div>
  );
}
