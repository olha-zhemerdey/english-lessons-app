import "../index.css";
import { useState } from "react";

const adverbs = [
  {
    word: "deeply",
    meaning: "strongly / emotionally",
    example: "I deeply admire my parents.",
  },
  {
    word: "passionately",
    meaning: "with strong feelings",
    example: "She passionately loves music.",
  },
  {
    word: "heavily",
    meaning: "a lot / strongly",
    example: "It rained heavily all night.",
  },
  {
    word: "fluently",
    meaning: "smoothly and easily",
    example: "He speaks English fluently.",
  },
  {
    word: "quietly",
    meaning: "without noise",
    example: "Please speak quietly.",
  },
  {
    word: "suddenly",
    meaning: "quickly and unexpectedly",
    example: "Suddenly, the lights went off.",
  },
  {
    word: "slowly",
    meaning: "not fast",
    example: "Walk slowly on the ice.",
  },
  {
    word: "softly",
    meaning: "in a gentle way",
    example: "She softly whispered my name.",
  },
];

const collocations = [
  {
    phrase: "difference between",
    example: "There’s a difference between lend and borrow.",
  },
  {
    phrase: "attitude to",
    example: "You should improve your attitude to life.",
  },
  {
    phrase: "access to",
    example: "I can’t get access to my account.",
  },
  {
    phrase: "increase in",
    example: "There has been an increase in sales.",
  },
  {
    phrase: "alternative to",
    example: "Walking is an alternative to driving.",
  },
  {
    phrase: "by heart",
    example: "Learn these words by heart.",
  },
];

function Lesson5() {
  const [answers, setAnswers] = useState({});
  const [score1, setScore1] = useState(null);
  const [score2, setScore2] = useState(null);

  const correctExercise1 = {
    q1: "deeply",
    q2: "hard",
    q3: "suddenly",
    q4: "slowly",
    q5: "heavily",
  };

  const correctExercise2 = {
    p1: "between",
    p2: "into",
    p3: "to",
    p4: "on",
    p5: "with",
  };

  const handleChange = (q, value) => {
    setAnswers((prev) => ({
      ...prev,
      [q]: value,
    }));
  };

  const checkExercise1 = () => {
    let points = 0;

    Object.keys(correctExercise1).forEach((key) => {
      if (answers[key] === correctExercise1[key]) {
        points++;
      }
    });

    setScore1(points);
  };

  const checkExercise2 = () => {
    let points = 0;

    Object.keys(correctExercise2).forEach((key) => {
      if (answers[key] === correctExercise2[key]) {
        points++;
      }
    });

    setScore2(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">Lesson 05</p>

        <h1>Adverbs & Prepositions ✨</h1>

        <p className="description">
          Learn how to use adverbs naturally and improve your grammar with noun
          + preposition phrases.
        </p>
      </section>

      {/* ADVERBS */}

      <section className="lesson">
        <h2>🌿 Adverbs Vocabulary</h2>

        <div className="grid">
          {adverbs.map((item) => (
            <div className="card" key={item.word}>
              <h2>{item.word}</h2>

              <p className="meaning">{item.meaning}</p>

              <p className="example">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLOCATIONS */}

      <section className="lesson">
        <h2>📚 Noun + Preposition</h2>

        <div className="grid">
          {collocations.map((item) => (
            <div className="card" key={item.phrase}>
              <h2>{item.phrase}</h2>

              <p className="example">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXERCISE 1 */}

      <section className="lesson">
        <h2>🧩 Exercise 1 — Choose the correct adverb</h2>

        <div className="exercise-card">
          <p>1. I love Cynthia ___ .</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="heavily">heavily</option>
            <option value="deeply">deeply</option>
            <option value="fluently">fluently</option>
          </select>

          <p>2. The soldiers fought ___ .</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="hard">hard</option>
            <option value="softly">softly</option>
            <option value="quietly">quietly</option>
          </select>

          <p>3. Andrew left so ___ .</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="softly">softly</option>
            <option value="suddenly">suddenly</option>
            <option value="fluently">fluently</option>
          </select>

          <p>4. Relax and breathe ___ .</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="slowly">slowly</option>
            <option value="hard">hard</option>
            <option value="suddenly">suddenly</option>
          </select>

          <p>5. It has been raining very ___ .</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="heavily">heavily</option>
            <option value="quietly">quietly</option>
            <option value="deeply">deeply</option>
          </select>
        </div>

        <button onClick={checkExercise1}>Check answers</button>

        {score1 !== null && (
          <p className="score">You got {score1} / 5 correct 🎯</p>
        )}
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>✨ Exercise 2 — Complete with prepositions</h2>

        <div className="exercise-card">
          <p>1. There’s a difference ___ lend and borrow.</p>

          <select onChange={(e) => handleChange("p1", e.target.value)}>
            <option value="">Choose</option>
            <option value="between">between</option>
            <option value="into">into</option>
            <option value="on">on</option>
          </select>

          <p>2. There’s a need for more research ___ renewable energy.</p>

          <select onChange={(e) => handleChange("p2", e.target.value)}>
            <option value="">Choose</option>
            <option value="into">into</option>
            <option value="to">to</option>
            <option value="with">with</option>
          </select>

          <p>3. Improve your attitude ___ life.</p>

          <select onChange={(e) => handleChange("p3", e.target.value)}>
            <option value="">Choose</option>
            <option value="to">to</option>
            <option value="between">between</option>
            <option value="with">with</option>
          </select>

          <p>4. How much do you spend on food every week ___ average?</p>

          <select onChange={(e) => handleChange("p4", e.target.value)}>
            <option value="">Choose</option>
            <option value="on">on</option>
            <option value="into">into</option>
            <option value="between">between</option>
          </select>

          <p>5. The trouble ___ you is that you don’t listen.</p>

          <select onChange={(e) => handleChange("p5", e.target.value)}>
            <option value="">Choose</option>
            <option value="with">with</option>
            <option value="to">to</option>
            <option value="into">into</option>
          </select>
        </div>

        <button onClick={checkExercise2}>Check answers</button>

        {score2 !== null && (
          <p className="score">You got {score2} / 5 correct ✨</p>
        )}
      </section>

      {/* GRAMMAR */}

      <section className="lesson">
        <h2>📖 Grammar Tip</h2>

        <div className="exercise-card">
          <p>
            <b>Adverbs</b> describe verbs, adjectives or other adverbs.
          </p>

          <p>
            Example: She speaks <b>fluently</b>.
          </p>

          <hr />

          <p>
            <b>Noun + preposition</b> phrases are fixed combinations.
          </p>

          <p>
            Example: access <b>to</b>, increase <b>in</b>, attitude <b>to</b>.
          </p>
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🧠 Vocabulary Exercise — Collocations & Phrases</h2>

        <div className="exercise-card">
          <p>Choose the correct answer.</p>

          {/* QUESTION 1 */}
          <p>1. Students should have access ___ good education.</p>

          <select>
            <option value="">Choose</option>
            <option>for</option>
            <option>to</option>
            <option>at</option>
          </select>

          {/* QUESTION 2 */}
          <p>2. My attitude ___ exams has changed this year.</p>

          <select>
            <option value="">Choose</option>
            <option>for</option>
            <option>to</option>
            <option>about</option>
          </select>

          {/* QUESTION 3 */}
          <p>3. There has been a big increase ___ food prices.</p>

          <select>
            <option value="">Choose</option>
            <option>to</option>
            <option>in</option>
            <option>for</option>
          </select>

          {/* QUESTION 4 */}
          <p>4. We need to change the plan ___ the bad weather.</p>

          <select>
            <option value="">Choose</option>
            <option>because</option>
            <option>because of</option>
            <option>despite</option>
          </select>

          {/* QUESTION 5 */}
          <p>5. We need to find an alternative ___ this plan.</p>

          <select>
            <option value="">Choose</option>
            <option>for</option>
            <option>with</option>
            <option>to</option>
          </select>

          {/* QUESTION 6 */}
          <p>6. She learned the poem ___ heart.</p>

          <select>
            <option value="">Choose</option>
            <option>with</option>
            <option>by</option>
            <option>from</option>
          </select>

          {/* QUESTION 7 */}
          <p>7. His positive attitude ___ work impressed everyone.</p>

          <select>
            <option value="">Choose</option>
            <option>to</option>
            <option>for</option>
            <option>on</option>
          </select>

          {/* QUESTION 8 */}
          <p>8. Scientists noticed an increase ___ temperature.</p>

          <select>
            <option value="">Choose</option>
            <option>in</option>
            <option>to</option>
            <option>at</option>
          </select>

          {/* QUESTION 9 */}
          <p>
            9. Online learning became an alternative ___ traditional classes.
          </p>

          <select>
            <option value="">Choose</option>
            <option>with</option>
            <option>to</option>
            <option>for</option>
          </select>

          {/* QUESTION 10 */}
          <p>10. I know this song ___ heart.</p>

          <select>
            <option value="">Choose</option>
            <option>on</option>
            <option>by</option>
            <option>from</option>
          </select>
        </div>
      </section>

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>• What do you feel deeply about?</p>

          <p>• Do you usually work hard or slowly?</p>

          <p>• What is your attitude to using phone more than 2 hours a day?</p>

          <p>• Do you prefer speaking quietly or loudly?</p>

          <p>• What things do you learn by heart?</p>
        </div>
      </section>

      {/* WRITING */}

      <section className="lesson">
        <h2>✍️ Writing Task</h2>

        <div className="exercise-card">
          <p>
            Write a short paragraph about your goals and attitude to studying.
          </p>

          <p>Use:</p>

          <p>
            <b>deeply, fluently, slowly, attitude to, access to, by heart</b>
          </p>

          <textarea placeholder="Write here..." />
        </div>
      </section>

      <section className="lesson">
        <h2>🌿 Vocabulary Practice — Nature, Life & Success</h2>

        <div className="exercise-card">
          <p>Choose the correct word.</p>

          {/* QUESTION 1 */}
          <p>1. Plants need water and sunlight to ___ well.</p>

          <select>
            <option value="">Choose</option>
            <option>protect</option>
            <option>grow</option>
            <option>behave</option>
          </select>

          {/* QUESTION 2 */}
          <p>2. Birds build a ___ in trees.</p>

          <select>
            <option value="">Choose</option>
            <option>solution</option>
            <option>nest</option>
            <option>dream</option>
          </select>

          {/* QUESTION 3 */}
          <p>3. Parents should ___ their children from danger.</p>

          <select>
            <option value="">Choose</option>
            <option>protect</option>
            <option>describe</option>
            <option>bring up</option>
          </select>

          {/* QUESTION 4 */}
          <p>4. My grandmother helped to ___ me and my brother.</p>

          <select>
            <option value="">Choose</option>
            <option>bring up</option>
            <option>dream</option>
            <option>grow</option>
          </select>

          {/* QUESTION 5 */}
          <p>5. Can you ___ your best friend?</p>

          <select>
            <option value="">Choose</option>
            <option>behave</option>
            <option>describe</option>
            <option>decide</option>
          </select>

          {/* QUESTION 6 */}
          <p>6. He always tries to ___ politely at school.</p>

          <select>
            <option value="">Choose</option>
            <option>behave</option>
            <option>dream</option>
            <option>protect</option>
          </select>

          {/* QUESTION 7 */}
          <p>7. My biggest ___ is to travel around the world.</p>

          <select>
            <option value="">Choose</option>
            <option>decision</option>
            <option>dream</option>
            <option>solution</option>
          </select>

          {/* QUESTION 8 */}
          <p>8. We finally found a ___ to the problem.</p>

          <select>
            <option value="">Choose</option>
            <option>success</option>
            <option>solution</option>
            <option>iron</option>
          </select>

          {/* QUESTION 9 */}
          <p>9. She made the right ___ and changed her job.</p>

          <select>
            <option value="">Choose</option>
            <option>decision</option>
            <option>nest</option>
            <option>key</option>
          </select>

          {/* QUESTION 10 */}
          <p>10. Hard work is the ___ to success.</p>

          <select>
            <option value="">Choose</option>
            <option>iron</option>
            <option>key</option>
            <option>dream</option>
          </select>

          {/* QUESTION 11 */}
          <p>11. He became rich after his business was a great ___.</p>

          <select>
            <option value="">Choose</option>
            <option>success</option>
            <option>solution</option>
            <option>decision</option>
          </select>

          {/* QUESTION 12 */}
          <p>12. Spinach is rich in ___.</p>

          <select>
            <option value="">Choose</option>
            <option>iron</option>
            <option>nest</option>
            <option>dream</option>
          </select>

          {/* QUESTION 13 */}
          <p>13. My parents always ___ care of me when I’m ill.</p>

          <select>
            <option value="">Choose</option>
            <option>grow</option>
            <option>take</option>
            <option>describe</option>
          </select>

          {/* QUESTION 14 */}
          <p>14. It was difficult to ___ what to do next.</p>

          <select>
            <option value="">Choose</option>
            <option>behave</option>
            <option>decide</option>
            <option>protect</option>
          </select>

          {/* QUESTION 15 */}
          <p>15. She comes from a very ___ family.</p>

          <select>
            <option value="">Choose</option>
            <option>rich</option>
            <option>iron</option>
            <option>key</option>
          </select>
        </div>
      </section>
    </main>
  );
}

export default Lesson5;
