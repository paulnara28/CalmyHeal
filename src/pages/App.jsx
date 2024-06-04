import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import CalmyChallenge from "./Calmy Challenge/CalmyChallenge";
import Calmyedu from "./Calmy Edu/Calmyedu";
import CalmyMeditation from "./Calmy Meditation/CalmyMeditation";
import Tentangcalmy from "./Tentang Calmy/Tentangcalmy";
import ChallengeCategory from "./Pilih Kategori Challenge/ChallengeCategory";
import ChallengeOlahraga from "./ChallengeOlahraga/ChallengeOlahraga";
import ChallengeBacaBuku from "./ChallengeBacaBuku/ChallengeBacaBuku";
import Artikelolahragajalankaki from "./ArtikelOlahraga/Artikelolahragajalankaki";
import Artikelolahragayoga from "./ArtikelOlahragayoga/Artikelolahragayoga";
import Artikelolahragabersepeda from "./ArtikelOlahragabersepeda/Artikelolahragabersepeda";
import Tou from "./syarat dan ketentuan/Tou";
import MeditasiUtama from "./Halaman Utama Meditasi/MeditasiUtama";
import MeditasiFokus1 from "./Detail Meditasi/Meditasi fokus/MeditasiFokus1";
import MeditasiFokus2 from "./Detail Meditasi/Meditasi fokus/MeditasiFokus2";
import MeditasiFokus3 from "./Detail Meditasi/Meditasi fokus/MeditasiFokus3";
import MeditasiStres1 from "./Detail Meditasi/Meditasi Stres/MeditasiStres1";
import MeditasiStres2 from "./Detail Meditasi/Meditasi Stres/MeditasiStres2";
import MeditasiTidur3 from "./Detail Meditasi/Meditasi Tidur/MeditasiTidur3";
import MeditasiTidur1 from "./Detail Meditasi/Meditasi Tidur/MeditasiTidur1";
import MeditasiStres3 from "./Detail Meditasi/Meditasi Stres/MeditasiStres3";
import MeditasiTidur2 from "./Detail Meditasi/Meditasi Tidur/MeditasiTidur2";
import MeditasiMood1 from "./Detail Meditasi/Meditasi Untuk Mood/MeditasiMood1";
import MeditasiMood2 from "./Detail Meditasi/Meditasi Untuk Mood/MeditasiMood2";
import MeditasiMood3 from "./Detail Meditasi/Meditasi Untuk Mood/MeditasiMood3";
import KebijakanPrivasi from "./Kebijakan Privasi/KebijakanPrivasi";
import Filosofi1 from "./Ringkasan Buku/Filosofi1";
import Filosofi2 from "./Ringkasan Buku/Filosofi2";
import Berani from "./Ringkasan Buku/Berani";
import Love from "./Ringkasan Buku/Love";
import Seni from "./Ringkasan Buku/Seni";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Calmy-Challenge" element={<CalmyChallenge />} />
        <Route path="/Calmy-Edu" element={<Calmyedu />} />
        <Route path="/Calmy-Meditation" element={<CalmyMeditation />} />
        <Route path="/Tentang-Calmy" element={<Tentangcalmy />} />
        <Route path="/Kategori-Tantangan" element={<ChallengeCategory />} />
        <Route path="/ChallengeOlahraga" element={<ChallengeOlahraga />} />
        <Route path="/ChallengeBacaBuku" element={<ChallengeBacaBuku />} />
        <Route
          path="/Artikelolahragajalankaki"
          element={<Artikelolahragajalankaki />}
        />
        <Route path="/Artikelolahragayoga" element={<Artikelolahragayoga />} />
        <Route
          path="/Artikelolahragabersepeda"
          element={<Artikelolahragabersepeda />}
        />
        <Route path="/Syarat-dan-Ketentuan" element={<Tou />} />
        <Route path="/Kebijakan-Privasi" element={<KebijakanPrivasi />} />
        <Route path="/Meditasi-Utama" element={<MeditasiUtama />} />
        <Route path="/Meditasi-Fokus-1" element={<MeditasiFokus1 />} />
        <Route path="/Meditasi-Fokus-2" element={<MeditasiFokus2 />} />
        <Route path="/Meditasi-Fokus-3" element={<MeditasiFokus3 />} />
        <Route path="/Meditasi-Stres-1" element={<MeditasiStres1 />} />
        <Route path="/Meditasi-Stres-2" element={<MeditasiStres2 />} />
        <Route path="/Meditasi-Stres-3" element={<MeditasiStres3 />} />
        <Route path="/Meditasi-Tidur-1" element={<MeditasiTidur1 />} />
        <Route path="/Meditasi-Tidur-2" element={<MeditasiTidur2 />} />
        <Route path="/Meditasi-Tidur-3" element={<MeditasiTidur3 />} />
        <Route path="/Meditasi-Mood-1" element={<MeditasiMood1 />} />
        <Route path="/Meditasi-Mood-2" element={<MeditasiMood2 />} />
        <Route path="/Meditasi-Mood-3" element={<MeditasiMood3 />} />
        <Route path="/Filosofi-Teras-1" element={<Filosofi1 />} />
        <Route path="/Filosofi-Teras-2" element={<Filosofi2 />} />
        <Route path="/Berani-Tidak-Disukai" element={<Berani />} />
        <Route path="/Love-Your-Self" element={<Love />} />
        <Route
          path="/Sebuah-Seni-Untuk-Bersikap-Bodo-Amat"
          element={<Seni />}
        />
      </Routes>
    </Router>
  );
}
