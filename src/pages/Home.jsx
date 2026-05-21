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
          <Link to="/lesson2">
            <button>Lesson 2</button>
          </Link>
          <Link to="/lesson3">
            <button>Lesson 3</button>
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
