import "../index.css";
import { useState } from "react";

const grammarPatterns = [
  {
    title: "verb + -ing",
    example: "I enjoy spending time with my friends.",
  },
  {
    title: "verb + to + infinitive",
    example: "She decided to move abroad.",
  },
  {
    title: "verb + object + to + infinitive",
    example: "My parents encouraged me to study harder.",
  },
  {
    title: "make / let + object + infinitive",
    example: "My teacher made us rewrite the essay.",
  },
  {
    title: "preposition + -ing",
    example: "After finishing school, I went home.",
  },
];

function VerbPatterns() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const correctAnswers = {
    q1: "going",
    q2: "to improve",
    q3: "to apply",
    q4: "stay",
    q5: "working",
    q6: "meeting",
    q7: "to become",
    q8: "to speak",
    q9: "do",
    q10: "learning",
  };

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

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">B1+ Grammar Lesson</p>

        <h1>Verb Patterns 📚</h1>

        <p className="description">
          Learn how different verbs change the structure of a sentence.
        </p>
      </section>

      {/* GRAMMAR CARDS */}

      <section className="grid">
        {grammarPatterns.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>

            <p className="example">{item.example}</p>
          </div>
        ))}
      </section>

      {/* THEORY */}

      <section className="lesson">
        <h2>🧠 Grammar Focus</h2>

        <div className="exercise-card">
          <p>
            Some verbs are followed by <b>-ing</b>.
          </p>

          <p className="example">enjoy, avoid, finish, suggest</p>

          <p>Example: I enjoy reading articles online.</p>

          <hr />

          <p>
            Some verbs are followed by <b>to + infinitive</b>.
          </p>

          <p className="example">decide, hope, plan, want</p>

          <p>Example: She plans to travel next year.</p>

          <hr />

          <p>
            Some verbs use <b>object + to + infinitive</b>.
          </p>

          <p className="example">ask, encourage, advise, expect</p>

          <p>Example: My teacher encouraged me to apply for the competition.</p>

          <hr />

          <p>
            After <b>make</b> and <b>let</b>, we use infinitive without "to".
          </p>

          <p>Example: My boss made me stay late.</p>

          <hr />

          <p>
            After prepositions we use <b>-ing</b>.
          </p>

          <p>Example: Before leaving the house, I checked my phone.</p>
        </div>
      </section>

      {/* EXERCISE 1 */}

      <section className="lesson">
        <h2>✏️ Exercise 1 — Choose the correct answer</h2>

        <div className="exercise-card">
          <p>1. I avoid ___ to crowded places at weekends.</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="go">go</option>
            <option value="going">going</option>
            <option value="to go">to go</option>
          </select>

          <p>2. She wants ___ her English before university.</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="improving">improving</option>
            <option value="improve">improve</option>
            <option value="to improve">to improve</option>
          </select>

          <p>3. My teacher advised me ___ for the scholarship.</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="apply">apply</option>
            <option value="to apply">to apply</option>
            <option value="applying">applying</option>
          </select>

          <p>4. My parents let me ___ out with friends on Fridays.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="to stay">to stay</option>
            <option value="stay">stay</option>
            <option value="staying">staying</option>
          </select>

          <p>5. She is interested in ___ for international companies.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="work">work</option>
            <option value="working">working</option>
            <option value="to work">to work</option>
          </select>
        </div>
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>🌿 Exercise 2 — Complete the sentences</h2>

        <div className="exercise-card">
          <p>1. I really enjoy __________ new people.</p>
          <input type="text" placeholder="Type here..." />

          <p>2. She hopes __________ a doctor one day.</p>
          <input type="text" placeholder="Type here..." />

          <p>3. My parents encouraged me __________ more confidently.</p>
          <input type="text" placeholder="Type here..." />

          <p>4. The teacher made us __________ the task again.</p>
          <input type="text" placeholder="Type here..." />

          <p>5. After __________ the article, answer the questions.</p>
          <input type="text" placeholder="Type here..." />
        </div>
      </section>

      {/* EXERCISE 3 */}

      <section className="lesson">
        <h2>🔥 Exercise 3 — Mixed Verb Patterns</h2>

        <div className="exercise-card">
          <p>6. I enjoy ___ new languages.</p>

          <select onChange={(e) => handleChange("q6", e.target.value)}>
            <option value="">Choose</option>
            <option value="learn">learn</option>
            <option value="learning">learning</option>
            <option value="to learn">to learn</option>
          </select>

          <p>7. He decided ___ an engineer.</p>

          <select onChange={(e) => handleChange("q7", e.target.value)}>
            <option value="">Choose</option>
            <option value="becoming">becoming</option>
            <option value="become">become</option>
            <option value="to become">to become</option>
          </select>

          <p>8. Our teacher encouraged us ___ English more often.</p>

          <select onChange={(e) => handleChange("q8", e.target.value)}>
            <option value="">Choose</option>
            <option value="speak">speak</option>
            <option value="to speak">to speak</option>
            <option value="speaking">speaking</option>
          </select>

          <p>9. My boss made me ___ overtime last weekend.</p>

          <select onChange={(e) => handleChange("q9", e.target.value)}>
            <option value="">Choose</option>
            <option value="to do">to do</option>
            <option value="doing">doing</option>
            <option value="do">do</option>
          </select>

          <p>10. She is interested in ___ about psychology.</p>

          <select onChange={(e) => handleChange("q10", e.target.value)}>
            <option value="">Choose</option>
            <option value="learning">learning</option>
            <option value="learn">learn</option>
            <option value="to learn">to learn</option>
          </select>
        </div>

        <button onClick={checkAnswers}>Check answers</button>

        {score !== null && (
          <p className="score">You got {score} / 10 correct 🎯</p>
        )}
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. What activities do you enjoy doing in your free time?</p>

          <p>2. What do you hope to achieve this year?</p>

          <p>3. Has anyone ever encouraged you to try something new?</p>

          <p>4. Did your teachers ever make you redo homework?</p>

          <p>5. What subjects are you interested in learning more about?</p>
        </div>
      </section>
    </main>
  );
}

export default VerbPatterns;
