import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasi";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi1.png";

export default function MeditasiFokus1() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="fokus"
        judul="Tingkatkan Fokus"
        keterangan="Meditasi tingkatkan fokus menggunakan kekuatan konsentrasi untuk meningkatkan ketenangan pikiran dan kejernihan mental Anda."
        durasi="12:17"
        kategori="Cerita Fokus"
      />
      <Footer />
    </div>
  );
}
