import "../index.css";
import { useState } from "react";

const words = [
  {
    word: "feed",
    meaning: "give food to someone or something",
    example: "Please feed the cat.",
  },

  {
    word: "support",
    meaning: "help someone",
    example: "My friends support me.",
  },

  {
    word: "award",
    meaning: "a prize",
    example: "She won an award.",
  },

  {
    word: "give up",
    meaning: "stop trying",
    example: "Never give up.",
  },

  {
    word: "achievement",
    meaning: "something successful",
    example: "Graduation was a big achievement.",
  },

  {
    word: "protect",
    meaning: "keep safe",
    example: "Glasses protect your eyes.",
  },

  {
    word: "cheap",
    meaning: "not expensive",
    example: "This bag was cheap.",
  },

  {
    word: "torch",
    meaning: "portable light",
    example: "Take a torch camping.",
  },

  {
    word: "tent",
    meaning: "camping shelter",
    example: "We slept in a tent.",
  },

  {
    word: "charge",
    meaning: "put energy into a device",
    example: "I need to charge my phone.",
  },

  {
    word: "insect",
    meaning: "small six-legged animal",
    example: "An insect flew inside.",
  },
];

const correctAnswers = {
  q1: "feed",
  q2: "support",
  q3: "award",
  q4: "give up",
  q5: "achievement",
  q6: "protect",
  q7: "cheap",
  q8: "torch",
  q9: "tent",
  q10: "charge",
};

const grammarAnswers = {
  g1: "has been finished",
  g2: "have been given",
  g3: "has been solved",
  g4: "has been organized",
  g5: "have been supported",
};

function VocabularyLesson() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const [grammar, setGrammar] = useState({});
  const [grammarScore, setGrammarScore] = useState(null);

  const handleChange = (q, value) => {
    setAnswers((prev) => ({
      ...prev,
      [q]: value,
    }));
  };

  const handleGrammar = (q, value) => {
    setGrammar((prev) => ({
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

  const checkGrammar = () => {
    let points = 0;

    Object.keys(grammarAnswers).forEach((key) => {
      if (grammar[key]?.toLowerCase().trim() === grammarAnswers[key]) {
        points++;
      }
    });

    setGrammarScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">Vocabulary + Grammar</p>

        <h1>English Practice Lesson 🌿</h1>

        <p className="description">
          Learn useful vocabulary and practise grammar with interactive
          exercises.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📚 Vocabulary Box</h2>

        <div className="grid">
          {words.map((item) => (
            <div className="card" key={item.word}>
              <h3>{item.word}</h3>

              <p>{item.meaning}</p>

              <small>{item.example}</small>
            </div>
          ))}
        </div>
      </section>

      {/* EXERCISE 1 */}

      <section className="lesson">
        <h2>✏️ Exercise 1 — Choose the correct word</h2>

        <div className="exercise-card">
          <p>1. Please ___ the dog before you leave.</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>

            <option value="feed">feed</option>

            <option value="charge">charge</option>

            <option value="protect">protect</option>
          </select>

          <p>2. My parents always ___ me when I feel sad.</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>

            <option value="support">support</option>

            <option value="charge">charge</option>

            <option value="protect">protect</option>
          </select>

          <p>3. She won an ___ for her art project.</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>

            <option value="award">award</option>

            <option value="torch">torch</option>

            <option value="tent">tent</option>
          </select>

          <p>4. Never ___ your dreams.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>

            <option value="give up">give up</option>

            <option value="support">support</option>

            <option value="feed">feed</option>
          </select>

          <p>5. Passing the exam was a big ___.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>

            <option value="achievement">achievement</option>

            <option value="insect">insect</option>

            <option value="torch">torch</option>
          </select>

          <p>6. Sunglasses help ___ your eyes from the sun.</p>

          <select onChange={(e) => handleChange("q6", e.target.value)}>
            <option value="">Choose</option>

            <option value="protect">protect</option>

            <option value="charge">charge</option>

            <option value="feed">feed</option>
          </select>

          <p>7. This backpack was very ___.</p>

          <select onChange={(e) => handleChange("q7", e.target.value)}>
            <option value="">Choose</option>

            <option value="cheap">cheap</option>

            <option value="award">award</option>

            <option value="support">support</option>
          </select>

          <p>8. We used a ___ while camping at night.</p>

          <select onChange={(e) => handleChange("q8", e.target.value)}>
            <option value="">Choose</option>

            <option value="torch">torch</option>

            <option value="tent">tent</option>

            <option value="insect">insect</option>
          </select>

          <p>9. We slept in a ___ near the lake.</p>

          <select onChange={(e) => handleChange("q9", e.target.value)}>
            <option value="">Choose</option>

            <option value="tent">tent</option>

            <option value="torch">torch</option>

            <option value="charge">charge</option>
          </select>

          <p>10. I need to ___ my phone.</p>

          <select onChange={(e) => handleChange("q10", e.target.value)}>
            <option value="">Choose</option>

            <option value="charge">charge</option>

            <option value="protect">protect</option>

            <option value="feed">feed</option>
          </select>

          <button onClick={checkAnswers}>Check answers</button>

          {score !== null && (
            <p className="score">You got {score} / 10 correct 🎯</p>
          )}
        </div>
      </section>

      <section className="lesson">
        <h2>📖 Reading</h2>

        <div className="exercise-card">
          <h3>A Weekend in the Mountains</h3>

          <p>
            Last weekend, my friends and I decided to go camping in the
            mountains. We wanted a cheap holiday away from the busy city, so we
            packed our bags and left early in the morning. When we arrived, we
            put up our tent near a river and prepared dinner outside.
          </p>

          <p>
            During the evening, it became very dark, so we used torches to walk
            around the campsite. Unfortunately, there were many insects near the
            water, so we used special spray to protect ourselves. Luckily, I had
            also remembered to charge my phone before the trip, which was useful
            when we needed a map.
          </p>

          <p>
            Although the weather was cold at night, the experience was amazing.
            Camping helped us relax and spend more time in nature.
          </p>
        </div>
      </section>

      {/* READING QUESTIONS */}

      <section className="lesson">
        <h2>💬 Reading Questions</h2>

        <div className="exercise-card">
          <p>1. Why did they choose camping?</p>

          <p>2. Where did they put up the tent?</p>

          <p>3. Why did they use torches?</p>

          <p>4. What problem did they have near the river?</p>

          <p>5. Why was the phone useful?</p>
        </div>
      </section>

      {/* GRAMMAR */}

      <section className="lesson">
        <h2>🧠 Grammar — Present Perfect Passive</h2>

        <div className="exercise-card">
          <p>1. The work __________ (finish).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g1", e.target.value)}
          />

          <p>2. The awards __________ (give).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g2", e.target.value)}
          />

          <p>3. The problem __________ (solve).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g3", e.target.value)}
          />

          <p>4. The event __________ (organize).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g4", e.target.value)}
          />

          <p>5. The students __________ (support).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g5", e.target.value)}
          />

          <button onClick={checkGrammar}>Check grammar</button>

          {grammarScore !== null && (
            <p className="score">You got {grammarScore} / 5 correct ✨</p>
          )}
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. Have you ever slept in a tent?</p>

          <p>2. What do you usually take camping?</p>

          <p>3. How do you protect yourself from insects?</p>

          <p>4. Do you prefer cheap or expensive holidays?</p>

          <p>5. What achievements are you proud of?</p>
        </div>
      </section>
    </main>
  );
}

export default VocabularyLesson;
