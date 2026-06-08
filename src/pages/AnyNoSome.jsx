import "../index.css";
import { useState } from "react";

const words = [
  "rich",
  "iron",
  "key",
  "bring up",
  "behave",
  "describe",
  "nest",
  "dream",
  "take care",
  "protect",
  "grow",
  "decide",
  "success",
  "solution",
  "decision",
  "research",
  "because of",
  "difference between",
  "attitude to",
  "access to",
  "increase in",
  "alternative to",
  "by heart",
];

const sentences = [
  {
    id: 1,
    text: "Parents always want to ___ their children.",
    answer: "protect",
  },
  { id: 2, text: "It is important to ___ well at school.", answer: "behave" },
  { id: 3, text: "We need a ___ to this problem.", answer: "solution" },
  { id: 4, text: "She is very ___ and has a lot of money.", answer: "rich" },
  { id: 5, text: "He learned the poem ___", answer: "by heart" },
  { id: 6, text: "Scientists do a lot of ___", answer: "research" },
  { id: 7, text: "What is your ___ to this idea?", answer: "attitude to" },
  { id: 8, text: "There is an ___ in prices", answer: "increase in" },
  {
    id: 9,
    text: "I can’t see any ___ between success and happiness",
    answer: "difference between",
  },
  { id: 10, text: "She made a difficult ___", answer: "decision" },
];

export default function VocabularyLesson() {
  const [answers, setAnswers] = useState({});
  const [dropAnswers, setDropAnswers] = useState({});
  const [draggedWord, setDraggedWord] = useState("");
  const [result, setResult] = useState({});
  const [score, setScore] = useState(null);

  const handleSelect = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleDrop = (id) => {
    setDropAnswers((prev) => ({
      ...prev,
      [id]: draggedWord,
    }));
    setDraggedWord("");
  };

  const checkAnswers = () => {
    const newResult = {};
    let points = 0;

    sentences.forEach((s) => {
      const selectCorrect = answers[s.id] === s.answer;
      const dragCorrect = dropAnswers[s.id] === s.answer;

      const isCorrect = selectCorrect || dragCorrect;

      newResult[s.id] = isCorrect;

      if (isCorrect) points++;
    });

    setResult(newResult);
    setScore(points);
  };

  return (
    <main className="page">
      {/* WORD BANK */}
      <section className="lesson">
        <h2>📚 Word Bank</h2>

        <div className="grid">
          {words.map((word) => (
            <div key={word} className="card">
              {word}
            </div>
          ))}
        </div>
      </section>

      {/* SELECT */}
      <section className="lesson">
        <h2>✏️ Complete the sentences</h2>

        {sentences.map((s) => (
          <div key={s.id}>
            <p>
              {s.id}. {s.text}
            </p>

            <select onChange={(e) => handleSelect(s.id, e.target.value)}>
              <option value="">Choose</option>
              {words.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
        ))}
      </section>

      {/* DRAG & DROP */}
      <section className="lesson">
        <h2>🎬 Drag & Drop</h2>

        <div className="drag-words">
          {words.map((word) => (
            <div
              key={word}
              className="drag-word"
              draggable
              onDragStart={() => setDraggedWord(word)}
            >
              {word}
            </div>
          ))}
        </div>

        <div className="exercise-card">
          {sentences.map((s) => (
            <div key={s.id} className="sentence-block">
              <p>
                {s.id}. {s.text}
              </p>

              <div
                className={`drop-zone ${
                  result[s.id] === true
                    ? "correct"
                    : result[s.id] === false
                      ? "wrong"
                      : ""
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(s.id)}
              >
                {dropAnswers[s.id] || "⬇ Drop word here"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHECK */}
      <section className="lesson">
        <button onClick={checkAnswers}>Check answers</button>

        {score !== null && <h2>Score: {score} / 10</h2>}
      </section>
    </main>
  );
}
