import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasiGoodMood";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi11.png";

export default function MeditasiMood2() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Suasana Hati"
        judul="Good Mood"
        keterangan="Penyemangat suasana hati untuk mood lebih baik."
        durasi="13 : 26"
        kategori="Musik"
      />
      <Footer />
    </div>
  );
}
