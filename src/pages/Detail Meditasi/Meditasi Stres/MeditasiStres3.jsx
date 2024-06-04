import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi6.png";

export default function MeditasiStres3() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Stres"
        judul="Bernafas Relaksasi"
        keterangan="Latihan pernafasan untuk Anxiety, Panic Attack dan Relaksasi."
        durasi="09:39"
        kategori="Meditasi"
      />
      <Footer />
    </div>
  );
}
