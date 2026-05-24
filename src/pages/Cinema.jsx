import "../index.css";
import { useState } from "react";

const words = [
  "character",
  "dialogue",
  "dull",
  "ending",
  "episode",
  "filming",
  "hilarious",
  "scene",
  "special effects",
  "useless",
];

const sentences = [
  {
    id: 1,
    text: "It was such a shock! I can’t believe she was killed off. She was my favourite ___",
    answer: "character",
  },
  {
    id: 2,
    text: "It’s ___. I’ve seen it several times now and it still makes me laugh.",
    answer: "hilarious",
  },
  {
    id: 3,
    text: "I love that ___ in series two where they finally show how they first became a couple.",
    answer: "episode",
  },
  { id: 4, text: "I switched over. I found it all a bit ___.", answer: "dull" },
  { id: 5, text: "He was so ___. It was embarrassing!", answer: "useless" },
  {
    id: 6,
    text: "I’m not usually a fan of big Hollywood blockbusters, but the ___ were amazing.",
    answer: "special effects",
  },
  { id: 7, text: "The ___ was just so sad. I was in tears.", answer: "ending" },
  {
    id: 8,
    text: "It’s my favourite series. They’re such great characters and the ___ is so clever and funny.",
    answer: "dialogue",
  },
  {
    id: 9,
    text: "That short ___ where he was being interviewed was great.",
    answer: "scene",
  },
  {
    id: 10,
    text: "The ___ is amazing. How did they get so close?",
    answer: "filming",
  },
];

function CinemaTVLesson() {
  // SELECT EXERCISE
  const [answers, setAnswers] = useState({});
  const [selectScore, setSelectScore] = useState(null);

  // DRAG EXERCISE
  const [dragAnswers, setDragAnswers] = useState({});
  const [dragScore, setDragScore] = useState(null);
  const [draggedWord, setDraggedWord] = useState("");

  // SELECT CHANGE
  const handleChange = (q, value) => {
    setAnswers((prev) => ({
      ...prev,
      [q]: value,
    }));
  };

  // DROP
  const handleDrop = (id) => {
    setDragAnswers((prev) => ({
      ...prev,
      [id]: draggedWord,
    }));

    setDraggedWord("");
  };

  // CHECK SELECT
  const checkSelectAnswers = () => {
    let points = 0;

    sentences.forEach((_, index) => {
      const key = `q${index + 1}`;
      if (answers[key] === sentences[index].answer) {
        points++;
      }
    });

    setSelectScore(points);
  };

  // CHECK DRAG
  const checkDragAnswers = () => {
    let points = 0;

    sentences.forEach((sentence) => {
      if (dragAnswers[sentence.id] === sentence.answer) {
        points++;
      }
    });

    setDragScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <p className="subtitle">Vocabulary: at the cinema, on TV</p>
        <h1>Vocabulary and Reading 🎬</h1>
        <p className="description">
          Learn vocabulary connected with films, cinema and TV programmes.
        </p>
      </section>

      {/* WORD BOX */}
      <section className="lesson">
        <h2>📚 Vocabulary Box</h2>

        <div className="grid">
          {words.map((word) => (
            <div className="card" key={word}>
              <h3>{word}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SELECT EXERCISE */}
      <section className="lesson">
        <h2>✏️ Complete the sentences</h2>

        <div className="exercise-card">
          {sentences.map((s, index) => (
            <div key={s.id}>
              <p>
                {index + 1}. {s.text}
              </p>

              <select
                onChange={(e) => handleChange(`q${index + 1}`, e.target.value)}
              >
                <option value="">Choose</option>
                {words.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button onClick={checkSelectAnswers}>Check answers</button>

          {selectScore !== null && (
            <p className="score">You got {selectScore} / 10 correct 🎯</p>
          )}
        </div>
      </section>

      {/* DRAG & DROP */}
      <section className="lesson">
        <h2>🎬 Drag & Drop Exercise</h2>

        <div className="drag-words">
          {words.map((word) => (
            <div
              key={word}
              draggable
              onDragStart={() => setDraggedWord(word)}
              className="drag-word"
            >
              {word}
            </div>
          ))}
        </div>

        <div className="exercise-card">
          {sentences.map((sentence) => (
            <div key={sentence.id} className="sentence-block">
              <p>
                <b>{sentence.id}.</b> {sentence.text}
              </p>

              <div
                className="drop-zone"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(sentence.id)}
              >
                {dragAnswers[sentence.id] || "Drop word here"}
              </div>
            </div>
          ))}

          <button onClick={checkDragAnswers}>Check answers</button>

          {dragScore !== null && (
            <p className="score">You got {dragScore} / 10 correct 🎯</p>
          )}
        </div>
      </section>

      {/* READING */}
      <section className="lesson">
        <h2>📖 Reading</h2>

        <div className="exercise-card">
          <h3>The Golden Age of TV</h3>

          <p>
            The Golden Age of TV Janie Jones explores how television is taking
            over. In recent years, television has been completely changed by
            streaming services like Netflix, leading to the development of many
            more original drama series and what is being called a ‘Golden Age’.
            This year, around 450 different series are being shown and even more
            will be produced next year, as media companies compete for
            audiences. But it’s not just the quantity that makes this a Golden
            Age, it’s the quality and variety that is on offer. More and more
            professionals, who had previously only been attracted to film work,
            are now being persuaded to work in TV. Writers and actors are moving
            into this area, partly because they get paid more than before, but
            also because of the creative opportunities that are offered by the
            new dramas. Previously, programmes relied on advertising, so
            episodes were cut up into short sections with a tense moment at the
            end of each section to stop people switching over. Each episode also
            had to be a single story, so viewers could miss one, but still pick
            up the story the following week, which explains all the police and
            medical dramas. In comparison, film used to give artists far more
            freedom. Nowadays, the opposite is true. Cinema today is all about
            the superhero blockbusters – big on special effects, but low on
            dialogue and character. With streaming services, there are no ad
            breaks and viewers can choose when to watch episodes, and so TV
            writers are allowed to experiment with more varied and complex
            stories while actors can explore characters more fully. What’s more,
            the quality of drama means people now expect more from reality TV
            programmes, documentaries and so on. The result is an amazing range
            of programmes, and a new problem – finding the time to watch them
            all!
          </p>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="lesson">
        <h2>💬 Reading Questions</h2>

        <div className="exercise-card">
          <p>1. Why has television changed in recent years?</p>
          <p>2. Why are more writers and actors moving from film to TV?</p>
          <p>
            3. What two main examples does the writer give to support the idea
            that TV is in a golden age?
          </p>
          <p>4. How has streaming changed TV?</p>
        </div>
      </section>

      {/* SPEAKING */}
      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. How often do you go to the cinema?</p>
          <p>2. What kind of films do you enjoy watching?</p>
          <p>3. What is your favourite TV series?</p>
          <p>4. Do you prefer films or TV series? Why?</p>
          <p>5. What makes a film interesting for you?</p>
        </div>
      </section>
    </main>
  );
}

export default CinemaTVLesson;
