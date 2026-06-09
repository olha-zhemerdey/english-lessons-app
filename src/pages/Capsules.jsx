import "../index.css";
import { useState } from "react";

const vocabulary = [
  {
    word: "innovation",
    meaning: "new ideas or inventions",
  },
  {
    word: "optimism",
    meaning: "a feeling of hope about the future",
  },
  {
    word: "represent",
    meaning: "to show or stand for something",
  },
  {
    word: "array",
    meaning: "a large collection of things",
  },
  {
    word: "chunk",
    meaning: "a piece of something",
  },
  {
    word: "processed",
    meaning: "prepared in factories",
  },
  {
    word: "vermin",
    meaning: "small harmful animals like rats or insects",
  },
  {
    word: "store",
    meaning: "to keep something safe",
  },
];

const sentences = [
  {
    id: 1,
    text: "The company introduced an ___ that changed technology.",
    answer: "innovation",
  },
  {
    id: 2,
    text: "People felt ___ about the future in 1999.",
    answer: "optimism",
  },
  {
    id: 3,
    text: "The objects were chosen to ___ America.",
    answer: "represent",
  },
  {
    id: 4,
    text: "There was a large ___ of objects in the capsule.",
    answer: "array",
  },
  {
    id: 5,
    text: "A ___ of the Berlin Wall was included.",
    answer: "chunk",
  },
];

const trueFalseQuestions = [
  {
    id: 1,
    statement:
      "The Nickelodeon Time Capsule was created by children and teenagers.",
    answer: "True",
  },

  {
    id: 2,
    statement: "The Nickelodeon Time Capsule will be opened in 2030.",
    answer: "False",
  },

  {
    id: 3,
    statement: "Cleopatra’s Needle is located in Central Park, New York.",
    answer: "True",
  },

  {
    id: 4,
    statement:
      "Nobody knows what is inside the second container under Cleopatra’s Needle.",
    answer: "True",
  },

  {
    id: 5,
    statement: "The Victorian time capsules have already been opened.",
    answer: "False",
  },

  {
    id: 6,
    statement: "The National Millennium Time Capsule was created in 1999.",
    answer: "True",
  },

  {
    id: 7,
    statement: "A piece of the Berlin Wall was included in the capsule.",
    answer: "True",
  },

  {
    id: 8,
    statement: "The Twinkie snack cake stayed inside the capsule.",
    answer: "False",
  },

  {
    id: 9,
    statement: "The National Millennium Time Capsule will be opened in 2100.",
    answer: "True",
  },

  {
    id: 10,
    statement: "The capsule included modern objects like a cell phone.",
    answer: "True",
  },
];

const grammarQuestions = [
  {
    id: 1,
    question: "The White House filled the capsule in 1999.",
    tense: "Past Simple",
  },
  {
    id: 2,
    question: "The capsule will be opened in 2100.",
    tense: "Future Simple",
  },
];

const guessTextQuestions = [
  {
    id: 1,
    info: "This capsule includes a Nintendo Game Boy and a skateboard.",
    answer: "Nickelodeon",
  },

  {
    id: 2,
    info: "This time capsule is hidden under an ancient Egyptian monument.",
    answer: "Cleopatra",
  },

  {
    id: 3,
    info: "This capsule contains a piece of the Berlin Wall.",
    answer: "Millennium",
  },

  {
    id: 4,
    info: "This capsule will be opened in 2042.",
    answer: "Nickelodeon",
  },

  {
    id: 5,
    info: "Nobody knows what is inside the second container.",
    answer: "Cleopatra",
  },

  {
    id: 6,
    info: "This capsule was created by the White House.",
    answer: "Millennium",
  },
];

const progressiveTasks = [
  {
    id: 1,
    level: "Easy",
    question: "What is a time capsule?",
    options: [
      "A box with future messages",
      "A type of museum",
      "A modern game console",
    ],
    answer: "A box with future messages",
  },

  {
    id: 2,
    level: "Easy",
    question: "Which capsule was made for children?",
    options: [
      "Millennium Capsule",
      "Nickelodeon Time Capsule",
      "Cleopatra’s Needle",
    ],
    answer: "Nickelodeon Time Capsule",
  },

  {
    id: 3,
    level: "Medium",
    question: "Why was the Twinkie removed from the capsule?",
    options: [
      "It was too expensive",
      "Fear of attracting vermin",
      "It broke during storage",
    ],
    answer: "Fear of attracting vermin",
  },

  {
    id: 4,
    level: "Medium",
    question: "Where is Cleopatra’s Needle located?",
    options: ["London", "Central Park, New York", "Paris"],
    answer: "Central Park, New York",
  },

  {
    id: 5,
    level: "Hard",
    question: "What is the main idea of all three texts?",
    options: [
      "Technology development",
      "Preserving history for the future",
      "Sports and entertainment history",
    ],
    answer: "Preserving history for the future",
  },
];

export default function TimeCapsuleLesson() {
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

    sentences.forEach((s) => {
      if (answers[s.id] === s.answer) {
        points++;
      }
    });

    grammarQuestions.forEach((g) => {
      if (answers[g.id + 100] === g.tense) {
        points++;
      }
    });

    trueFalseQuestions.forEach((q) => {
      if (answers[`tf${q.id}`] === q.answer) {
        points++;
      }
    });

    setScore(points);
  };

  return (
    <main className="page">
      ```
      {/* HERO */}
      <section className="hero">
        <h1>The National Millennium Time Capsule</h1>

        <p className="description">
          Learn vocabulary and grammar with a text about an American time
          capsule.
        </p>
      </section>
      {/* VOCABULARY */}
      <section className="lesson">
        <h2>📚 Vocabulary</h2>

        <div className="grid">
          {vocabulary.map((item) => (
            <div key={item.word} className="card">
              <h3>{item.word}</h3>
              <p>{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>
      {/* TEXT */}
      <section className="lesson">
        <h2>📖 Reading</h2>

        <div className="exercise-card">
          <p>
            1. The Nickelodeon Time Capsule Many time capsules are buried around
            the world, but not many were created by children. In 1992,
            Nickelodeon worked together with the Kids World Council to choose
            objects that represented children and teenagers of the 1990s. Some
            of the items included a Nintendo Game Boy, a jar of Gak, a
            skateboard, and a VHS copy of Home Alone (1991). The capsule was
            first buried at Nickelodeon Studios in Orlando, Florida. Later, it
            was moved twice — first to the Nickelodeon Suites Resort in Orlando
            and then to the Nickelodeon Animation Studio in Burbank, California.
            It will be opened on April 30, 2042, exactly 50 years after it was
            first buried.
          </p>
          <p>
            2. The Victorian Time Capsules Beneath Cleopatra’s Needle
            Cleopatra's Needle is the oldest human-made object in New York
            City’s Central Park. The ancient Egyptian obelisk was built in 1450
            B.C.E. and given to the United States in 1881 to celebrate the
            construction of the Suez Canal. Before the monument was placed in
            New York, workers buried a time capsule underneath it. The capsule
            contained many important objects, including a copy of the 1870 U.S.
            census, a Bible, a dictionary, the complete works of William
            Shakespeare, a guide to Egypt, and a copy of the Declaration of
            Independence. There is also a second container under the monument,
            but nobody knows what is inside it. Experts say there are no plans
            to open the capsules, so they may stay buried for many more years.
          </p>
          <p>
            3. The National Millennium Time Capsule At the end of the 1990s,
            many people in the United States felt excited and hopeful about the
            future. In 1999, the White House created the National Millennium
            Time Capsule and filled it with objects that represented life in
            America at that time. The capsule included recordings from the
            Metropolitan Opera, a transoceanic cable, a cell phone, Ray
            Charles’s sunglasses, and even a piece of the Berlin Wall. A Twinkie
            snack cake was also planned to be included, but it was removed
            because people worried it might attract animals or insects. The
            National Archives will keep the time capsule safe until it is opened
            in the year 2100.
          </p>
        </div>
      </section>
      {/* TRUE OR FALSE */}
      <section className="lesson">
        <h2>📝 True or False</h2>

        <div className="exercise-card">
          {trueFalseQuestions.map((q) => (
            <div key={q.id} className="question-block">
              <p>
                {q.id}. {q.statement}
              </p>

              <select
                onChange={(e) => handleChange(`tf${q.id}`, e.target.value)}
              >
                <option value="">Choose</option>
                <option value="True">True</option>
                <option value="False">False</option>
              </select>
            </div>
          ))}
        </div>
      </section>
      {/* GUESS THE TEXT */}
      <section className="lesson">
        <h2>🔍 Guess the Text</h2>

        <div className="exercise-card">
          {guessTextQuestions.map((q) => (
            <div key={q.id} className="question-block">
              <p>
                {q.id}. {q.info}
              </p>

              <select
                onChange={(e) => handleChange(`guess${q.id}`, e.target.value)}
              >
                <option value="">Choose</option>

                <option value="Nickelodeon">Nickelodeon Time Capsule</option>

                <option value="Cleopatra">Cleopatra’s Needle</option>

                <option value="Millennium">
                  National Millennium Time Capsule
                </option>
              </select>
            </div>
          ))}
        </div>
      </section>
      {/* PROGRESSIVE TASK */}
      <section className="lesson">
        <h2>🚀 Progressive Task (Reading Skills Ladder)</h2>

        <div className="exercise-card">
          {progressiveTasks.map((t) => (
            <div key={t.id} className="question-block">
              <p>
                <b>{t.level}</b> — {t.question}
              </p>

              <select
                onChange={(e) =>
                  handleChange(`progress${t.id}`, e.target.value)
                }
              >
                <option value="">Choose answer</option>

                {t.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </section>
      {/* EXERCISE 1 */}
      <section className="lesson">
        <h2>✏️ Complete the sentences</h2>

        <div className="exercise-card">
          {sentences.map((s) => (
            <div key={s.id}>
              <p>{s.text}</p>

              <select onChange={(e) => handleChange(s.id, e.target.value)}>
                <option value="">Choose</option>

                {vocabulary.map((v) => (
                  <option key={v.word} value={v.word}>
                    {v.word}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </section>
      {/* PROGRESSIVE TASK */}
      <section className="lesson">
        <h2>🚀 Progressive Task (Reading Skills Ladder)</h2>

        <div className="exercise-card">
          {progressiveTasks.map((t) => (
            <div key={t.id} className="question-block">
              <p>
                <b>{t.level}</b> — {t.question}
              </p>

              <select
                onChange={(e) =>
                  handleChange(`progress${t.id}`, e.target.value)
                }
              >
                <option value="">Choose answer</option>

                {t.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </section>
      {/* EXERCISE 3 */}
      <section className="lesson">
        <h2>💬 Discussion Questions</h2>

        <div className="exercise-card">
          <p>1. What objects would you put in a time capsule?</p>
          <p>2. Why are time capsules interesting?</p>
          <p>3. What object best represents modern life today?</p>
        </div>
      </section>
      {/* CHECK */}
      <section className="lesson">
        <button onClick={checkAnswers}>Check Answers</button>

        {score !== null && <h2>Score: {score} / 7 🎯</h2>}
      </section>
    </main>
  );
}
