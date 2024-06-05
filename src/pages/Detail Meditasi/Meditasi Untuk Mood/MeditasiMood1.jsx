import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi10.png";

export default function MeditasiMood1() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Suasana Hati"
        judul="Energi Positif"
        keterangan="Memulai pagi hari dengan energi dan perspektif positif"
        durasi="13:28"
        kategori="Cerita Suasana Hati"
      />
      <Footer />
    </div>
  );
}
