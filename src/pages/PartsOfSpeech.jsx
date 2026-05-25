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
  const [textAnswers, setTextAnswers] = useState({});
  const [textScore, setTextScore] = useState(null);

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

  const handleTextAnswer = (id, value) => {
    setTextAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const checkTextAnswers = () => {
    let points = 0;

    const correct = {
      1: "difference between",
      2: "attitude to",
      3: "access to",
      4: "increase in",
      5: "alternative to",
      6: "by heart",
      7: "on average",
      8: "despite",
      9: "neglected",
    };

    Object.keys(correct).forEach((key) => {
      if (textAnswers[key]?.toLowerCase().trim() === correct[key]) {
        points++;
      }
    });

    setTextScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}
      {/* EXERCISE 1 */}

      <section className="lesson">
        <h2>✏️ Choose the correct phrase</h2>

        <div className="exercise-card">
          <p>1. What is the ___ these two phones?</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="difference between">difference between</option>
            <option value="access to">access to</option>
            <option value="increase in">increase in</option>
          </select>

          <p>2. Students now have better ___ online education.</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="attitude to">attitude to</option>
            <option value="access to">access to</option>
            <option value="alternative to">alternative to</option>
          </select>

          <p>3. There has been an ___ prices this year.</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="increase in">increase in</option>
            <option value="by heart">by heart</option>
            <option value="despite">despite</option>
          </select>

          <p>4. She learned the poem ___.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="by heart">by heart</option>
            <option value="on average">on average</option>
            <option value="despite">despite</option>
          </select>

          <p>5. ___ the rain, we went for a walk.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="despite">despite</option>
            <option value="alternative to">alternative to</option>
            <option value="difference between">difference between</option>
          </select>

          <p>6. Many old buildings were completely ___.</p>

          <select onChange={(e) => handleChange("q6", e.target.value)}>
            <option value="">Choose</option>
            <option value="neglected">neglected</option>
            <option value="on average">on average</option>
            <option value="access to">access to</option>
          </select>

          <button onClick={checkAnswers}>Check answers</button>

          {score !== null && (
            <p className="score">You got {score} / 6 correct 🎯</p>
          )}
        </div>
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>🧠 Complete the sentences</h2>

        <div className="exercise-card">
          <p>1. What is the __________ modern and traditional education?</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(1, e.target.value)}
          />

          <p>2. His __________ school is very positive.</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(2, e.target.value)}
          />

          <p>3. Children should have __________ good healthcare.</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(3, e.target.value)}
          />

          <p>4. There was a huge __________ unemployment last year.</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(4, e.target.value)}
          />

          <p>5. Online learning is an __________ traditional classes.</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(5, e.target.value)}
          />

          <p>6. I know this song __________.</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(6, e.target.value)}
          />

          <p>7. __________, people spend 2 hours a day online.</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(7, e.target.value)}
          />

          <p>8. __________ being tired, she finished the project.</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(8, e.target.value)}
          />

          <p>9. The garden looked old and __________.</p>

          <input
            type="text"
            onChange={(e) => handleTextAnswer(9, e.target.value)}
          />

          <button onClick={checkTextAnswers}>Check answers</button>

          {textScore !== null && (
            <p className="score">You got {textScore} / 9 correct 🎯</p>
          )}
        </div>
      </section>

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
