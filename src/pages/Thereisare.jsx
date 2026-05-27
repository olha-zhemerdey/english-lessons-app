import "../index.css";
import { useState } from "react";

const grammarWords = [
  "There is",
  "There are",
  "There isn't",
  "There aren't",
  "Is there?",
  "Are there?",
];

const quiz = [
  {
    id: 1,
    question: "________ a beautiful park near my house.",
    answer: "There is",
  },

  {
    id: 2,
    question: "________ many restaurants in the city centre.",
    answer: "There are",
  },

  {
    id: 3,
    question: "________ any milk in the fridge.",
    answer: "There isn't",
  },

  {
    id: 4,
    question: "________ enough chairs for everyone?",
    answer: "Are there",
  },

  {
    id: 5,
    question: "________ a cinema near here?",
    answer: "Is there",
  },

  {
    id: 6,
    question: "________ any good cafés in this area.",
    answer: "There aren't",
  },
];

function ThereIsThereAreLesson() {
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
        <p className="subtitle">English Grammar • B1 Level</p>

        <h1>There is / There are 🌍</h1>

        <p className="description">
          Learn how to describe places, objects and situations using there is
          and there are.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📚 Grammar Forms</h2>

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
                <th>Form</th>
                <th>Use</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>There is</td>
                <td>singular noun</td>
                <td>There is a library near my school.</td>
              </tr>

              <tr>
                <td>There are</td>
                <td>plural noun</td>
                <td>There are many students in the classroom.</td>
              </tr>

              <tr>
                <td>There isn't</td>
                <td>negative singular</td>
                <td>There isn't a bank here.</td>
              </tr>

              <tr>
                <td>There aren't</td>
                <td>negative plural</td>
                <td>There aren't any shops nearby.</td>
              </tr>

              <tr>
                <td>Is there?</td>
                <td>question singular</td>
                <td>Is there a pharmacy near here?</td>
              </tr>

              <tr>
                <td>Are there?</td>
                <td>question plural</td>
                <td>Are there any parks in your town?</td>
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
            <b>There is</b> is used with singular nouns.
          </p>

          <p>
            <b>There are</b> is used with plural nouns.
          </p>

          <p>
            We use <b>any</b> in negatives and questions.
          </p>

          <p>
            We often use this grammar to describe places, towns, rooms and
            cities.
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
        <h2>🏙 Describe the Picture</h2>

        <div className="exercise-card">
          <p>Imagine a modern city. Write sentences using:</p>

          <ul>
            <li>There is...</li>
            <li>There are...</li>
            <li>There isn't...</li>
            <li>There aren't...</li>
          </ul>

          <p>Example:</p>

          <p>There are many tall buildings in the city centre.</p>
        </div>
      </section>

      {/* EXERCISE 3 */}

      <section className="lesson">
        <h2>🎯 Find the Mistake</h2>

        <div className="exercise-card">
          <p>1. There is many cars on the street.</p>

          <p>2. There are a big supermarket near my house.</p>

          <p>3. Is there any restaurants in your town?</p>

          <p>4. There isn't any students in the classroom.</p>

          <p>5. There are a beautiful park in my city.</p>
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. Is there a good café near your home?</p>

          <p>2. Are there many parks in your city?</p>

          <p>3. Is there anything you would like to change in your town?</p>

          <p>4. Are there enough places for children in your area?</p>

          <p>5. What is there in your dream house?</p>
        </div>
      </section>

      {/* WRITING */}

      <section className="lesson">
        <h2>✍️ Writing Task</h2>

        <div className="exercise-card">
          <p>Write a short description of your town or neighbourhood using:</p>

          <ul>
            <li>There is</li>
            <li>There are</li>
            <li>There isn't</li>
            <li>There aren't</li>
          </ul>

          <p>Write 6–8 sentences.</p>
        </div>
      </section>
    </main>
  );
}

export default ThereIsThereAreLesson;
