import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi12.png";

export default function MeditasiMood3() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Suasana Hati"
        judul="Pengantar Tidur"
        keterangan="Meditasi Pengantar Tidur"
        durasi="35:39"
        kategori="Cerita Tidur"
      />
      <Footer />
    </div>
  );
}
