import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi2.png";

export default function MeditasiFokus2() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Fokus"
        judul="Pikiran Tenang"
        keterangan="Tenangkan Pikiran dengan 15 menit meditasi (dengan musik)."
        durasi="15:06"
        kategori="Musik"
      />
      <Footer />
    </div>
  );
}
