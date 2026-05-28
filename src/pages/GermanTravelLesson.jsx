import "../index.css";
import { useState } from "react";

const vocabulary = [
  {
    german: "reisen",
    english: "to travel",
    ukrainian: "подорожувати",
  },

  {
    german: "der Flughafen",
    english: "airport",
    ukrainian: "аеропорт",
  },

  {
    german: "das Ticket",
    english: "ticket",
    ukrainian: "квиток",
  },

  {
    german: "der Koffer",
    english: "suitcase",
    ukrainian: "валіза",
  },

  {
    german: "das Hotel",
    english: "hotel",
    ukrainian: "готель",
  },

  {
    german: "das Abenteuer",
    english: "adventure",
    ukrainian: "пригода",
  },

  {
    german: "die Reise",
    english: "trip",
    ukrainian: "подорож",
  },

  {
    german: "besuchen",
    english: "to visit",
    ukrainian: "відвідувати",
  },

  {
    german: "fotografieren",
    english: "to take photos",
    ukrainian: "фотографувати",
  },

  {
    german: "die Sehenswürdigkeit",
    english: "sight / attraction",
    ukrainian: "визначне місце",
  },
];

const quizAnswers = {
  q1: "reisen",
  q2: "der Koffer",
  q3: "das Hotel",
  q4: "besuchen",
  q5: "das Ticket",
};

function GermanTravelLesson() {
  const [answers, setAnswers] = useState({});

  const [score, setScore] = useState(null);

  const [selectedWord, setSelectedWord] = useState("");

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
      [id]: selectedWord,
    }));
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">German A2 Lesson 🇩🇪</p>

        <h1>Reisen und Abenteuer ✈️</h1>

        <p className="description">
          Learn German vocabulary and grammar about travelling.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📚 Wortschatz (Vocabulary)</h2>

        <div className="grid">
          {vocabulary.map((item) => (
            <div className="card" key={item.german}>
              <h3>{item.german}</h3>

              <p>🇬🇧 {item.english}</p>

              <p>🇺🇦 {item.ukrainian}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GRAMMAR */}

      <section className="lesson">
        <h2>🧠 Grammatik: Perfekt</h2>

        <div className="exercise-card">
          <h3>How to form Perfekt</h3>

          <table className="grammar-table">
            <thead>
              <tr>
                <th>Verb</th>
                <th>Perfekt</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>reisen</td>
                <td>ich bin gereist</td>
              </tr>

              <tr>
                <td>besuchen</td>
                <td>ich habe besucht</td>
              </tr>

              <tr>
                <td>fotografieren</td>
                <td>ich habe fotografiert</td>
              </tr>

              <tr>
                <td>fliegen</td>
                <td>ich bin geflogen</td>
              </tr>
            </tbody>
          </table>

          <br />

          <p>📌 Use Perfekt to talk about past experiences.</p>
        </div>
      </section>

      {/* READING */}

      <section className="lesson">
        <h2>📖 Lesen</h2>

        <div className="exercise-card">
          <h3>Meine Reise nach Istanbul</h3>

          <p>
            Letztes Jahr bin ich nach Istanbul gereist. Ich habe viele
            Sehenswürdigkeiten besucht und sehr viele Fotos gemacht.
          </p>

          <p>
            Das Essen war lecker und das Wetter war wunderschön. Ich habe in
            einem kleinen Hotel gewohnt und jeden Tag neue Orte entdeckt.
          </p>

          <p>
            Besonders interessant war der Große Basar. Dort habe ich Souvenirs
            gekauft und neue Leute kennengelernt.
          </p>
        </div>
      </section>

      {/* QUESTIONS */}

      <section className="lesson">
        <h2>💬 Fragen zum Text</h2>

        <div className="exercise-card">
          <p>1. Wohin ist die Person gereist?</p>

          <p>2. Was hat die Person fotografiert?</p>

          <p>3. Wo hat die Person gewohnt?</p>

          <p>4. Was war besonders interessant?</p>
        </div>
      </section>

      {/* QUIZ */}

      <section className="lesson">
        <h2>✏️ Vocabulary Quiz</h2>

        <div className="exercise-card">
          <p>1. “To travel” in German is ___</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>

            <option>reisen</option>

            <option>wohnen</option>

            <option>kaufen</option>
          </select>

          <p>2. “Suitcase” in German is ___</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>

            <option>der Koffer</option>

            <option>das Ticket</option>

            <option>das Abenteuer</option>
          </select>

          <p>3. “Hotel” in German is ___</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>

            <option>der Flughafen</option>

            <option>das Hotel</option>

            <option>die Reise</option>
          </select>

          <p>4. “To visit” in German is ___</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>

            <option>besuchen</option>

            <option>reisen</option>

            <option>wohnen</option>
          </select>

          <p>5. “Ticket” in German is ___</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>

            <option>das Ticket</option>

            <option>der Koffer</option>

            <option>die Reise</option>
          </select>

          <button onClick={checkAnswers}>Check Answers</button>

          {score !== null && (
            <p className="score">You got {score} / 5 correct ✨</p>
          )}
        </div>
      </section>

      {/* DRAG & DROP */}

      <section className="lesson">
        <h2>🎯 Drag & Drop</h2>

        <div className="exercise-card">
          <div className="drag-words">
            {["gereist", "besucht", "fotografiert", "gekauft"].map((word) => (
              <div
                key={word}
                draggable
                onDragStart={() => setSelectedWord(word)}
                className="drag-word"
              >
                {word}
              </div>
            ))}
          </div>

          <br />

          <p>1. Ich bin nach Berlin ___.</p>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("d1")}
          >
            {dragAnswers["d1"] || "Drop here"}
          </div>

          <p>2. Wir haben ein Museum ___.</p>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("d2")}
          >
            {dragAnswers["d2"] || "Drop here"}
          </div>

          <p>3. Sie hat viele Fotos ___.</p>

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
        <h2>🗣 Sprechen</h2>

        <div className="exercise-card">
          <p>1. Wohin möchtest du reisen?</p>

          <p>2. Was hast du letztes Jahr gemacht?</p>

          <p>3. Welche Stadt möchtest du besuchen?</p>

          <p>4. Reisest du gern?</p>
        </div>
      </section>
    </main>
  );
}

export default GermanTravelLesson;
