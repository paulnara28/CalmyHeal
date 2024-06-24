import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasiKeseimbanganBatin";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi8.png";

export default function MeditasiTidur2() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Tidur"
        judul="Keseimbangan Batin"
        keterangan="Kembali tenang dan damai dengan meditasi tidur untuk inner balence."
        durasi="20:01"
        kategori="Musik"
      />
      <Footer />
    </div>
  );
}
