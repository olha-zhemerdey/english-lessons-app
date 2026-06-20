import "../index.css";
import { useState } from "react";

const trueFalseQuestions = [
  {
    id: 1,
    question: "The student is currently studying at university.",
    answer: "False",
  },
  {
    id: 2,
    question: "She would ideally like to work in Mumbai.",
    answer: "True",
  },
  {
    id: 3,
    question: "As a child, she always wanted to be a lawyer.",
    answer: "False",
  },
  {
    id: 4,
    question: "The Secret Garden helped her develop a love for reading.",
    answer: "True",
  },
  {
    id: 5,
    question: "She enjoys reading literary works.",
    answer: "False",
  },
];

const gapFillQuestions = [
  {
    id: 1,
    text: "The student is currently ________ work.",
    answer: "finding",
  },
  {
    id: 2,
    text: "In ten years, she hopes to work in ________ and education.",
    answer: "philanthropy",
  },
  {
    id: 3,
    text: "The book that started her love for reading was ________.",
    answer: "The Secret Garden",
  },
  {
    id: 4,
    text: "She prefers fiction and ________ books.",
    answer: "self-help",
  },
  {
    id: 5,
    text: "She recommends the book because people who are into fiction and ________ would enjoy it.",
    answer: "music",
  },
];

const matchingQuestions = [
  {
    id: 1,
    phrase: "in between things",
    answer: "To be in a transition period.",
  },
  {
    id: 2,
    phrase: "adverse effects",
    answer: "Negative consequences.",
  },
  {
    id: 3,
    phrase: "carve out time",
    answer: "To make time for something intentionally.",
  },
  {
    id: 4,
    phrase: "fall into a rut",
    answer: "To become stuck in a boring routine.",
  },
];

const matchingOptions = [
  "To be in a transition period.",
  "Negative consequences.",
  "To make time for something intentionally.",
  "To become stuck in a boring routine.",
];

function ThereIsThereAreLesson() {
  const [tfAnswers, setTfAnswers] = useState({});
  const [gapAnswers, setGapAnswers] = useState({});
  const [matchAnswers, setMatchAnswers] = useState({});

  const [tfScore, setTfScore] = useState(null);
  const [gapScore, setGapScore] = useState(null);
  const [matchScore, setMatchScore] = useState(null);

  const checkTF = () => {
    let score = 0;

    trueFalseQuestions.forEach((q) => {
      if (tfAnswers[q.id] === q.answer) {
        score++;
      }
    });

    setTfScore(score);
  };

  const checkGapFill = () => {
    let score = 0;

    gapFillQuestions.forEach((q) => {
      if (gapAnswers[q.id]?.trim().toLowerCase() === q.answer.toLowerCase()) {
        score++;
      }
    });

    setGapScore(score);
  };

  const checkMatching = () => {
    let score = 0;

    matchingQuestions.forEach((q) => {
      if (matchAnswers[q.id] === q.answer) {
        score++;
      }
    });

    setMatchScore(score);
  };

  return (
    <main className="page">
      {/* TRUE FALSE */}

      <section className="lesson">
        <h2>✅ True or False?</h2>

        <div className="exercise-card">
          {trueFalseQuestions.map((q) => (
            <div key={q.id}>
              <p>{q.question}</p>

              <select
                onChange={(e) =>
                  setTfAnswers((prev) => ({
                    ...prev,
                    [q.id]: e.target.value,
                  }))
                }
              >
                <option value="">Choose</option>
                <option value="True">True</option>
                <option value="False">False</option>
              </select>
            </div>
          ))}

          <button onClick={checkTF}>Check Answers</button>

          {tfScore !== null && (
            <p className="score">
              You got {tfScore} / {trueFalseQuestions.length}
            </p>
          )}
        </div>
      </section>

      {/* GAP FILL */}

      <section className="lesson">
        <h2>✏️ Complete the Sentences</h2>

        <div className="exercise-card">
          {gapFillQuestions.map((q) => (
            <div key={q.id}>
              <p>{q.text}</p>

              <input
                type="text"
                onChange={(e) =>
                  setGapAnswers((prev) => ({
                    ...prev,
                    [q.id]: e.target.value,
                  }))
                }
              />
            </div>
          ))}

          <button onClick={checkGapFill}>Check Answers</button>

          {gapScore !== null && (
            <p className="score">
              You got {gapScore} / {gapFillQuestions.length}
            </p>
          )}
        </div>
      </section>

      {/* MATCHING */}

      <section className="lesson">
        <h2>🔗 Match the Phrase to its Meaning</h2>

        <div className="exercise-card">
          {matchingQuestions.map((q) => (
            <div key={q.id}>
              <p>
                <strong>{q.phrase}</strong>
              </p>

              <select
                onChange={(e) =>
                  setMatchAnswers((prev) => ({
                    ...prev,
                    [q.id]: e.target.value,
                  }))
                }
              >
                <option value="">Choose</option>

                {matchingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button onClick={checkMatching}>Check Answers</button>

          {matchScore !== null && (
            <p className="score">
              You got {matchScore} / {matchingQuestions.length}
            </p>
          )}
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. What kind of books are you into?</p>
          <p>2. Do you have phases in your life with different hobbies?</p>
          <p>
            3. What adverse effects do you notice when you don't sleep enough?
          </p>
          <p>4. How do you carve out time for family and friends?</p>
          <p>5. Do you think your weekends will change as you get older?</p>
        </div>
      </section>
    </main>
  );
}

export default ThereIsThereAreLesson;
