import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Lesson1 from "./pages/Lesson1";
import GermanTravelLesson from "./pages/GermanTravelLesson";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson5 from "./pages/Lesson5";
import Lesson6 from "./pages/Lesson6";
import VerbPatterns from "./pages/Verbpatterns";
import CinemaTVLesson from "./pages/Cinema";
import PartsOfSpeechLesson from "./pages/PartsOfSpeech";
import ObligationLesson from "./pages/ObligationLesson";
import ThereIsThereAreLesson from "./pages/Thereisare";
import PurposeLesson from "./pages/InOrderTo";
import BeyondTalentLesson from "./pages/NastyaLesson";
import RunPhrasalVerbsLesson from "./pages/Run";
import AdvancedMovieVocabularyLesson from "./pages/NastyaVocFilm";
import NMTVocabularyLesson from "./pages/NmtOne";
import About from "./pages/About";
import VocabularyLesson from "./pages/AnyNoSome";
import TimeCapsuleLesson from "./pages/Capsules";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/GermanTravelLesson" element={<GermanTravelLesson />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson4" element={<Lesson4 />} />
        <Route path="/lesson5" element={<Lesson5 />} />
        <Route path="/lesson6" element={<Lesson6 />} />
        <Route path="/verbpatterns" element={<VerbPatterns />} />
        <Route path="/partsofspeech" element={<PartsOfSpeechLesson />} />
        <Route path="/cinema" element={<CinemaTVLesson />} />
        <Route path="/obligationlesson" element={<ObligationLesson />} />
        <Route path="/thereisare" element={<ThereIsThereAreLesson />} />
        <Route path="/inorderto" element={<PurposeLesson />} />
        <Route path="/nastyalesson" element={<BeyondTalentLesson />} />
        <Route path="/run" element={<RunPhrasalVerbsLesson />} />
        <Route path="/nmtone" element={<NMTVocabularyLesson />} />
        <Route path="/anynosome" element={<VocabularyLesson />} />
        <Route path="/capsules" element={<TimeCapsuleLesson />} />
        <Route
          path="/nastyavocfilm"
          element={<AdvancedMovieVocabularyLesson />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
