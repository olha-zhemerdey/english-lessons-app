import "../index.css";
import { useState } from "react";

const vocabulary = [
  "self-assured",
  "articulate",
  "driven",
  "emotionally expressive",
  "linguistically gifted",
  "culturally aware",
  "perfectionist",
  "thought-provoking",
  "independent thinker",
  "well-balanced",
  "mature",
  "delay",
];

const readingText = `
Dear Me,

I’m writing this letter to you from the age of 30. Looking back, I can see how much you have grown over the years. Right now, you may struggle to trust yourself and your abilities, but I want you to know that things will get better.

You have always been driven and curious, and those qualities have helped you overcome many challenges. There were moments when you doubted yourself, but you never gave up on your dreams. You aspired to build a meaningful career, become linguistically gifted, and gain a deeper understanding of the world around you.

Over time, you became more self-assured and articulate. You learned how to express your ideas with confidence and how to stay true to your values, even when others disagreed with you. Becoming an independent thinker was one of your greatest achievements.

You also became more culturally aware through travelling, meeting new people, and exploring different perspectives. These experiences helped you grow into a mature and well-balanced person.

One important lesson you learned was that perfection is impossible. Being a perfectionist often prevented you from enjoying your successes. Eventually, you realised that progress matters more than perfection.

Keep believing in yourself. Continue learning, stay emotionally expressive, and never stop aspiring to become the best version of yourself.

Love,

Your 30-Year-Old Self
`;

const readingQuestions = [
  {
    id: 1,
    question: "What qualities helped the writer overcome challenges?",
    answer: "Being driven and curious.",
  },
  {
    id: 2,
    question: "What did the writer aspire to achieve?",
    answer:
      "A meaningful career, language skills, and a deeper understanding of the world.",
  },
  {
    id: 3,
    question: "How did the writer become more culturally aware?",
    answer:
      "Through travelling, meeting people, and exploring different perspectives.",
  },
  {
    id: 4,
    question: "What prevented the writer from enjoying success?",
    answer: "Being a perfectionist.",
  },
  {
    id: 5,
    question: "What lesson did the writer learn?",
    answer: "Progress matters more than perfection.",
  },
];

const vocabQuestions = [
  {
    id: 1,
    sentence: "Someone who can clearly explain complex ideas is __________.",
    answer: "articulate",
  },
  {
    id: 2,
    sentence: "A person who forms their own opinions is an __________.",
    answer: "independent thinker",
  },
  {
    id: 3,
    sentence: "A person who wants everything to be perfect is a __________.",
    answer: "perfectionist",
  },
  {
    id: 4,
    sentence: "A person who is confident in themselves is __________.",
    answer: "self-assured",
  },
  {
    id: 5,
    sentence: "Someone who understands different cultures is __________.",
    answer: "culturally aware",
  },
];

const grammarQuestions = [
  {
    id: 1,
    question: "I aspire ___ a successful career.",
    options: ["build", "to build", "building"],
    answer: "to build",
  },
  {
    id: 2,
    question: "She succeeded in ___ her goals.",
    options: ["achieving", "achieve", "to achieve"],
    answer: "achieving",
  },
  {
    id: 3,
    question: "Many students struggle ___ motivated.",
    options: ["stay", "staying", "to stay"],
    answer: "to stay",
  },
  {
    id: 4,
    question: "Nothing should prevent you from ___ your dreams.",
    options: ["follow", "to follow", "following"],
    answer: "following",
  },
  {
    id: 5,
    question: "She is capable of ___ three languages.",
    options: ["speaking", "speak", "to speak"],
    answer: "speaking",
  },
];

function FutureSelfLesson() {
  const [vocabAnswers, setVocabAnswers] = useState({});
  const [grammarAnswers, setGrammarAnswers] = useState({});
  const [vocabScore, setVocabScore] = useState(null);
  const [grammarScore, setGrammarScore] = useState(null);

  const handleVocabChange = (id, value) => {
    setVocabAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleGrammarChange = (id, value) => {
    setGrammarAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const checkVocabulary = () => {
    let points = 0;

    vocabQuestions.forEach((q) => {
      if (vocabAnswers[q.id] === q.answer) {
        points++;
      }
    });

    setVocabScore(points);
  };

  const checkGrammar = () => {
    let points = 0;

    grammarQuestions.forEach((q) => {
      if (grammarAnswers[q.id] === q.answer) {
        points++;
      }
    });

    setGrammarScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <p className="subtitle">Future Goals & Personal Growth</p>
        <h1>A Letter to My 30-Year-Old Self ✨</h1>
        <p className="description">
          Learn vocabulary about personality, practise complex verb patterns,
          and write a letter to your future self.
        </p>
      </section>

      {/* VOCABULARY */}
      <section className="lesson">
        <h2>📚 Vocabulary Box</h2>

        <div className="grid">
          {vocabulary.map((word) => (
            <div className="card" key={word}>
              <h3>{word}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* READING */}
      <section className="lesson">
        <h2>📖 Reading</h2>

        <div className="exercise-card">
          <h3>A Letter From My Future Self</h3>

          <p style={{ whiteSpace: "pre-line" }}>{readingText}</p>
        </div>
      </section>

      {/* READING QUESTIONS */}
      <section className="lesson">
        <h2>💬 Reading Questions</h2>

        <div className="exercise-card">
          {readingQuestions.map((q) => (
            <div key={q.id}>
              <p>
                <strong>{q.id}.</strong> {q.question}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VOCABULARY EXERCISE */}
      <section className="lesson">
        <h2>✏️ Vocabulary in Context</h2>

        <div className="exercise-card">
          {vocabQuestions.map((q) => (
            <div key={q.id}>
              <p>{q.sentence}</p>

              <select onChange={(e) => handleVocabChange(q.id, e.target.value)}>
                <option value="">Choose</option>

                {vocabulary.map((word) => (
                  <option key={word} value={word}>
                    {word}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button onClick={checkVocabulary}>Check Vocabulary</button>

          {vocabScore !== null && (
            <p className="score">
              You got {vocabScore} / {vocabQuestions.length} correct 🎯
            </p>
          )}
        </div>
      </section>

      {/* GRAMMAR */}
      <section className="lesson">
        <h2>🧠 Complex Verb Patterns</h2>

        <div className="exercise-card">
          {grammarQuestions.map((q) => (
            <div key={q.id}>
              <p>{q.question}</p>

              <select
                onChange={(e) => handleGrammarChange(q.id, e.target.value)}
              >
                <option value="">Choose</option>

                {q.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button onClick={checkGrammar}>Check Grammar</button>

          {grammarScore !== null && (
            <p className="score">
              You got {grammarScore} / {grammarQuestions.length} correct 🎯
            </p>
          )}
        </div>
      </section>

      {/* DISCUSSION */}
      <section className="lesson">
        <h2>🗣 Discussion</h2>

        <div className="exercise-card">
          <p>
            1. What qualities would you like to develop before the age of 30?
          </p>

          <p>2. What do you currently struggle to do?</p>

          <p>3. What do you aspire to achieve?</p>

          <p>4. What might prevent people from reaching their goals?</p>

          <p>5. Do you think perfectionism is helpful or harmful?</p>
        </div>
      </section>

      {/* PRE-WRITING */}
      <section className="lesson">
        <h2>🌟 Before You Write</h2>

        <div className="exercise-card">
          <p>• At 30, I hope I am...</p>
          <p>• I aspire to...</p>
          <p>• I want people to describe me as...</p>
          <p>• I struggle to...</p>
          <p>• I hope I succeed in...</p>
          <p>• Nothing should prevent me from...</p>
          <p>• My future self will thank me for...</p>
        </div>
      </section>

      {/* WRITING TASK */}
      <section className="lesson">
        <h2>📝 Writing Task</h2>

        <div className="exercise-card">
          <h3>A Letter to My 30-Year-Old Self</h3>

          <p>Write 180–250 words.</p>

          <p>Include:</p>

          <ul>
            <li>at least 5 vocabulary words</li>
            <li>at least 3 complex verb patterns</li>
            <li>one piece of advice</li>
            <li>one personal goal</li>
            <li>one challenge you are facing now</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default FutureSelfLesson;
