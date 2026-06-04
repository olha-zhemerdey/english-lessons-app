import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="subtitle">Wax & Whisper English</p>

        <h1>English With Olya ✨</h1>

        <p className="description">
          Cozy modern English lessons with aesthetic vibes.
        </p>

        <div className="buttons">
          <Link to="/lesson1">
            <button>Lesson 1</button>
          </Link>
          <Link to="/germantravellesson">
            <button>GermanTravelLesson</button>
          </Link>
          <Link to="/lesson3">
            <button>Lesson 3</button>
          </Link>
          <Link to="/lesson4">
            <button>Lesson 4</button>
          </Link>
          <Link to="/lesson5">
            <button>Lesson 5</button>
          </Link>
          <Link to="/lesson6">
            <button>Lesson 6</button>
          </Link>
          <Link to="/verbpatterns">
            <button>Verbpatterns</button>
          </Link>
          <Link to="/cinema">
            <button>RMB1Plus6A</button>
          </Link>
          <Link to="/partsofspeech">
            <button>PartsOfSpeechLesson</button>
          </Link>
          <Link to="/obligationlesson">
            <button>ObligationLesson</button>
          </Link>
          <Link to="/thereisare">
            <button>ThereIsThereAreLesson</button>
          </Link>
          <Link to="/inorderto">
            <button>Purpose Clauses щоб</button>
          </Link>
          <Link to="/nastyalesson">
            <button>FindingYourVoiceLesson</button>
          </Link>
          <Link to="/run">
            <button>RunPhrasalVerbsLesson</button>
          </Link>
          <Link to="/nastyavocfilm">
            <button>AdvancedMovieVocabularyLesson</button>
          </Link>
          <Link to="/nmtone">
            <button>NMTVocabularyLesson</button>
          </Link>

          <Link to="/about">
            <button className="secondary-btn">About Me</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
