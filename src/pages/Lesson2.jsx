import "../index.css";
import { useState } from "react";

const words = [
  {
    word: "obsessed",
    meaning: "really loving something",
    example: "I’m obsessed with this song.",
  },
  {
    word: "iconic",
    meaning: "legendary / unforgettable",
    example: "That outfit is iconic.",
  },
  {
    word: "awkward",
    meaning: "uncomfortable / embarrassing",
    example: "That silence was awkward.",
  },
  {
    word: "chill",
    meaning: "relaxed / calm",
    example: "He’s really chill.",
  },
  {
    word: "dramatic",
    meaning: "overreacting emotionally",
    example: "Stop being dramatic.",
  },
  {
    word: "lowkey",
    meaning: "a little / secretly",
    example: "I lowkey want pizza.",
  },
];

const slang = [
  "No cap — honestly / for real",
  "Slay — do amazing / look incredible",
  "I can’t — this is too much",
  "Mood — relatable feeling",
  "Delulu — unrealistic / delusional",
];

function Lesson2() {
  const [score, setScore] = useState(null);
  const [socialScore, setSocialScore] = useState(null);

  const correctAnswers = {
    q1: "awkward",
    q2: "chill",
    q3: "iconic",
    q4: "dramatic",
    q5: "obsessed",
    q6: "chill",
  };

  const [answers, setAnswers] = useState({});

  const handleChange = (q, value) => {
    setAnswers({
      ...answers,
      [q]: value,
    });
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

  const checkSocialAnswers = () => {
    let points = 0;

    if (answers.s1 === "mood") points++;
    if (answers.s2 === "slay") points++;
    if (answers.s3 === "no cap") points++;

    setSocialScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">Lesson 02</p>

        <h1>Daily English ✨</h1>

        <p className="description">
          Learn modern expressions and Gen Z vocabulary.
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

      {/* EXERCISE */}

      <section className="lesson">
        <h2>🌿 Exercise — Choose the correct word</h2>

        <div className="exercise-card">
          <p>1. That silence during dinner was really ___</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="awkward">awkward</option>
            <option value="iconic">iconic</option>
            <option value="dramatic">dramatic</option>
          </select>

          <p>2. My teacher is very calm and ___</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="chill">chill</option>
            <option value="awkward">awkward</option>
            <option value="obsessed">obsessed</option>
          </select>

          <p>3. Lady Gaga’s old outfits were truly ___</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="iconic">iconic</option>
            <option value="lowkey">lowkey</option>
            <option value="chill">chill</option>
          </select>

          <p>4. She gets so ___ when people cancel plans.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="dramatic">dramatic</option>
            <option value="iconic">iconic</option>
            <option value="lowkey">lowkey</option>
          </select>

          <p>5. I’m completely ___ with this new café.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="obsessed">obsessed</option>
            <option value="awkward">awkward</option>
            <option value="chill">chill</option>
          </select>

          <p>6. He’s very ___ and easy to talk to.</p>

          <select onChange={(e) => handleChange("q6", e.target.value)}>
            <option value="">Choose</option>
            <option value="chill">chill</option>
            <option value="dramatic">dramatic</option>
            <option value="iconic">iconic</option>
          </select>
        </div>

        <button onClick={checkAnswers}>Check answers</button>

        {score !== null && <p className="score">You got {score} / 6 🎯</p>}
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>💬 Exercise 2 — Complete the sentences</h2>

        <div className="exercise-card">
          <p>1. I’m completely __________ with this Netflix series.</p>

          <input type="text" placeholder="Type your answer..." />

          <p>2. That red carpet look was absolutely __________.</p>

          <input type="text" placeholder="Type your answer..." />

          <p>3. I lowkey want to cancel my plans and sleep.</p>

          <p className="hint">What does “lowkey” mean here?</p>

          <textarea placeholder="Write your idea..." />
        </div>
      </section>

      {/* EXERCISE 3 */}

      <section className="lesson">
        <h2>🧩 Exercise 3 — Match slang with meaning</h2>

        <div className="exercise-card">
          <p>1. Slay</p>

          <select>
            <option value="">Choose</option>
            <option>relatable feeling</option>
            <option>look amazing / do great</option>
            <option>unrealistic / delusional</option>
          </select>

          <p>2. Mood</p>

          <select>
            <option value="">Choose</option>
            <option>relatable feeling</option>
            <option>look amazing / do great</option>
            <option>unrealistic / delusional</option>
          </select>

          <p>3. Delulu</p>

          <select>
            <option value="">Choose</option>
            <option>relatable feeling</option>
            <option>look amazing / do great</option>
            <option>unrealistic / delusional</option>
          </select>
        </div>
      </section>

      {/* EXERCISE 4 */}

      <section className="lesson">
        <h2>🗣 Exercise 4 — Discussion</h2>

        <div className="exercise-card">
          <p>1. What are you obsessed with right now?</p>

          <textarea placeholder="Write your answer..." />

          <p>2. Describe an awkward situation you had recently.</p>

          <textarea placeholder="Write your answer..." />

          <p>3. What celebrity or trend is iconic to you?</p>

          <textarea placeholder="Write your answer..." />
        </div>
      </section>

      {/* EXERCISE 5 */}

      <section className="lesson">
        <h2>✨ Exercise 5 — Social Media Captions</h2>

        <div className="exercise-card">
          <p>1. “Coffee, rain, candles, jazz music…”</p>

          <select onChange={(e) => handleChange("s1", e.target.value)}>
            <option value="">Choose slang</option>
            <option value="mood">Mood</option>
            <option value="delulu">Delulu</option>
            <option value="slay">Slay</option>
          </select>

          <p>2. “She walked into the room looking incredible.”</p>

          <select onChange={(e) => handleChange("s2", e.target.value)}>
            <option value="">Choose slang</option>
            <option value="slay">Slay</option>
            <option value="mood">Mood</option>
            <option value="no cap">No cap</option>
          </select>

          <p>3. “I honestly think this is the best café in the city.”</p>

          <select onChange={(e) => handleChange("s3", e.target.value)}>
            <option value="">Choose slang</option>
            <option value="no cap">No cap</option>
            <option value="delulu">Delulu</option>
            <option value="mood">Mood</option>
          </select>
        </div>

        <button onClick={checkSocialAnswers}>Check answers</button>

        {socialScore !== null && (
          <p className="score">You got {socialScore} / 3 ✨</p>
        )}
      </section>
    </main>
  );
}

export default Lesson2;
