import "../index.css";
import { useState } from "react";

const vocabulary = [
  {
    word: "self-assured",
    meaning: "confident and calm about yourself",
    example: "She appeared self-assured during the performance.",
  },

  {
    word: "articulate",
    meaning: "able to express ideas clearly and intelligently",
    example: "He is articulate when discussing difficult topics.",
  },

  {
    word: "driven",
    meaning: "highly motivated to achieve goals",
    example: "She is extremely driven and disciplined.",
  },

  {
    word: "emotionally expressive",
    meaning: "able to show emotions openly",
    example: "Contemporary dancers are emotionally expressive.",
  },

  {
    word: "linguistically gifted",
    meaning: "naturally talented at learning languages",
    example: "She is linguistically gifted and speaks three languages.",
  },

  {
    word: "culturally aware",
    meaning: "understanding different cultures and traditions",
    example: "Traveling helps people become culturally aware.",
  },

  {
    word: "perfectionist",
    meaning: "someone who wants everything to be perfect",
    example: "Perfectionists often overthink small mistakes.",
  },

  {
    word: "thought-provoking",
    meaning: "making people think deeply",
    example: "The documentary was very thought-provoking.",
  },

  {
    word: "independent thinker",
    meaning: "someone who forms their own opinions",
    example: "Teachers encourage students to become independent thinkers.",
  },

  {
    word: "well-balanced",
    meaning: "healthy and emotionally stable",
    example: "A well-balanced lifestyle improves mental health.",
  },
];

const vocabQuiz = [
  {
    id: 1,
    question: "Someone who expresses ideas clearly is ___.",
    answer: "articulate",
  },

  {
    id: 2,
    question: "A person who always wants perfect results is a ___.",
    answer: "perfectionist",
  },

  {
    id: 3,
    question: "A highly motivated student can be described as ___.",
    answer: "driven",
  },

  {
    id: 4,
    question: "Learning languages can help people become more ___.",
    answer: "culturally aware",
  },

  {
    id: 5,
    question: "Someone who creates their own opinions is an ___.",
    answer: "independent thinker",
  },

  {
    id: 6,
    question: "A healthy emotional and physical lifestyle is called ___.",
    answer: "well-balanced",
  },
];

const phraseTransformations = [
  {
    basic: "I like dancing.",
    advanced: "I’m passionate about contemporary dance.",
  },

  {
    basic: "I want to study abroad.",
    advanced: "I aspire to study abroad.",
  },

  {
    basic: "I’m interested in languages.",
    advanced: "I’m fascinated by foreign languages.",
  },

  {
    basic: "I’m nervous sometimes.",
    advanced: "I tend to overthink in unfamiliar situations.",
  },

  {
    basic: "I want to improve.",
    advanced: "I’m constantly working on self-improvement.",
  },
];

const opinionAnswers = {
  o1: "Dance can communicate emotions more effectively than words.",
  o2: "Studying abroad helps people become more independent.",
  o3: "Intelligent people often overthink their communication.",
};

function BeyondTalentLesson() {
  const [answers, setAnswers] = useState({});

  const [score, setScore] = useState(null);

  const [opinions, setOpinions] = useState({});

  const [opinionScore, setOpinionScore] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [verbPatternAnswers, setVerbPatternAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleOpinion = (id, value) => {
    setOpinions((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleVerbPatternDrop = (id) => {
    setVerbPatternAnswers((prev) => ({
      ...prev,
      [id]: selectedAnswer,
    }));
  };

  const checkAnswers = () => {
    let points = 0;

    vocabQuiz.forEach((item) => {
      if (answers[item.id]?.toLowerCase().trim() === item.answer) {
        points++;
      }
    });

    setScore(points);
  };

  const checkOpinions = () => {
    let points = 0;

    Object.keys(opinionAnswers).forEach((key) => {
      if (opinions[key] === opinionAnswers[key]) {
        points++;
      }
    });

    setOpinionScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">B1+ / Early B2 English Lesson</p>

        <h1>Beyond Talent ✨</h1>

        <p className="description">
          Explore identity, ambition, creativity and communication through
          modern English.
        </p>
      </section>

      {/* QUOTE */}

      <section className="lesson">
        <div className="exercise-card">
          <h2>🌙 Quote of the Lesson</h2>

          <p className="quote">
            “Art allows people to express emotions they cannot always explain in
            words.”
          </p>
        </div>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📚 Advanced Vocabulary</h2>

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

      {/* NATURAL ENGLISH */}

      <section className="lesson">
        <h2>🎤 Sound More Natural in English</h2>

        <div className="exercise-card">
          <table className="grammar-table">
            <thead>
              <tr>
                <th>Basic Phrase</th>
                <th>Advanced Version</th>
              </tr>
            </thead>

            <tbody>
              {phraseTransformations.map((item, index) => (
                <tr key={index}>
                  <td>{item.basic}</td>

                  <td>{item.advanced}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* READING */}

      <section className="lesson">
        <h2>📖 Reading</h2>

        <div className="exercise-card">
          <h3>Finding Identity Through Art and Language</h3>

          <p>
            Selin is a fifteen-year-old student who dreams of studying in Turkey
            in the future. She is passionate about contemporary dance and spends
            several hours every week rehearsing in the studio. Dance allows her
            to communicate emotions that are often difficult to express in
            everyday conversations.
          </p>

          <p>
            Her teachers describe her as intellectually curious,
            self-disciplined and linguistically gifted. Besides dancing, she
            enjoys learning foreign languages, researching different cultures
            and maintaining a health-conscious lifestyle.
          </p>

          <p>
            Although she feels completely self-assured on stage, she sometimes
            struggles to put complex thoughts into words. She tends to overthink
            when discussing serious topics in English because she wants to sound
            articulate and mature.
          </p>

          <p>
            However, over time she has realised that communication is not about
            perfection. Every conversation, mistake and experience helps her
            become a more independent thinker. Today, she believes that
            confidence grows through self-expression, creativity and curiosity
            about the world.
          </p>
        </div>
      </section>

      {/* QUESTIONS */}

      <section className="lesson">
        <h2>💬 Reading Questions</h2>

        <div className="exercise-card">
          <p>1. Why is dance important to Selin?</p>

          <p>2. What qualities do her teachers admire?</p>

          <p>3. Why does she overthink while speaking English?</p>

          <p>4. What has she realised about communication?</p>

          <p>
            5. What helps people become more confident according to the text?
          </p>
        </div>
      </section>

      {/* VOCAB PRACTICE */}

      <section className="lesson">
        <h2>✏️ Vocabulary Practice</h2>

        <div className="exercise-card">
          {vocabQuiz.map((item) => (
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
            <p className="score">You got {score} / 6 correct 🎯</p>
          )}
        </div>
      </section>

      {/* OPINIONS */}

      <section className="lesson">
        <h2>🧠 Expressing Nuanced Opinions</h2>

        <div className="exercise-card">
          <p>1. Which statement sounds more thoughtful?</p>

          <select onChange={(e) => handleOpinion("o1", e.target.value)}>
            <option value="">Choose</option>

            <option value="Dance can communicate emotions more effectively than words.">
              Dance can communicate emotions more effectively than words.
            </option>

            <option value="Dance is fun.">Dance is fun.</option>

            <option value="I like music.">I like music.</option>
          </select>

          <p>2. Which statement sounds more mature?</p>

          <select onChange={(e) => handleOpinion("o2", e.target.value)}>
            <option value="">Choose</option>

            <option value="Studying abroad helps people become more independent.">
              Studying abroad helps people become more independent.
            </option>

            <option value="Traveling is cool.">Traveling is cool.</option>

            <option value="I want to leave home.">I want to leave home.</option>
          </select>

          <p>3. Which statement sounds more analytical?</p>

          <select onChange={(e) => handleOpinion("o3", e.target.value)}>
            <option value="">Choose</option>

            <option value="Intelligent people often overthink their communication.">
              Intelligent people often overthink their communication.
            </option>

            <option value="Smart people worry.">Smart people worry.</option>

            <option value="English is difficult.">English is difficult.</option>
          </select>

          <button onClick={checkOpinions}>Check Answers</button>

          {opinionScore !== null && (
            <p className="score">You got {opinionScore} / 3 correct ✨</p>
          )}
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🎧 Discussion Questions</h2>

        <div className="exercise-card">
          <p>1. Can dance be considered a universal language?</p>

          <p>
            2. Why do some intelligent people struggle to express themselves
            clearly?
          </p>

          <p>3. Does studying abroad change a person’s identity?</p>

          <p>4. Is confidence connected to communication skills?</p>

          <p>5. What role does creativity play in personal growth?</p>
        </div>
      </section>

      {/* VERB PATTERNS */}
      <section className="lesson">
        <h2>🎯 Verb Pattern Drag & Drop</h2>

        <div className="exercise-card">
          <div className="drag-words">
            {[
              "to study",
              "expressing",
              "conveying",
              "speaking",
              "becoming",
            ].map((word) => (
              <div
                key={word}
                draggable
                onDragStart={() => setSelectedAnswer(word)}
                className="drag-word"
              >
                {word}
              </div>
            ))}
          </div>

          <br />

          <p>1. She aspires ___ abroad.</p>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleVerbPatternDrop("v1")}
          >
            {verbPatternAnswers["v1"] || "Drop here"}
          </div>

          <p>2. He succeeded in ___ his communication skills.</p>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleVerbPatternDrop("v2")}
          >
            {verbPatternAnswers["v2"] || "Drop here"}
          </div>

          <p>3. Artists are capable of ___ emotions.</p>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleVerbPatternDrop("v3")}
          >
            {verbPatternAnswers["v3"] || "Drop here"}
          </div>
        </div>
      </section>

      {/* ADVANCED VERB PATTERNS */}

      <section className="lesson">
        <h2>🧠 Advanced Verb Patterns</h2>

        <div className="exercise-card">
          <h3>Complex Verb Patterns</h3>

          <table className="grammar-table">
            <thead>
              <tr>
                <th>Pattern</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>tend to + infinitive</td>

                <td>She tends to overanalyse situations.</td>
              </tr>

              <tr>
                <td>struggle to + infinitive</td>

                <td>Some teenagers struggle to express emotions clearly.</td>
              </tr>

              <tr>
                <td>be capable of + verb-ing</td>

                <td>Artists are capable of conveying deep emotions.</td>
              </tr>

              <tr>
                <td>aspire to + infinitive</td>

                <td>She aspires to study abroad.</td>
              </tr>

              <tr>
                <td>succeed in + verb-ing</td>

                <td>He succeeded in improving his communication skills.</td>
              </tr>

              <tr>
                <td>prevent someone from + verb-ing</td>

                <td>Fear often prevents people from expressing themselves.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* VERB PATTERN PRACTICE */}

      <section className="lesson">
        <h2>✍️ Verb Pattern Practice</h2>

        <div className="exercise-card">
          <p>1. She aspires ___ abroad in the future.</p>

          <select>
            <option value="">Choose</option>

            <option>study</option>

            <option>to study</option>

            <option>studying</option>
          </select>

          <p>2. Many teenagers struggle ___ their emotions clearly.</p>

          <select>
            <option value="">Choose</option>

            <option>expressing</option>

            <option>express</option>

            <option>to express</option>
          </select>

          <p>
            3. Creative people are capable of ___ powerful emotions through art.
          </p>

          <select>
            <option value="">Choose</option>

            <option>convey</option>

            <option>conveying</option>

            <option>to convey</option>
          </select>

          <p>4. Fear can prevent people from ___ confidently.</p>

          <select>
            <option value="">Choose</option>

            <option>speaking</option>

            <option>speak</option>

            <option>to speak</option>
          </select>

          <p>5. She succeeded in ___ more self-assured.</p>

          <select>
            <option value="">Choose</option>

            <option>becoming</option>

            <option>become</option>

            <option>to become</option>
          </select>
        </div>
      </section>

      {/* WRITING */}

      <section className="lesson">
        <h2>✍️ Writing Task</h2>

        <div className="exercise-card">
          <h3>Who Are You Becoming?</h3>

          <p>Write about the person you are becoming.</p>

          <ul>
            <li>How have your interests shaped your personality?</li>

            <li>
              What role do creativity, dance or languages play in your life?
            </li>

            <li>What kind of future do you imagine for yourself?</li>

            <li>What qualities do you want to develop?</li>
          </ul>

          <p>Write 140–180 words.</p>
        </div>
      </section>
    </main>
  );
}

export default BeyondTalentLesson;
