import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasiMenenangkanPikiran";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi4.png";

export default function MeditasiStres1() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Stres"
        judul="Menenangkan Pikiran"
        keterangan="Meditasi untuk Overthinking, Cemas dan Stress."
        durasi="13:43"
        kategori="Cerita Stres"
      />
      <Footer />
    </div>
  );
}
