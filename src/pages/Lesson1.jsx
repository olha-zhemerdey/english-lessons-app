import "../index.css";
import { useState } from "react";

const words = [
  {
    word: "handy",
    meaning: "useful / convenient",
    example: "This app is really handy.",
  },
  {
    word: "foxy",
    meaning: "attractive / sexy",
    example: "She looks so foxy tonight.",
  },
  {
    word: "cheesy",
    meaning: "cliché / unoriginal",
    example: "That movie was too cheesy.",
  },
  {
    word: "buttery",
    meaning: "overly sweet / flattering",
    example: "His buttery compliments sounded fake.",
  },
  {
    word: "corny",
    meaning: "cringy / outdated joke",
    example: "That joke was corny.",
  },
  {
    word: "salty",
    meaning: "bitter / annoyed",
    example: "Why are you so salty?",
  },
];

const slang = [
  "I’m sold — I agree / I’m convinced",
  "We ball — we keep going / we’ll survive",
  "You wish! — not gonna happen",
  "That’s my jam! — I love it / my favorite thing",
  "You got it — no problem / sure",
  "It’s giving — it has the vibe of something",
];

function App() {
  const correctAnswers = {
    q1: "handy",
    q2: "salty",
    q3: "cheesy",
    q4: "you got it",
    q5: "we ball",
  };

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [matchScore, setMatchScore] = useState(null);

  const handleChange = (q, value) => {
    setAnswers((prev) => ({
      ...prev,
      [q]: value,
    }));
  };

  const checkAnswers = () => {
    let points = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key] === correctAnswers[key]) {
        points++;
      }
    });

    setScore(points);
  };

  const checkMatchAnswers = () => {
    let points = 0;

    if (answers.m1 === "a") points++;
    if (answers.m2 === "d") points++;
    if (answers.m3 === "c") points++;
    if (answers.m4 === "b") points++;
    if (answers.m5 === "e") points++;

    setMatchScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <p className="subtitle">Lesson 01</p>
        <h1>Modern English ✨</h1>
        <p className="description">
          Learn vocabulary from roots and modern slang meanings.
        </p>
      </section>
      {/* WORDS */}
      <section className="grid">
        {words.map((item) => (
          <div className="card" key={item.word}>
            <h2>{item.word}</h2>
            <p className="meaning">{item.meaning}</p>
            <p className="example">{item.example}</p>
          </div>
        ))}
      </section>
      {/* SLANG */}
      <section className="slang-section">
        <h2>Slang phrases 💬</h2>
        <div className="slang-grid">
          {slang.map((phrase) => (
            <div className="slang-card" key={phrase}>
              {phrase}
            </div>
          ))}
        </div>
      </section>
      {/* EXERCISE 1 */}
      <section className="lesson">
        <h2>🌿 Exercise 1 — Fill in the blanks</h2>

        <div className="exercise-card">
          <p>1. This tool is very ___ (useful)</p>
          <input type="text" placeholder="Type word..." />
        </div>

        <div className="exercise-card">
          <p>
            2. He is so ___ because nobody listened to him. (bitter / annoyed)
          </p>
          <input type="text" placeholder="Type word..." />
        </div>

        <div className="exercise-card">
          <p>3. That joke was really ___ (cliché / unoriginal)</p>
          <input type="text" placeholder="Type word..." />
        </div>

        <div className="exercise-card">
          <p>
            4. She gave the teacher a ___ smile to get a better grade. (overly
            flattering)
          </p>
          <input type="text" placeholder="Type word..." />
        </div>

        <div className="exercise-card">
          <p>
            5. Your dress is so ___! Why are you wearing it? (cringy / outdated)
          </p>
          <input type="text" placeholder="Type word..." />
        </div>
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>✏️ Exercise 2 — Speaking practice</h2>

        <p className="hint">Respond using slang phrases only.</p>

        <div className="exercise-card">
          <p>A: Do you want to continue this project?</p>
          <p>B: …</p>
        </div>

        <div className="exercise-card">
          <p>A: I love this song so much!</p>
          <p>B: …</p>
        </div>

        <div className="exercise-card">
          <p>A: Don’t worry, it’s fine.</p>
          <p>B: …</p>
        </div>

        <div className="exercise-card">
          <p>A: This idea sounds amazing.</p>
          <p>B: …</p>
        </div>
      </section>

      {/* EXERCISE 3 — UPDATED BASED ON YOUR VOCAB */}
      <section className="lesson">
        <h2>🌿 Exercise 3 — Choose the correct meaning</h2>

        <div className="exercise-card">
          <p>1. This app is very ___ (useful)</p>
          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="handy">handy</option>
            <option value="corny">corny</option>
            <option value="salty">salty</option>
          </select>

          <p>2. Why are you so ___? (bitter / annoyed)</p>
          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="salty">salty</option>
            <option value="foxy">foxy</option>
            <option value="cheesy">cheesy</option>
          </select>

          <p>3. That joke is very ___ (cliché / unoriginal)</p>
          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="cheesy">cheesy</option>
            <option value="handy">handy</option>
            <option value="foxy">foxy</option>
          </select>

          <p>4. “No problem” → ___</p>
          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="you got it">you got it</option>
            <option value="it’s giving">it’s giving</option>
            <option value="salty">salty</option>
          </select>

          <p>5. “We keep going” → ___</p>
          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="we ball">we ball</option>
            <option value="I’m sold">I’m sold</option>
            <option value="corny">corny</option>
          </select>
        </div>

        <button onClick={checkAnswers}>Check answers</button>

        {score !== null && <p className="score">You got {score} / 5 🎯</p>}
      </section>

      <section className="lesson">
        <h2>✏️ Exercise 4 — Make sentences</h2>

        <div className="exercise-card">
          <p>Create 1 sentence with each word:</p>

          <p>
            <b>handy, foxy, cheesy, corny, salty</b>
          </p>

          <p className="hint">
            Example: This app is really handy for studying English.
          </p>
        </div>
      </section>

      <section className="lesson">
        <h2>🧩 Exercise 5 — Match slang phrases with meanings</h2>

        <div className="exercise-card">
          <p>1. I’m sold</p>
          <select onChange={(e) => handleChange("m1", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">I agree / I’m convinced</option>
            <option value="b">I love it</option>
            <option value="c">no problem</option>
            <option value="d">we continue</option>
            <option value="e">vibe</option>
          </select>

          <p>2. We ball</p>
          <select onChange={(e) => handleChange("m2", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">I agree</option>
            <option value="b">I love it</option>
            <option value="c">no problem</option>
            <option value="d">we continue / survive</option>
            <option value="e">vibe</option>
          </select>

          <p>3. You got it</p>
          <select onChange={(e) => handleChange("m3", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">I agree</option>
            <option value="b">I love it</option>
            <option value="c">no problem / okay</option>
            <option value="d">we continue</option>
            <option value="e">vibe</option>
          </select>

          <p>4. That’s my jam</p>
          <select onChange={(e) => handleChange("m4", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">I agree</option>
            <option value="b">I love it</option>
            <option value="c">no problem</option>
            <option value="d">we continue</option>
            <option value="e">vibe</option>
          </select>

          <p>5. It’s giving</p>
          <select onChange={(e) => handleChange("m5", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">I agree</option>
            <option value="b">I love it</option>
            <option value="c">no problem</option>
            <option value="d">we continue</option>
            <option value="e">it has a vibe</option>
          </select>
        </div>

        <button onClick={checkMatchAnswers}>Check answers</button>

        {matchScore !== null && (
          <p className="score">You got {matchScore} / 5 🎯</p>
        )}
      </section>
    </main>
  );
}

export default App;
