import "../index.css";
import { useState } from "react";

const vocabulary = [
  {
    word: "observant",
    meaning: "quick to notice details",
    example: "The detective was extremely observant during the investigation.",
  },

  {
    word: "stupendous",
    meaning: "extremely impressive or amazing",
    example: "The visual effects in the film were stupendous.",
  },

  {
    word: "insanely",
    meaning: "extremely or very",
    example: "The movie was insanely emotional.",
  },

  {
    word: "diversion",
    meaning: "something that distracts attention",
    example: "The comedy scene provided a welcome diversion.",
  },

  {
    word: "humiliating",
    meaning: "making someone feel embarrassed",
    example: "Forgetting her lines was humiliating.",
  },

  {
    word: "uncanny",
    meaning: "strange or mysterious",
    example: "The actor had an uncanny resemblance to the real person.",
  },

  {
    word: "devastated",
    meaning: "extremely upset or shocked",
    example: "Fans were devastated by the ending.",
  },

  {
    word: "concerned",
    meaning: "worried about something",
    example: "The parents were concerned about the teenager.",
  },

  {
    word: "reluctantly",
    meaning: "doing something unwillingly",
    example: "He reluctantly admitted the truth.",
  },

  {
    word: "clumsy",
    meaning: "awkward or lacking coordination",
    example: "The character was lovable but clumsy.",
  },

  {
    word: "squander",
    meaning: "to waste money or opportunities",
    example: "He squandered his talent and success.",
  },

  {
    word: "utterly",
    meaning: "completely",
    example: "The audience was utterly shocked.",
  },

  {
    word: "capricious",
    meaning: "changing mood suddenly",
    example: "The director was famous for his capricious behaviour.",
  },

  {
    word: "condolences",
    meaning: "sympathy after a loss",
    example: "She offered her condolences after the tragedy.",
  },

  {
    word: "vibrant",
    meaning: "full of life and energy",
    example: "The city in the movie looked vibrant and exciting.",
  },

  {
    word: "vexing",
    meaning: "annoying or frustrating",
    example: "The ending raised several vexing questions.",
  },

  {
    word: "infuriating",
    meaning: "making someone extremely angry",
    example: "The villain’s actions were infuriating.",
  },

  {
    word: "indeed",
    meaning: "really or truly",
    example: "It was indeed one of the best films of the year.",
  },

  {
    word: "resilient",
    meaning: "able to recover after difficulties",
    example: "The main character was resilient despite many problems.",
  },

  {
    word: "on occasion",
    meaning: "sometimes but not regularly",
    example: "On occasion, he watches old black-and-white films.",
  },

  {
    word: "lay it on me",
    meaning: "tell me the bad news",
    example: "Just lay it on me. Did the series get cancelled?",
  },
];

const quizAnswers = {
  q1: "observant",
  q2: "devastated",
  q3: "vibrant",
  q4: "squander",
  q5: "resilient",
};

function AdvancedMovieVocabularyLesson() {
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

    Object.keys(quizAnswers).forEach((key) => {
      if (answers[key] === quizAnswers[key]) {
        points++;
      }
    });

    setScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">B1+ / B2 Vocabulary Lesson</p>

        <h1>🎬 Advanced Movie Vocabulary</h1>

        <p className="description">
          Learn sophisticated English vocabulary through films, emotions and
          storytelling.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="lesson">
        <h2>📚 Vocabulary Box</h2>

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
        <h2>📖 Reading</h2>

        <div className="exercise-card">
          <h3>A Film Nobody Expected</h3>

          <p>
            Last weekend, I watched an insanely emotional psychological drama
            that completely surprised me. The storyline was uncanny, and the
            actors delivered stupendous performances.
          </p>

          <p>
            The main character was a resilient young woman who refused to
            squander her opportunities despite many humiliating experiences. On
            occasion, the film felt emotionally overwhelming, but it remained
            deeply engaging.
          </p>

          <p>
            The ending was utterly devastating. Several people in the cinema
            were visibly concerned and emotional. Honestly, the final scene was
            indeed unforgettable.
          </p>
        </div>
      </section>

      {/* QUESTIONS */}

      <section className="lesson">
        <h2>💬 Reading Questions</h2>

        <div className="exercise-card">
          <p>1. What kind of film did the speaker watch?</p>

          <p>2. Why was the main character resilient?</p>

          <p>3. How did the audience react to the ending?</p>

          <p>4. Which vocabulary word means “extremely impressive”?</p>
        </div>
      </section>

      {/* GRAMMAR / LANGUAGE */}

      <section className="lesson">
        <h2>🧠 Language Focus</h2>

        <div className="exercise-card">
          <h3>Intensifiers & Emotional Language</h3>

          <table className="grammar-table">
            <thead>
              <tr>
                <th>Word</th>
                <th>Function</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>insanely</td>
                <td>strong intensifier</td>
              </tr>

              <tr>
                <td>utterly</td>
                <td>means completely</td>
              </tr>

              <tr>
                <td>indeed</td>
                <td>confirms something</td>
              </tr>

              <tr>
                <td>devastated</td>
                <td>strong emotional adjective</td>
              </tr>

              <tr>
                <td>vexing</td>
                <td>describes frustration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* QUIZ */}

      <section className="lesson">
        <h2>✏️ Vocabulary Quiz</h2>

        <div className="exercise-card">
          <p>1. Someone who notices details quickly is ___</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>

            <option value="observant">observant</option>

            <option value="clumsy">clumsy</option>

            <option value="vexing">vexing</option>
          </select>

          <p>2. If you are extremely upset, you are ___</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>

            <option value="devastated">devastated</option>

            <option value="vibrant">vibrant</option>

            <option value="concerned">concerned</option>
          </select>

          <p>3. A city full of energy is ___</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>

            <option value="vibrant">vibrant</option>

            <option value="uncanny">uncanny</option>

            <option value="humiliating">humiliating</option>
          </select>

          <p>4. To waste opportunities means to ___ them.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>

            <option value="squander">squander</option>

            <option value="observe">observe</option>

            <option value="divert">divert</option>
          </select>

          <p>5. Someone emotionally strong after difficulties is ___</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>

            <option value="resilient">resilient</option>

            <option value="clumsy">clumsy</option>

            <option value="infuriating">infuriating</option>
          </select>

          <button onClick={checkAnswers}>Check Answers</button>

          {score !== null && (
            <p className="score">You got {score} / 5 correct ✨</p>
          )}
        </div>
      </section>

      {/* WORD ORDER EXERCISE */}

      <section className="lesson">
        <h2>🔀 Put the Words in the Correct Order</h2>

        <div className="exercise-card">
          <h3>Rewrite the sentences correctly.</h3>

          <br />

          <p>1. devastated / utterly / audience / was / the</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>2. insanely / the / was / film / emotional</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>3. resilient / despite / problems / she / remained / the</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>4. actor / uncanny / had / resemblance / an / the</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>5. opportunities / people / sometimes / squander / their</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>6. vibrant / looked / city / the / and / modern</p>

          <div className="answer-box">→ ___________________________</div>
        </div>
      </section>

      {/* answers 
          1. The audience was utterly devastated.

2. The film was insanely emotional.

3. She remained resilient despite the problems.

4. The actor had an uncanny resemblance.

5. People sometimes squander their opportunities.

6. The city looked vibrant and modern.*/}

      {/* MISTAKE CORRECTION */}

      <section className="lesson">
        <h2>🚨 Mistake Correction</h2>

        <div className="exercise-card">
          <h3>Find and correct the mistakes.</h3>

          <br />

          <p>1. The ending of the film was very devastate.</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>2. She is very observe and notices every detail.</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>3. The actor gave an insanely performance.</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>4. He squandered all his money careless.</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>5. The audience were utterly shock by the ending.</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>6. Her behaviour was very capriciously yesterday.</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>7. On occasions, I enjoy watching old horror films.</p>

          <div className="answer-box">→ ___________________________</div>

          <br />

          <p>8. The city in the movie looked vibrantly and modern.</p>

          <div className="answer-box">→ ___________________________</div>
        </div>
      </section>
      {/* answers
      1. The ending of the film was very devastating.

2. She is very observant and notices every detail.

3. The actor gave an insanely good performance.
OR
The actor gave an insane performance.

4. He squandered all his money carelessly.

5. The audience were utterly shocked by the ending.

6. Her behaviour was very capricious yesterday.

7. On occasion, I enjoy watching old horror films.

8. The city in the movie looked vibrant and modern. */}

      {/* MEMORY GAME */}

      <section className="lesson">
        <h2>🧠 Memory Game</h2>

        <div className="exercise-card">
          <h3>Match the vocabulary words with their meanings.</h3>

          <br />

          <div className="memory-grid">
            {/* WORDS */}

            <div className="memory-column">
              <div className="memory-card">1. observant</div>

              <div className="memory-card">2. resilient</div>

              <div className="memory-card">3. uncanny</div>

              <div className="memory-card">4. squander</div>

              <div className="memory-card">5. vibrant</div>

              <div className="memory-card">6. infuriating</div>
              <div className="memory-card">7. condolences</div>

              <div className="memory-card">8. reluctantly</div>

              <div className="memory-card">9. vexing</div>
            </div>

            {/* DEFINITIONS */}

            <div className="memory-column">
              <div className="memory-card">a. full of energy and life</div>

              <div className="memory-card">
                b. able to recover after difficulties
              </div>

              <div className="memory-card">c. strange or mysterious</div>

              <div className="memory-card">d. extremely annoying</div>

              <div className="memory-card">e. quick to notice details</div>

              <div className="memory-card">f. waste carelessly</div>
              <div className="memory-card">g. sympathy after a loss</div>

              <div className="memory-card">h. doing something unwillingly</div>

              <div className="memory-card">i. annoying or frustrating</div>
            </div>
          </div>

          <br />
          <table className="answer-table">
            <thead>
              <tr>
                <th>Word Number</th>
                <th>Your Answer</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>

              <tr>
                <td>7</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>

              <tr>
                <td>8</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>

              <tr>
                <td>9</td>
                <td>
                  <input type="text" placeholder="Enter letter" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* GRAMMAR: ARTICLES */}
      <section className="lesson">
        <h2>📘 Grammar: Articles (a / an / the / Ø)</h2>

        <div className="exercise-card">
          <h3>💡 What are articles?</h3>
          <p>
            Articles are small words that help us show if we are talking about
            something general or specific.
          </p>

          <ul>
            <li>
              <b>a / an</b> → one thing, not specific
            </li>
            <li>
              <b>the</b> → a specific thing we both know
            </li>
            <li>
              <b>Ø (no article)</b> → general ideas or plural things
            </li>
          </ul>

          <br />

          <h3>🧠 Easy rules to remember</h3>

          <div className="grammar-cards">
            <div className="grammar-card">
              <h4>🟢 a / an</h4>
              <p>We use it when we talk about ONE thing for the first time.</p>
              <small>
                👉 I saw <b>a film</b>.
              </small>
            </div>

            <div className="grammar-card">
              <h4>🔵 the</h4>
              <p>We use it when both speaker and listener know the thing.</p>
              <small>
                👉 I watched <b>the film</b> you recommended.
              </small>
            </div>

            <div className="grammar-card">
              <h4>🟣 no article (Ø)</h4>
              <p>We use it for general ideas, plural or abstract nouns.</p>
              <small>
                👉 <b>Movies</b> are interesting.
              </small>
            </div>
          </div>

          <br />

          <h3>⚡ Quick memory trick</h3>

          <p>
            👉 <b>a/an = 1 thing</b> <br />
            👉 <b>the = this specific thing</b> <br />
            👉 <b>Ø = things in general</b>
          </p>
        </div>
      </section>
      <section className="lesson">
        <h2>🌍 Grammar: Geographical Names & Articles</h2>

        <div className="exercise-card">
          <h3>💡 When do we use "the" with places?</h3>

          <p>
            Some geographical names need the article <b>the</b>, but others do
            not. It depends on the type of place.
          </p>

          <br />

          <h3>🧠 General rules</h3>

          <div className="grammar-cards">
            <div className="grammar-card">
              <h4>❌ No article</h4>
              <p>Most countries, cities, continents</p>
              <small>Ukraine, France, Tokyo, Europe</small>
            </div>

            <div className="grammar-card">
              <h4>🔵 THE + groups of countries</h4>
              <p>Countries with plural names or “states”</p>
              <small>the United States, the Netherlands</small>
            </div>

            <div className="grammar-card">
              <h4>🌊 THE + water names</h4>
              <p>Oceans, seas, rivers</p>
              <small>the Atlantic Ocean, the Nile, the Black Sea</small>
            </div>

            <div className="grammar-card">
              <h4>🏔 THE + mountains</h4>
              <p>Mountain ranges (not single mountains)</p>
              <small>the Alps, the Himalayas</small>
            </div>

            <div className="grammar-card">
              <h4>🏙 THE + special places</h4>
              <p>Regions, deserts, and groups of islands</p>
              <small>the Sahara, the Middle East, the Maldives</small>
            </div>
          </div>

          <br />

          <h3>⚡ Quick memory trick</h3>

          <p>
            👉 If it is <b>unique or a group</b> → use <b>THE</b>
            <br />
            👉 If it is a <b>normal country or city</b> → no article
          </p>
        </div>
      </section>
      <section className="lesson">
        <h2>✏️ Practice: Choose the correct article</h2>

        <div className="exercise-card">
          <p>1. I watched ___ interesting film yesterday.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>an</option>
            <option>the</option>
          </select>

          <p>2. She is ___ actor in the new movie.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>an</option>
            <option>the</option>
          </select>

          <p>3. We talked about ___ movie we saw last week.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>an</option>
            <option>the</option>
          </select>

          <p>4. ___ movies are becoming more advanced.</p>
          <select>
            <option value="">choose</option>
            <option>Movies</option>
            <option>The movies</option>
            <option>A movies</option>
          </select>
        </div>
      </section>

      <section className="lesson">
        <h2>✏️ Exercise 1: Choose the correct article</h2>

        <div className="exercise-card">
          <p>1. I visited ___ France last summer.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>

          <p>2. We crossed ___ Nile during our trip.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>

          <p>3. She lives in ___ United States.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>

          <p>4. They traveled to ___ Alps last winter.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>

          <p>5. ___ Tokyo is a very modern city.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>
        </div>
      </section>
      <section className="lesson">
        <h2>🧠 Exercise 2: Correct the mistakes</h2>

        <div className="exercise-card">
          <p>1. I went to the France last year.</p>
          <div className="answer-box">→ ______________________</div>

          <p>2. She visited Amazon River.</p>
          <div className="answer-box">→ ______________________</div>

          <p>3. They climbed the Everest.</p>
          <div className="answer-box">→ ______________________</div>

          <p>4. We live in the Ukraine.</p>
          <div className="answer-box">→ ______________________</div>

          <p>5. He traveled to the Europe.</p>
          <div className="answer-box">→ ______________________</div>
        </div>
      </section>
      <section className="lesson">
        <h2>🌍 Exercise 3: Fill in the blanks</h2>

        <div className="exercise-card">
          <p>1. I swam in ___ Mediterranean Sea.</p>
          <input type="text" placeholder="your answer" />

          <p>2. She moved to ___ Netherlands for work.</p>
          <input type="text" placeholder="your answer" />

          <p>3. We explored ___ Sahara last year.</p>
          <input type="text" placeholder="your answer" />

          <p>4. He lives in ___ Canada.</p>
          <input type="text" placeholder="your answer" />

          <p>5. They crossed ___ Atlantic Ocean by ship.</p>
          <input type="text" placeholder="your answer" />
        </div>
      </section>

      <section className="lesson">
        <h2>✏️ Exercise 1: Articles + Vocabulary</h2>

        <div className="exercise-card">
          <p>1. We watched ___ stupendous film last night.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>

          <p>2. She was ___ resilient character in the movie.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>

          <p>3. The actor showed ___ uncanny talent.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>

          <p>4. It was ___ utterly devastating ending.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>

          <p>5. The audience felt ___ infuriating frustration.</p>
          <select>
            <option value="">choose</option>
            <option>a</option>
            <option>the</option>
            <option>no article</option>
          </select>
        </div>
      </section>
      <section className="lesson">
        <h2>🧠 Exercise 2: Correct the mistakes</h2>

        <div className="exercise-card">
          <p>1. The film was a insanely emotional.</p>
          <div className="answer-box">→ ______________________</div>

          <p>2. She is the observant character in story.</p>
          <div className="answer-box">→ ______________________</div>

          <p>3. We saw stupendous movie yesterday.</p>
          <div className="answer-box">→ ______________________</div>

          <p>4. The ending was utterly devastate.</p>
          <div className="answer-box">→ ______________________</div>

          <p>5. Actor had uncanny resemblance.</p>
          <div className="answer-box">→ ______________________</div>
        </div>
      </section>
      <section className="lesson">
        <h2>🌍 Exercise 3: Fill in the blanks</h2>

        <div className="exercise-card">
          <p>1. I watched ___ stupendous film in ___ United States.</p>
          <input type="text" placeholder="article 1" />
          <input type="text" placeholder="article 2" />

          <p>2. The actor was ___ uncanny performer in ___ France.</p>
          <input type="text" placeholder="article 1" />
          <input type="text" placeholder="article 2" />

          <p>3. We crossed ___ Nile after watching ___ devastating movie.</p>
          <input type="text" placeholder="article 1" />
          <input type="text" placeholder="article 2" />

          <p>4. She played ___ resilient character in ___ Netherlands.</p>
          <input type="text" placeholder="article 1" />
          <input type="text" placeholder="article 2" />

          <p>5. It was ___ utterly infuriating ending in ___ Alps setting.</p>
          <input type="text" placeholder="article 1" />
          <input type="text" placeholder="article 2" />
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. What film has devastated you emotionally?</p>

          <p>2. Do you enjoy uncanny psychological thrillers?</p>

          <p>3. Which movie character do you consider resilient?</p>

          <p>4. Have you ever watched a truly stupendous film?</p>

          <p>5. What kind of behaviour do you find infuriating?</p>
        </div>
      </section>
    </main>
  );
}

export default AdvancedMovieVocabularyLesson;
