import "../index.css";
import { useState } from "react";

const vocabulary = [
  {
    word: "difference between",
    meaning: "how two things are not the same",
    example: "What is the difference between a laptop and a tablet?",
  },

  {
    word: "attitude to",
    meaning: "the way you think or feel about something",
    example: "Her attitude to learning is positive.",
  },

  {
    word: "access to",
    meaning: "the opportunity to use or get something",
    example: "Students have access to online courses.",
  },

  {
    word: "increase in",
    meaning: "a rise in something",
    example: "There has been an increase in prices.",
  },

  {
    word: "alternative to",
    meaning: "something different instead of another thing",
    example: "Walking is an alternative to driving.",
  },

  {
    word: "by heart",
    meaning: "from memory",
    example: "She knows the poem by heart.",
  },

  {
    word: "warm",
    meaning: "slightly hot or comfortable",
    example: "It was warm inside the café.",
  },

  {
    word: "fail",
    meaning: "not succeed",
    example: "He failed the exam.",
  },

  {
    word: "swot",
    meaning: "study very hard",
    example: "She swotted all night before the test.",
  },

  {
    word: "despite",
    meaning: "without being affected by something",
    example: "Despite the rain, we went out.",
  },

  {
    word: "suddenly",
    meaning: "quickly and unexpectedly",
    example: "Suddenly, the lights went off.",
  },

  {
    word: "softly",
    meaning: "quietly and gently",
    example: "She spoke softly.",
  },
];

const vocabularyQuiz = [
  {
    id: 1,
    question: "What is the ___ these two phones?",
    answer: "difference between",
  },

  {
    id: 2,
    question: "His ___ school is very positive.",
    answer: "attitude to",
  },

  {
    id: 3,
    question: "Students now have better ___ education.",
    answer: "access to",
  },

  {
    id: 4,
    question: "There has been an ___ food prices.",
    answer: "increase in",
  },

  {
    id: 5,
    question: "Cycling is a healthy ___ driving.",
    answer: "alternative to",
  },

  {
    id: 6,
    question: "I learned the speech ___.",
    answer: "by heart",
  },

  {
    id: 7,
    question: "Although it was cold outside, the room felt ___.",
    answer: "warm",
  },

  {
    id: 8,
    question: "If you don’t study, you might ___.",
    answer: "fail",
  },

  {
    id: 9,
    question: "She had to ___ before the final exam.",
    answer: "swot",
  },

  {
    id: 10,
    question: "___ being tired, he finished the project.",
    answer: "despite",
  },

  {
    id: 11,
    question: "The dog barked ___ in the middle of the night.",
    answer: "suddenly",
  },

  {
    id: 12,
    question: "She closed the door ___ so nobody woke up.",
    answer: "softly",
  },
];

const passiveAnswers = {
  g1: "has been finished",
  g2: "has been built",
  g3: "have been invited",
  g4: "has been cleaned",
  g5: "have been sent",
};

const lendBorrowAnswers = {
  l1: "lend",
  l2: "borrow",
  l3: "lend",
  l4: "borrow",
  l5: "lend",
};

function B1Lesson() {
  const [answers, setAnswers] = useState({});

  const [score, setScore] = useState(null);

  const [grammar, setGrammar] = useState({});

  const [grammarScore, setGrammarScore] = useState(null);

  const [lendBorrow, setLendBorrow] = useState({});

  const [lendBorrowScore, setLendBorrowScore] = useState(null);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleGrammar = (id, value) => {
    setGrammar((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLendBorrow = (id, value) => {
    setLendBorrow((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const checkAnswers = () => {
    let points = 0;

    vocabularyQuiz.forEach((item) => {
      if (answers[item.id]?.toLowerCase().trim() === item.answer) {
        points++;
      }
    });

    setScore(points);
  };

  const checkGrammar = () => {
    let points = 0;

    Object.keys(passiveAnswers).forEach((key) => {
      if (grammar[key]?.toLowerCase().trim() === passiveAnswers[key]) {
        points++;
      }
    });

    setGrammarScore(points);
  };

  const checkLendBorrow = () => {
    let points = 0;

    Object.keys(lendBorrowAnswers).forEach((key) => {
      if (lendBorrow[key] === lendBorrowAnswers[key]) {
        points++;
      }
    });

    setLendBorrowScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">B1 English Lesson</p>

        <h1>Vocabulary + Grammar 📚</h1>

        <p className="description">
          Practise useful B1 vocabulary, Present Perfect Passive and the
          difference between lend and borrow.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📖 Vocabulary Box</h2>

        <div className="grid">
          {vocabulary.map((item) => (
            <div className="card" key={item.word}>
              <h3>{item.word}</h3>

              <p>{item.meaning}</p>

              <small>{item.example}</small>
            </div>
          ))}
        </div>
      </section>

      {/* READING */}

      <section className="lesson">
        <h2>📚 Reading</h2>

        <div className="exercise-card">
          <h3>Preparing for Exams</h3>

          <p>
            Many students have a different attitude to exams. Some people swot
            for hours every day, while others prefer a more relaxed approach.
            Recently, there has been an increase in online learning, which gives
            students easier access to information and study materials.
          </p>

          <p>
            Despite the pressure, students should remember that failing one exam
            is not the end of the world. Suddenly, unexpected situations can
            happen during a test, but staying calm is important. Teachers often
            speak softly to help nervous students feel warm and comfortable.
          </p>

          <p>
            Some students learn whole texts by heart, while others look for
            alternative ways to remember information.
          </p>
        </div>
      </section>

      {/* QUESTIONS */}

      <section className="lesson">
        <h2>💬 Reading Questions</h2>

        <div className="exercise-card">
          <p>1. What has increased recently?</p>

          <p>2. Why do teachers speak softly?</p>

          <p>3. What do some students learn by heart?</p>

          <p>4. What can happen suddenly during exams?</p>

          <p>5. How do students prepare for exams differently?</p>
        </div>
      </section>

      {/* VOCABULARY EXERCISE */}

      <section className="lesson">
        <h2>✏️ Complete the Sentences</h2>

        <div className="exercise-card">
          {vocabularyQuiz.map((item) => (
            <div key={item.id}>
              <p>
                {item.id}. {item.question}
              </p>

              <input
                type="text"
                placeholder="Your answer..."
                onChange={(e) => handleChange(item.id, e.target.value)}
              />
            </div>
          ))}

          <button onClick={checkAnswers}>Check Answers</button>

          {score !== null && (
            <p className="score">You got {score} / 12 correct 🎯</p>
          )}
        </div>
      </section>

      {/* PRESENT PERFECT PASSIVE */}

      <section className="lesson">
        <h2>🧠 Present Perfect Passive</h2>

        <div className="exercise-card">
          <table className="grammar-table">
            <thead>
              <tr>
                <th>Structure</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>have/has been + V3</td>

                <td>The work has been finished.</td>
              </tr>
            </tbody>
          </table>

          <br />

          <p>
            We use the Present Perfect Passive when the action is more important
            than the person who did it.
          </p>

          <p>Example:</p>

          <p>The invitations have been sent.</p>
        </div>
      </section>

      {/* GRAMMAR EXERCISE */}

      <section className="lesson">
        <h2>✍️ Present Perfect Passive Practice</h2>

        <div className="exercise-card">
          <p>1. The project __________ (finish).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g1", e.target.value)}
          />

          <p>2. A new school __________ (build).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g2", e.target.value)}
          />

          <p>3. All the guests __________ (invite).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g3", e.target.value)}
          />

          <p>4. The room __________ (clean).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g4", e.target.value)}
          />

          <p>5. The emails __________ (send).</p>

          <input
            type="text"
            onChange={(e) => handleGrammar("g5", e.target.value)}
          />

          <button onClick={checkGrammar}>Check Grammar</button>

          {grammarScore !== null && (
            <p className="score">You got {grammarScore} / 5 correct ✨</p>
          )}
        </div>
      </section>

      {/* LEND / BORROW */}

      <section className="lesson">
        <h2>🔄 Lend vs Borrow</h2>

        <div className="exercise-card">
          <p>
            <b>Lend</b> = give something to someone temporarily.
          </p>

          <p>
            <b>Borrow</b> = take something from someone temporarily.
          </p>

          <hr />

          <p>1. Can you ___ me your pen?</p>

          <select onChange={(e) => handleLendBorrow("l1", e.target.value)}>
            <option value="">Choose</option>

            <option value="lend">lend</option>

            <option value="borrow">borrow</option>
          </select>

          <p>2. I need to ___ some money from my friend.</p>

          <select onChange={(e) => handleLendBorrow("l2", e.target.value)}>
            <option value="">Choose</option>

            <option value="lend">lend</option>

            <option value="borrow">borrow</option>
          </select>

          <p>3. Could you ___ me your notes?</p>

          <select onChange={(e) => handleLendBorrow("l3", e.target.value)}>
            <option value="">Choose</option>

            <option value="lend">lend</option>

            <option value="borrow">borrow</option>
          </select>

          <p>4. She asked if she could ___ my laptop.</p>

          <select onChange={(e) => handleLendBorrow("l4", e.target.value)}>
            <option value="">Choose</option>

            <option value="lend">lend</option>

            <option value="borrow">borrow</option>
          </select>

          <p>5. I never ___ expensive things to strangers.</p>

          <select onChange={(e) => handleLendBorrow("l5", e.target.value)}>
            <option value="">Choose</option>

            <option value="lend">lend</option>

            <option value="borrow">borrow</option>
          </select>

          <button onClick={checkLendBorrow}>Check Answers</button>

          {lendBorrowScore !== null && (
            <p className="score">You got {lendBorrowScore} / 5 correct 🎯</p>
          )}
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. What is your attitude to exams?</p>

          <p>2. Have you ever failed an important test?</p>

          <p>3. Do you usually learn things by heart?</p>

          <p>4. What is a good alternative to studying late at night?</p>

          <p>5. Have you ever borrowed something valuable?</p>
        </div>
      </section>
    </main>
  );
}

export default B1Lesson;
