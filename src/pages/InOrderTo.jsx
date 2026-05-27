import "../index.css";
import { useState } from "react";

const grammarWords = ["so that", "in order to", "to", "because", "for", "so"];

const quiz = [
  {
    id: 1,
    question: "I study every day ___ pass my exams.",
    answer: "to",
  },

  {
    id: 2,
    question: "She spoke quietly ___ the baby could sleep.",
    answer: "so that",
  },

  {
    id: 3,
    question: "He went to the shop ___ buy some milk.",
    answer: "to",
  },

  {
    id: 4,
    question: "They left early ___ avoid traffic.",
    answer: "to",
  },

  {
    id: 5,
    question: "I saved money ___ I could buy a new laptop.",
    answer: "so that",
  },

  {
    id: 6,
    question: "We use headphones ___ listening to music.",
    answer: "for",
  },
];

function PurposeLesson() {
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
        <p className="subtitle">English Grammar • Purpose</p>

        <h1>“Щоб” in English 🎯</h1>

        <p className="description">
          Learn how to express purpose in English using:
          <b>so that, to, in order to, for</b>
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📚 Useful Grammar</h2>

        <div className="grid">
          {grammarWords.map((word) => (
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
                <th>Structure</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>to + verb</td>
                <td>purpose</td>
                <td>I study to get good marks.</td>
              </tr>

              <tr>
                <td>in order to</td>
                <td>more formal purpose</td>
                <td>She left early in order to catch the bus.</td>
              </tr>

              <tr>
                <td>so that</td>
                <td>purpose with subject</td>
                <td>I whispered so that nobody could hear me.</td>
              </tr>

              <tr>
                <td>for + noun/verb+ing</td>
                <td>function/use</td>
                <td>This knife is for cutting bread.</td>
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
            We use <b>to</b> and <b>in order to</b> to explain why we do
            something.
          </p>

          <p>
            We use <b>so that</b> when there is another subject and verb.
          </p>

          <p>
            We use <b>for</b> to explain the function of an object.
          </p>

          <p>Ukrainian “щоб” can often be translated as:</p>

          <ul>
            <li>to</li>
            <li>in order to</li>
            <li>so that</li>
          </ul>
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

                {grammarWords.map((word) => (
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
        <h2>🔄 Rewrite the sentences</h2>

        <div className="exercise-card">
          <p>1. I went to the supermarket. I wanted to buy fruit.</p>

          <p>→ I went to the supermarket to buy fruit.</p>

          <hr />

          <p>2. She wore headphones. She didn't want to disturb anyone.</p>

          <p>3. They left early. They wanted to catch the train.</p>

          <p>4. He studies English. He wants to work abroad.</p>

          <p>5. I wrote it down. I didn't want to forget it.</p>
        </div>
      </section>

      {/* EXERCISE 3 */}

      <section className="lesson">
        <h2>🎯 Match the Purpose</h2>

        <div className="exercise-card">
          <p>Match the object with its use:</p>

          <ul>
            <li>1. headphones</li>
            <li>2. backpack</li>
            <li>3. phone</li>
            <li>4. alarm clock</li>
          </ul>

          <hr />

          <ul>
            <li>a. for carrying books</li>
            <li>b. for waking up</li>
            <li>c. for listening to music</li>
            <li>d. for calling people</li>
          </ul>
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. Why do people learn English?</p>

          <p>2. What do you use your phone for?</p>

          <p>3. Why do students go to university?</p>

          <p>4. What do you do to relax?</p>

          <p>5. Why do people travel abroad?</p>
        </div>
      </section>

      {/* WRITING */}

      <section className="lesson">
        <h2>✍️ Writing Task</h2>

        <div className="exercise-card">
          <p>Write 6–8 sentences about your daily routine using:</p>

          <ul>
            <li>to</li>
            <li>in order to</li>
            <li>so that</li>
            <li>for</li>
          </ul>

          <p>Example:</p>

          <p>I go to bed early so that I feel rested in the morning.</p>
        </div>
      </section>
    </main>
  );
}

export default PurposeLesson;
