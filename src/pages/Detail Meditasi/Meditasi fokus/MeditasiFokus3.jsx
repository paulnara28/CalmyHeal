import React from "react";
import Navbar from "../../../component/Navbar";
import KontenMeditasi from "../../../component/KontenMeditasiKonsentrasiMendalam";
import Footer from "../../../component/Footer";
import gambar from "../../../assets/image/kontenmeditasi3.png";

export default function MeditasiFokus3() {
  return (
    <div>
      <Navbar />
      <KontenMeditasi
        gambar={gambar}
        meditasi="Fokus"
        judul="Konsentrasi Mendalam"
        keterangan="Melatih konsentrasi mendalam dengan meditasi mempertajam daya fokus."
        durasi="11:13"
        kategori="Meditasi"
      />
      <Footer />
    </div>
  );
}
