import "../index.css";
import { useState } from "react";

const vocabulary = [
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
  "disappoint",
  "goal",
  "do my best",
  "fulfil",
  "insect",
  "piece",
  "a piece of advice",
  "represent",
  "array",
  "chunk",
  "store",
  "receive",
  "take care",
  "issues",
  "evolve",
  "calm down",
];

export default function Lesson4() {
  const [text, setText] = useState("");
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // ---------------- HANDLER ----------------
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- CHECK VOCAB ----------------
  const checkVocabulary = () => {
    let found = [];

    vocabulary.forEach((word) => {
      if (text.toLowerCase().includes(word.toLowerCase())) {
        found.push(word);
      }
    });

    setResult(found);
  };

  // ---------------- WARM UP QUESTIONS ----------------
  const warmUpQuestions = [
    "What does success mean to you?",
    "How do you make a decision?",
    "What problems do modern people face?",
  ];

  return (
    <div className="lesson">
      <h1>🌍 Modern Lifestyle — Vocabulary Trainer</h1>

      {/* ================= WARM UP ================= */}
      <h2>🔥 Warm-up</h2>

      {warmUpQuestions.map((q, i) => (
        <p key={i}>💬 {q}</p>
      ))}

      <hr />

      {/* ================= EXERCISE 1 ================= */}
      <h2>🧠 Exercise 1 — Complete the Sentence</h2>

      <p>Success depends on __________</p>
      <input name="q1" onChange={handleChange} />

      <p>My main goal is __________</p>
      <input name="q2" onChange={handleChange} />

      <p>People often fail because of __________</p>
      <input name="q3" onChange={handleChange} />

      <p>A good piece of advice is __________</p>
      <input name="q4" onChange={handleChange} />

      <button onClick={() => console.log(answers)}>Check Exercise 1</button>

      <hr />

      {/* ================= EXERCISE 2 ================= */}
      <h2>✍️ Exercise 2 — Choose the Correct Word</h2>

      <p>I need an __________ to this problem.</p>
      <p>(solution / insect / chunk)</p>
      <input name="q5" onChange={handleChange} />

      <p>She will __________ her best in the exam.</p>
      <p>(do / take / store)</p>
      <input name="q6" onChange={handleChange} />

      <p>We must __________ the environment.</p>
      <p>(protect / receive / evolve)</p>
      <input name="q7" onChange={handleChange} />

      <button onClick={() => console.log(answers)}>Check Exercise 2</button>

      <hr />

      {/* ================= EXERCISE 3 ================= */}
      <h2>🧩 Exercise 3 — Sentence Builder</h2>

      <p>Put words in correct order:</p>

      <p>because of / stress / people / issues / have</p>
      <input name="q8" onChange={handleChange} />

      <p>access to / education / is / important</p>
      <input name="q9" onChange={handleChange} />

      <p>difference between / success / and / failure</p>
      <input name="q10" onChange={handleChange} />

      <button onClick={() => console.log(answers)}>Check Exercise 3</button>

      <hr />

      {/* ================= EXERCISE 4 ================= */}
      <h2>🎤 Exercise 4 — Writing Practice</h2>

      <p>Write a short paragraph about modern lifestyle and stress.</p>

      <textarea
        rows="8"
        placeholder="Write here..."
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={checkVocabulary}>Check Vocabulary Usage</button>

      {result && (
        <div>
          <h3>📊 Used Vocabulary</h3>
          <ul>
            {result.map((w, i) => (
              <li key={i}>✔ {w}</li>
            ))}
          </ul>

          <h2>
            Words used: {result.length} / {vocabulary.length}
          </h2>
        </div>
      )}
    </div>
  );
}
