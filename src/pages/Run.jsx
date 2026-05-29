import "../index.css";
import { useState } from "react";

const phrasalVerbs = [
  {
    verb: "run out of",
    meaning: "to use all of something",
    example: "We ran out of milk this morning.",
  },

  {
    verb: "run into",
    meaning: "to experience a problem or meet someone unexpectedly",
    example: "We ran into technical problems during the project.",
  },

  {
    verb: "run off",
    meaning: "to quickly print or prepare something",
    example: "Could you run off twenty copies for the class?",
  },

  {
    verb: "run up",
    meaning: "to accumulate costs or debt",
    example: "They ran up huge expenses during the trip.",
  },

  {
    verb: "run over",
    meaning: "to exceed time or budget",
    example: "The meeting ran over by thirty minutes.",
  },

  {
    verb: "run behind",
    meaning: "to be late or behind schedule",
    example: "Sorry, I’m running behind today.",
  },

  {
    verb: "run through",
    meaning: "to quickly review something",
    example: "Let’s run through the presentation one more time.",
  },
];

const quizAnswers = {
  q1: "run out of",
  q2: "ran into",
  q3: "ran over",
  q4: "run through",
  q5: "running behind",
};

function RunPhrasalVerbsLesson() {
  const [answers, setAnswers] = useState({});

  const [score, setScore] = useState(null);

  const [selectedVerb, setSelectedVerb] = useState("");

  const [dragAnswers, setDragAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const checkAnswers = () => {
    let points = 0;

    Object.keys(quizAnswers).forEach((key) => {
      if (answers[key] === quizAnswers[key]) {
        points++;
      }
    });

    setScore(points);
  };

  const handleDrop = (id) => {
    setDragAnswers((prev) => ({
      ...prev,
      [id]: selectedVerb,
    }));
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">B1+ English Lesson</p>

        <h1>RUN Phrasal Verbs 🏃</h1>

        <p className="description">
          Learn advanced phrasal verbs with “run” used in modern English
          conversations.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📚 Phrasal Verbs</h2>

        <div className="grid">
          {phrasalVerbs.map((item) => (
            <div className="card" key={item.verb}>
              <h3>{item.verb}</h3>

              <p>{item.meaning}</p>

              <small>{item.example}</small>
            </div>
          ))}
        </div>
      </section>

      {/* READING */}

      <section className="lesson">
        <h2>📖 Reading</h2>

        <div className="exercise-card">
          <h3>A Stressful Day at Work</h3>

          <p>
            Yesterday started badly. Our team ran out of coffee before an
            important meeting, and then we ran into several technical problems
            during the presentation.
          </p>

          <p>
            The meeting also ran over because everyone had too many questions.
            Meanwhile, our manager was running behind schedule and arrived
            twenty minutes late.
          </p>

          <p>
            Before the next meeting, we quickly ran through the presentation
            again to make sure everything was ready. By the end of the day, the
            company had run up extra expenses because of all the delays.
          </p>
        </div>
      </section>

      {/* QUESTIONS */}

      <section className="lesson">
        <h2>💬 Reading Questions</h2>

        <div className="exercise-card">
          <p>1. What did the team run out of?</p>

          <p>2. What problems did they run into?</p>

          <p>3. Why did the meeting run over?</p>

          <p>4. Why did they run through the presentation again?</p>

          <p>5. What caused extra expenses?</p>
        </div>
      </section>

      {/* GRAMMAR */}

      <section className="lesson">
        <h2>🧠 Grammar Focus</h2>

        <div className="exercise-card">
          <h3>Phrasal Verbs in Context</h3>

          <table className="grammar-table">
            <thead>
              <tr>
                <th>Phrasal Verb</th>
                <th>Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>run out of</td>
                <td>have no more of something</td>
              </tr>

              <tr>
                <td>run into</td>
                <td>experience a problem</td>
              </tr>

              <tr>
                <td>run behind</td>
                <td>be late</td>
              </tr>

              <tr>
                <td>run over</td>
                <td>exceed time</td>
              </tr>

              <tr>
                <td>run through</td>
                <td>review quickly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson">
        <h2>✏️ Quiz Time</h2>

        <div className="exercise-card">
          <p>1. We have ___ sugar.</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>

            <option value="run through">run through</option>

            <option value="run out of">run out of</option>

            <option value="run behind">run behind</option>
          </select>

          <p>2. We ___ several issues during the meeting.</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>

            <option value="ran into">ran into</option>

            <option value="ran off">ran off</option>

            <option value="ran over">ran over</option>
          </select>

          <p>3. The lesson ___ by fifteen minutes.</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>

            <option value="ran through">ran through</option>

            <option value="ran over">ran over</option>

            <option value="ran out of">ran out of</option>
          </select>

          <p>4. Let’s ___ the plan one more time.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>

            <option value="run through">run through</option>

            <option value="run behind">run behind</option>

            <option value="run up">run up</option>
          </select>

          <p>5. Sorry, I’m ___ today.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>

            <option value="running behind">running behind</option>

            <option value="running into">running into</option>

            <option value="running over">running over</option>
          </select>

          <button onClick={checkAnswers}>Check Answers</button>

          {score !== null && (
            <p className="score">You got {score} / 5 correct ✨</p>
          )}
        </div>
      </section>

      {/* SENTENCE TRANSFORMATION */}

      <section className="lesson">
        <h2>🔄 Sentence Transformation</h2>

        <div className="exercise-card">
          <h3>Rewrite the sentences using the phrasal verb in brackets.</h3>

          <p>
            1. We had no more coffee.
            <br />
          </p>

          <div className="answer-box">→ We __________________ coffee.</div>

          <br />

          <p>
            2. The meeting lasted longer than expected.
            <br />
          </p>

          <div className="answer-box">→ The meeting __________________.</div>

          <br />

          <p>
            3. I experienced several difficulties during the project.
            <br />
          </p>

          <div className="answer-box">
            → I __________________ several difficulties during the project.
          </div>

          <br />

          <p>
            4. Let’s quickly review the presentation.
            <br />
          </p>

          <div className="answer-box">
            → Let’s __________________ the presentation.
          </div>

          <br />

          <p>
            5. Sorry, I’m late today.
            <br />
          </p>

          <div className="answer-box">
            → Sorry, I’m __________________ today.
          </div>
        </div>
      </section>

      {/* DRAG & DROP */}

      <section className="lesson">
        <h2>🎯 Drag & Drop</h2>

        <div className="exercise-card">
          <div className="drag-words">
            {[
              "run out of",
              "run into",
              "run over",
              "run behind",
              "run through",
            ].map((word) => (
              <div
                key={word}
                draggable
                onDragStart={() => setSelectedVerb(word)}
                className="drag-word"
              >
                {word}
              </div>
            ))}
          </div>

          <br />

          <p>1. We ___ problems during the trip.</p>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("d1")}
          >
            {dragAnswers["d1"] || "Drop here"}
          </div>

          <p>2. Sorry, I’m ___ today.</p>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("d2")}
          >
            {dragAnswers["d2"] || "Drop here"}
          </div>

          <p>3. Let’s ___ the document quickly.</p>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("d3")}
          >
            {dragAnswers["d3"] || "Drop here"}
          </div>
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. Have you ever run into a serious problem at school?</p>

          <p>2. What do you usually do when you run behind schedule?</p>

          <p>3. Have you ever run out of water when it was too hot?</p>
        </div>
      </section>
      {/* BRITISH vs AMERICAN ENGLISH */}

      <section className="lesson">
        <h2>🇬🇧🇺🇸 British vs American English</h2>

        <div className="exercise-card">
          <h3>Different expressions, same meaning</h3>

          <table className="grammar-table">
            <thead>
              <tr>
                <th>American English</th>

                <th>British English</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>great</td>
                <td>brilliant</td>
              </tr>

              <tr>
                <td>ok / sure</td>
                <td>right / fine</td>
              </tr>

              <tr>
                <td>no problem</td>
                <td>no worries</td>
              </tr>

              <tr>
                <td>for sure</td>
                <td>definitely</td>
              </tr>

              <tr>
                <td>my take is</td>
                <td>my view is</td>
              </tr>

              <tr>
                <td>let’s go</td>
                <td>shall we go?</td>
              </tr>

              <tr>
                <td>sweet!</td>
                <td>lovely!</td>
              </tr>
            </tbody>
          </table>

          <br />

          <p>
            📌 British English often sounds more polite and indirect, while
            American English is usually more casual and direct.
          </p>
        </div>
      </section>

      {/* MATCHING TASK */}

      <section className="lesson">
        <h2>✏️ Match the Expressions</h2>

        <div className="exercise-card">
          <p>Match the American phrases with their British equivalents.</p>

          <br />

          <div className="matching-grid">
            <div className="match-column">
              <h3>🇺🇸 American English</h3>

              <p>1. great</p>

              <p>2. no problem</p>

              <p>3. for sure</p>

              <p>4. my take is</p>

              <p>5. let’s go</p>
            </div>

            <div className="match-column">
              <h3>🇬🇧 British English</h3>

              <p>a. definitely</p>

              <p>b. shall we go?</p>

              <p>c. brilliant</p>

              <p>d. my view is</p>

              <p>e. no worries</p>
            </div>
          </div>

          <br />

          <div className="answer-box">
            <p>Example answer: 1 → c</p>
          </div>
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. Which English accent do you prefer: British or American?</p>

          <p>2. Which expressions sound more natural to you?</p>

          <p>3. Do you think British English sounds more formal?</p>

          <p>
            4. Which version of English would you like to learn more deeply?
          </p>
        </div>
      </section>
    </main>
  );
}

export default RunPhrasalVerbsLesson;
