import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi5.png";

export default function MeditasiStres2() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Stres"
        judul="Ketenangan"
        keterangan="Meditasi relaksasi untuk tenang menyeluruh, Istirahat dan Tidur."
        durasi="09:56"
        kategori="Musik"
      />
      <Footer />
    </div>
  );
}
