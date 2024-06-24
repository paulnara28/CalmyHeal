import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasiGoodMood";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi12.png";

export default function MeditasiMood3() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Suasana Hati"
        judul="Meningkatkan Mood"
        keterangan="Meditasi untuk tingkatkan mood / suasana hati"
        durasi="12 : 22"
        kategori="Meditasi"
      />
      <Footer />
    </div>
  );
}
