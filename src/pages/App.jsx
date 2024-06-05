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
import Artikeledu from "./Artikeledu/artikeledu";
import Artikeledu1 from "./Artikeledu/artikeledu1";
import Artikeledu2 from "./Artikeledu/artikeledu2";
import Artikeledu3 from "./Artikeledu/artikeledu3";
import Artikeledu4 from "./Artikeledu/artikeledu4";
import Artikeledu5 from "./Artikeledu/artikeledu5";
import Artikeledu6 from "./Artikeledu/artikeledu6";
import Artikeledu7 from "./Artikeledu/artikeledu7";
import Artikeledu8 from "./Artikeledu/artikeledu8";
import EditJurnalOlahraga from "./Edit Jurnal Olahraga/EditJurnalOlahraga";
import Rekap from "./Rekap/rekap";

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
        <Route path="/Artikeledu" element={<Artikeledu />} />
        <Route path="/Artikeledu1" element={<Artikeledu1 />} />
        <Route path="/Artikeledu2" element={<Artikeledu2 />} />
        <Route path="/Artikeledu3" element={<Artikeledu3 />} />
        <Route path="/Artikeledu4" element={<Artikeledu4 />} />
        <Route path="/Artikeledu5" element={<Artikeledu5 />} />
        <Route path="/Artikeledu6" element={<Artikeledu6 />} />
        <Route path="/Artikeledu7" element={<Artikeledu7 />} />
        <Route path="/Artikeledu8" element={<Artikeledu8 />} />
        <Route path="/EditJurnalOlahraga" element={<EditJurnalOlahraga />} />
        <Route path="/rekap" element={<Rekap />} />
      </Routes>
    </Router>
  );
}
