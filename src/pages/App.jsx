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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register></Register>} />
        <Route path="/Login" element={<Login></Login>} />
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
      </Routes>
    </Router>
  );
}
