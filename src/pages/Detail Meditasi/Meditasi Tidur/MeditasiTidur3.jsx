import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasiTidurNyenyak";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi9.png";

export default function MeditasiTidur3() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Tidur"
        judul="Tidur Nyenyak"
        keterangan="Self-Healing melalui meditasi tidur untuk relaksasi mendalam."
        durasi="19:43"
        kategori="Meditasi"
      />
      <Footer />
    </div>
  );
}
