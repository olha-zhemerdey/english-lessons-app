import { useState } from "react";

const phrases = [
  "accounted for",
  "represented",
  "stood at",
  "a significant proportion of",
  "the majority of",
  "in contrast",
  "whereas",
  "respectively",
  "considerably higher than",
  "approximately",
];

const exercise1 = [
  {
    id: 1,
    text: "Women ___ 60% of the total participants.",
    correct: "accounted for",
  },
  {
    id: 2,
    text: "The population ___ 2.5 million in 2020.",
    correct: "stood at",
  },
  {
    id: 3,
    text: "Blue sector ___ the largest share of the chart.",
    correct: "represented",
  },
];

const exercise2 = [
  {
    id: 1,
    text: "Urban areas grew, ___ rural areas declined.",
    answer: "whereas",
  },
  {
    id: 2,
    text: "The figures were 30% and 45%, ___.",
    answer: "respectively",
  },
  {
    id: 3,
    text: "Sales were ___ higher than last year.",
    answer: "considerably",
  },
];

export default function VocabularyGame() {
  // EX1
  const [selected, setSelected] = useState({});
  const [score1, setScore1] = useState(null);

  // EX2
  const [inputs, setInputs] = useState({});
  const [feedback, setFeedback] = useState({});

  // EX1 check
  const checkExercise1 = () => {
    let score = 0;

    exercise1.forEach((q) => {
      if (selected[q.id] === q.correct) score++;
    });

    setScore1(score);
  };

  // EX2 check per answer
  const checkOne = (id, correct) => {
    const userAnswer = (inputs[id] || "").trim().toLowerCase();
    const isCorrect = userAnswer === correct.toLowerCase();

    setFeedback((prev) => ({
      ...prev,
      [id]: isCorrect ? "✅ Correct" : "❌ Try again",
    }));
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h2>📊 Data Analysis Vocabulary Game</h2>

      {/* ================= EXERCISE 1 ================= */}
      <h3>🧩 Exercise 1: Choose the correct phrase</h3>

      {exercise1.map((q) => (
        <div key={q.id} style={{ marginBottom: 15 }}>
          <p>{q.text}</p>

          <select
            onChange={(e) =>
              setSelected((prev) => ({
                ...prev,
                [q.id]: e.target.value,
              }))
            }
          >
            <option value="">-- choose --</option>
            {phrases.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button onClick={checkExercise1}>Check Exercise 1</button>

      {score1 !== null && (
        <h4>
          Score: {score1} / {exercise1.length}
        </h4>
      )}

      {/* ================= EXERCISE 2 ================= */}
      <h3 style={{ marginTop: 40 }}>✍️ Exercise 2: Type the missing word</h3>

      {exercise2.map((q) => (
        <div key={q.id} style={{ marginBottom: 15 }}>
          <p>{q.text}</p>

          <input
            value={inputs[q.id] || ""}
            onChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [q.id]: e.target.value,
              }))
            }
          />

          <button onClick={() => checkOne(q.id, q.answer)}>Check</button>

          {feedback[q.id] && (
            <span style={{ marginLeft: 10 }}>{feedback[q.id]}</span>
          )}
        </div>
      ))}
    </div>
  );
}
