import "../index.css";
import { useState } from "react";

const words = [
  "must",
  "have to",
  "mustn't",
  "don't have to",
  "should",
  "need to",
];

const quiz = [
  {
    id: 1,
    question: "You ___ wear a seatbelt in a car.",
    answer: "must",
  },

  {
    id: 2,
    question: "I ___ get up early tomorrow because I have an exam.",
    answer: "have to",
  },

  {
    id: 3,
    question: "You ___ smoke in hospitals.",
    answer: "mustn't",
  },

  {
    id: 4,
    question: "You ___ come if you are busy.",
    answer: "don't have to",
  },

  {
    id: 5,
    question: "You ___ drink more water.",
    answer: "should",
  },

  {
    id: 6,
    question: "Students ___ do their homework every day.",
    answer: "need to",
  },
];

function ObligationLesson() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const checkAnswers = () => {
    let points = 0;

    quiz.forEach((item) => {
      if (answers[item.id] === item.answer) {
        points++;
      }
    });

    setScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">English Grammar Lesson</p>

        <h1>Obligation and Necessity 📚</h1>

        <p className="description">
          Learn how to talk about rules, obligations, advice and necessity in
          English.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📖 Grammar Words</h2>

        <div className="grid">
          {words.map((word) => (
            <div className="card" key={word}>
              <h3>{word}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TABLE */}

      <section className="lesson">
        <h2>📋 Grammar Table</h2>

        <div className="exercise-card">
          <table className="grammar-table">
            <thead>
              <tr>
                <th>Grammar</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>must</td>
                <td>strong obligation</td>
                <td>You must wear a uniform.</td>
              </tr>

              <tr>
                <td>have to</td>
                <td>external rule</td>
                <td>I have to study tonight.</td>
              </tr>

              <tr>
                <td>mustn't</td>
                <td>prohibition</td>
                <td>You mustn't use your phone.</td>
              </tr>

              <tr>
                <td>don't have to</td>
                <td>not necessary</td>
                <td>You don't have to come.</td>
              </tr>

              <tr>
                <td>should</td>
                <td>advice</td>
                <td>You should sleep more.</td>
              </tr>

              <tr>
                <td>need to</td>
                <td>necessity</td>
                <td>We need to hurry.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* EXPLANATION */}

      <section className="lesson">
        <h2>🧠 Quick Explanation</h2>

        <div className="exercise-card">
          <p>
            <b>Must</b> = very important obligation.
          </p>

          <p>
            <b>Have to</b> = rules from school, work, law, etc.
          </p>

          <p>
            <b>Mustn't</b> = prohibited.
          </p>

          <p>
            <b>Don't have to</b> = optional.
          </p>

          <p>
            <b>Should</b> = advice.
          </p>

          <p>
            <b>Need to</b> = necessary.
          </p>
        </div>
      </section>

      {/* EXERCISE 1 */}

      <section className="lesson">
        <h2>✏️ Choose the correct answer</h2>

        <div className="exercise-card">
          {quiz.map((item) => (
            <div key={item.id}>
              <p>
                {item.id}. {item.question}
              </p>

              <select onChange={(e) => handleChange(item.id, e.target.value)}>
                <option value="">Choose</option>

                {words.map((word) => (
                  <option key={word} value={word}>
                    {word}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button onClick={checkAnswers}>Check answers</button>

          {score !== null && (
            <p className="score">
              You got {score} / {quiz.length} correct 🎯
            </p>
          )}
        </div>
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>🎯 School Rules Challenge</h2>

        <div className="exercise-card">
          <p>
            Complete the rules with:
            <b>must / mustn't / don't have to</b>
          </p>

          <p>1. Students __________ be late for lessons.</p>

          <p>2. You __________ shout in the library.</p>

          <p>3. Students __________ bring snacks if they don't want to.</p>

          <p>4. You __________ wear sports clothes for PE.</p>

          <p>5. Students __________ cheat on tests.</p>
        </div>
      </section>

      {/* EXERCISE 3 */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. What rules do students have to follow at your school?</p>

          <p>2. What should people do to stay healthy?</p>

          <p>3. What do you need to do this week?</p>

          <p>4. What mustn't people do in a cinema?</p>

          <p>5. Do children have to help at home?</p>
        </div>
      </section>

      {/* WRITING */}

      <section className="lesson">
        <h2>✍️ Writing Task</h2>

        <div className="exercise-card">
          <p>Write 5 rules for your dream school using:</p>

          <ul>
            <li>must</li>
            <li>mustn't</li>
            <li>should</li>
            <li>don't have to</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ObligationLesson;
