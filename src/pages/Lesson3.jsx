import "../index.css";
import { useState } from "react";

const words = [
  {
    word: "take care",
    meaning: "look after someone",
    example: "Take care of your dog.",
  },
  { word: "feed", meaning: "give food", example: "Feed the cat." },
  { word: "admire", meaning: "respect someone", example: "I admire her." },
  { word: "decide", meaning: "choose", example: "We decided to stay." },
  {
    word: "successful",
    meaning: "achieving good results",
    example: "She is successful in her career.",
  },
  { word: "find", meaning: "discover", example: "I can’t find my keys." },
  { word: "fall", meaning: "move down accidentally", example: "He fell down." },
  { word: "award", meaning: "a prize", example: "She won an award." },
  {
    word: "common",
    meaning: "usual / normal",
    example: "This mistake is very common.",
  },
  {
    word: "support",
    meaning: "help someone",
    example: "Friends support each other.",
  },
  {
    word: "move forward",
    meaning: "continue progressing",
    example: "We need to move forward.",
  },
  { word: "give up", meaning: "stop trying", example: "Never give up." },
  {
    word: "achievement",
    meaning: "something you achieved",
    example: "Passing the exam is an achievement.",
  },
  {
    word: "something",
    meaning: "an unspecified thing",
    example: "I need something to drink.",
  },
  {
    word: "be proud",
    meaning: "feel satisfaction",
    example: "Be proud of your work.",
  },
  { word: "fail", meaning: "not succeed", example: "Don’t fail the exam." },
  { word: "pass", meaning: "succeed in exam", example: "She passed the test." },
  { word: "solve", meaning: "find answer", example: "We solved the problem." },
  {
    word: "hope",
    meaning: "want something to happen",
    example: "I hope you are okay.",
  },
];

function Lesson3() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [grammarScore, setGrammarScore] = useState(null);
  const [exercise3, setExercise3] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const [exercise3Score, setExercise3Score] = useState(null);

  const handleExercise3 = (q, value) => {
    setExercise3((prev) => ({
      ...prev,
      [q]: value,
    }));
  };

  const checkExercise3 = () => {
    const correct = {
      q1: "a thing you achieved",
      q2: "to help someone",
      q3: "to stop trying",
      q4: "to respect someone",
      q5: "to continue progressing",
    };

    let points = 0;

    Object.keys(correct).forEach((key) => {
      if (exercise3[key] === correct[key]) {
        points++;
      }
    });

    setExercise3Score(points);
  };

  const correctAnswers = {
    q1: "feed",
    q2: "support",
    q3: "award",
    q4: "give up",
    q5: "achievement",
  };

  const grammarAnswers = {
    g1: "has been solved",
    g2: "have been given",
    g3: "has been awarded",
  };

  const handleChange = (q, value) => {
    setAnswers({
      ...answers,
      [q]: value,
    });
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

  const checkGrammarAnswers = () => {
    let points = 0;

    Object.keys(grammarAnswers).forEach((key) => {
      if (answers[key] === grammarAnswers[key]) {
        points++;
      }
    });

    setGrammarScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">Lesson 03</p>

        <h1>Success & Motivation ✨</h1>

        <p className="description">
          Learn vocabulary about goals, achievements and Present Perfect
          Passive.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="grid">
        {words.map((item) => (
          <div className="card" key={item.word}>
            <h2>{item.word}</h2>

            <p className="meaning">{item.meaning}</p>

            <p className="example">{item.example}</p>
          </div>
        ))}
      </section>

      {/* EXERCISE 1 */}

      {/* EXERCISE 1 */}

      <section className="lesson">
        <h2>🌿 Exercise 1 — Choose the correct word</h2>

        <div className="exercise-card">
          <p>1. Please ___ the dog before you leave.</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="feed">feed</option>
            <option value="sell">sell</option>
            <option value="move">move</option>
          </select>

          <p>2. My parents always ___ me when I feel sad.</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="support">support</option>
            <option value="fall">fall</option>
            <option value="pass">pass</option>
          </select>

          <p>3. She won an ___ for her art project.</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="award">award</option>
            <option value="alarm">alarm</option>
            <option value="event">event</option>
          </select>

          <p>4. Never ___ your dreams.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="give up">give up</option>
            <option value="move">move</option>
            <option value="decide">decide</option>
          </select>

          <p>5. Passing the exam was a huge ___.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="achievement">achievement</option>
            <option value="hope">hope</option>
            <option value="something">something</option>
          </select>

          <p>6. I really ___ people who work hard.</p>

          <select onChange={(e) => handleChange("q6", e.target.value)}>
            <option value="">Choose</option>
            <option value="admire">admire</option>
            <option value="feed">feed</option>
            <option value="solve">solve</option>
          </select>

          <p>7. It is very ___ to feel nervous before exams.</p>

          <select onChange={(e) => handleChange("q7", e.target.value)}>
            <option value="">Choose</option>
            <option value="common">common</option>
            <option value="successful">successful</option>
            <option value="proud">proud</option>
          </select>

          <p>8. We need to ___ and continue working.</p>

          <select onChange={(e) => handleChange("q8", e.target.value)}>
            <option value="">Choose</option>
            <option value="move forward">move forward</option>
            <option value="fall">fall</option>
            <option value="give up">give up</option>
          </select>

          <p>9. I hope we can ___ a solution together.</p>

          <select onChange={(e) => handleChange("q9", e.target.value)}>
            <option value="">Choose</option>
            <option value="find">find</option>
            <option value="feed">feed</option>
            <option value="sell">sell</option>
          </select>

          <p>10. She finally ___ to study abroad.</p>

          <select onChange={(e) => handleChange("q10", e.target.value)}>
            <option value="">Choose</option>
            <option value="decided">decided</option>
            <option value="supported">supported</option>
            <option value="passed">passed</option>
          </select>
        </div>

        <button onClick={checkAnswers}>Check answers</button>

        {score !== null && <p className="score">You got {score} / 10 🎯</p>}
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>✏️ Exercise 2 — Complete the sentences</h2>

        <div className="exercise-card">
          <p>1. I’m very proud of my biggest __________.</p>
          <input type="text" placeholder="Type here..." />

          <p>2. Don’t __________ even if the task is difficult.</p>
          <input type="text" placeholder="Type here..." />

          <p>3. My friends always __________ me.</p>
          <input type="text" placeholder="Type here..." />

          <p>4. We hope to __________ the problem soon.</p>
          <input type="text" placeholder="Type here..." />

          <p>5. It is common to __________ mistakes while learning.</p>
          <input type="text" placeholder="Type here..." />

          <p>6. She was very happy when she __________ the exam.</p>
          <input type="text" placeholder="Type here..." />

          <p>7. I really __________ successful people.</p>
          <input type="text" placeholder="Type here..." />

          <p>8. We need to __________ after failure.</p>
          <input type="text" placeholder="Type here..." />
        </div>
      </section>

      {/* EXERCISE 3 */}

      <section className="lesson">
        <h2>🧩 Exercise 3 — Match the words with meanings</h2>

        <div className="exercise-card">
          <p>1. achievement</p>
          <select onChange={(e) => handleExercise3("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="a thing you achieved">a thing you achieved</option>
            <option value="to stop trying">to stop trying</option>
            <option value="to help someone">to help someone</option>
          </select>

          <p>2. support</p>
          <select onChange={(e) => handleExercise3("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="to help someone">to help someone</option>
            <option value="to choose">to choose</option>
            <option value="to lose hope">to lose hope</option>
          </select>

          <p>3. give up</p>
          <select onChange={(e) => handleExercise3("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="to stop trying">to stop trying</option>
            <option value="to continue">to continue</option>
            <option value="to admire">to admire</option>
          </select>

          <p>4. admire</p>
          <select onChange={(e) => handleExercise3("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="to respect someone">to respect someone</option>
            <option value="to feed someone">to feed someone</option>
            <option value="to solve something">to solve something</option>
          </select>

          <p>5. move forward</p>
          <select onChange={(e) => handleExercise3("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="to continue progressing">
              to continue progressing
            </option>
            <option value="to fall down">to fall down</option>
            <option value="to fail">to fail</option>
          </select>
        </div>

        <button onClick={checkExercise3}>Check answers</button>

        {exercise3Score !== null && (
          <p className="score">You got {exercise3Score} / 5 🎯</p>
        )}
      </section>

      {/* EXERCISE 4 */}

      <section className="lesson">
        <h2>📚 Grammar — Present Perfect Passive</h2>

        <div className="exercise-card">
          <p className="hint">Structure:</p>

          <p>
            <b>has / have + been + V3</b>
          </p>

          <p>Example:</p>

          <p>The problem has been solved.</p>
        </div>
      </section>

      {/* EXERCISE 5 */}

      <section className="lesson">
        <h2>✨ Exercise 5 — Choose the correct grammar form</h2>

        <div className="exercise-card">
          <p>1. The project __________ successfully.</p>

          <select onChange={(e) => handleChange("g1", e.target.value)}>
            <option value="">Choose</option>
            <option value="has been finished">has been finished</option>
            <option value="has finished">has finished</option>
            <option value="have been finish">have been finish</option>
          </select>

          <p>2. The winners __________ an award.</p>

          <select onChange={(e) => handleChange("g2", e.target.value)}>
            <option value="">Choose</option>
            <option value="have been given">have been given</option>
            <option value="has gave">has gave</option>
            <option value="have gave">have gave</option>
          </select>

          <p>3. The problem __________ already.</p>

          <select onChange={(e) => handleChange("g3", e.target.value)}>
            <option value="">Choose</option>
            <option value="has been solved">has been solved</option>
            <option value="has solved">has solved</option>
            <option value="have solve">have solve</option>
          </select>

          <p>4. A new event __________ this month.</p>

          <select onChange={(e) => handleChange("g4", e.target.value)}>
            <option value="">Choose</option>
            <option value="has been organized">has been organized</option>
            <option value="has organized">has organized</option>
            <option value="have been organize">have been organize</option>
          </select>

          <p>5. Many students __________ by their teachers.</p>

          <select onChange={(e) => handleChange("g5", e.target.value)}>
            <option value="">Choose</option>
            <option value="have been supported">have been supported</option>
            <option value="have supported">have supported</option>
            <option value="has been support">has been support</option>
          </select>
        </div>

        <button onClick={checkGrammarAnswers}>Check grammar answers</button>

        {grammarScore !== null && (
          <p className="score">You got {grammarScore} / 5 ✨</p>
        )}
      </section>

      {/* EXERCISE 6 */}

      <section className="lesson">
        <h2>🗣 Writing Practice</h2>

        <div className="exercise-card">
          <p>1. Write about an achievement you are proud of.</p>

          <textarea placeholder="Write here..." />

          <p>2. Describe a difficult situation you didn’t give up on.</p>

          <textarea placeholder="Write here..." />

          <p>3. Who supports you the most in life?</p>

          <textarea placeholder="Write here..." />

          <p>4. What successful person do you admire?</p>

          <textarea placeholder="Write here..." />
        </div>
      </section>
    </main>
  );
}

export default Lesson3;
