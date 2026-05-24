import "../index.css";
import { useState } from "react";

const words = ["noun", "verb", "adjective", "adverb", "pronoun", "preposition"];

const sentences = [
  {
    id: 1,
    text: "The word 'dog' is a ____ because it names a thing.",
    answer: "noun",
  },
  {
    id: 2,
    text: "Run, eat, and sleep are examples of ____.",
    answer: "verb",
  },
  {
    id: 3,
    text: "The word 'beautiful' is an ____ because it describes something.",
    answer: "adjective",
  },
  {
    id: 4,
    text: "She sings very ____.",
    answer: "adverb",
  },
  {
    id: 5,
    text: "He washed ____ hands.",
    answer: "pronoun",
  },
  {
    id: 6,
    text: "The book is ____ the table.",
    answer: "preposition",
  },
];

function PartsOfSpeechLesson() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (q, value) => {
    setAnswers((prev) => ({
      ...prev,
      [q]: value,
    }));
  };

  const checkAnswers = () => {
    let points = 0;

    sentences.forEach((sentence, index) => {
      const key = `q${index + 1}`;
      if (answers[key] === sentence.answer) {
        points++;
      }
    });

    setScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <p className="subtitle">Grammar Basics</p>
        <h1>Parts of Speech 📚</h1>
        <p className="description">
          Learn the basic building blocks of English grammar.
        </p>
      </section>

      {/* VOCABULARY */}
      <section className="lesson">
        <h2>📚 Vocabulary Box</h2>

        <div className="grid">
          {words.map((word) => (
            <div className="card" key={word}>
              <h3>{word}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* EXERCISE */}
      <section className="lesson">
        <h2>✏️ Choose the correct part of speech</h2>

        <div className="exercise-card">
          {sentences.map((s, index) => (
            <div key={s.id}>
              <p>
                {index + 1}. {s.text}
              </p>

              <select
                onChange={(e) => handleChange(`q${index + 1}`, e.target.value)}
              >
                <option value="">Choose</option>
                {words.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button onClick={checkAnswers}>Check answers</button>

          {score !== null && (
            <p className="score">
              You got {score} / {sentences.length} correct 🎯
            </p>
          )}
        </div>
      </section>

      {/* EXPLANATION */}
      <section className="lesson">
        <h2>🧠 Quick Explanation</h2>

        <div className="exercise-card">
          <p>
            <b>Noun:</b> a person, place, or thing (dog, city)
          </p>
          <p>
            <b>Verb:</b> an action (run, eat)
          </p>
          <p>
            <b>Adjective:</b> describes a noun (big, beautiful)
          </p>
          <p>
            <b>Adverb:</b> describes a verb (quickly, slowly)
          </p>
          <p>
            <b>Pronoun:</b> replaces a noun (he, she, it)
          </p>
          <p>
            <b>Preposition:</b> shows place or time (in, on, under)
          </p>
        </div>
      </section>
    </main>
  );
}

export default PartsOfSpeechLesson;
