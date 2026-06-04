import "../index.css";
import { useState } from "react";

function NMTVocabularyLesson() {
  // STATES

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  // CORRECT ANSWERS

  const correctAnswers = {
    q1: "softly",
    q2: "put",
    q3: "expect",
    q4: "recently",
    q5: "approach",
  };

  // HANDLE CHANGES

  const handleChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  // CHECK ANSWERS

  const checkAnswers = () => {
    let points = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key] === correctAnswers[key]) {
        points++;
      }
    });

    setScore(points);
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <p className="subtitle">B1 / NMT Practice</p>

        <h1>🇬🇧 NMT Vocabulary Lesson</h1>

        <p className="description">
          Practice vocabulary through modern NMT-style exercises.
        </p>
      </section>
      {/* VOCABULARY */}
      <section className="lesson">
        <h2>📚 Vocabulary</h2>

        <div className="grid">
          <div className="card">
            <h3>softly</h3>
            <p>quietly and gently</p>
            <small>She spoke softly.</small>
          </div>

          <div className="card">
            <h3>expect</h3>
            <p>to think something will happen</p>
            <small>I expect good results.</small>
          </div>

          <div className="card">
            <h3>put pressure on</h3>
            <p>to force or stress someone</p>
            <small>Parents shouldn't put pressure on children.</small>
          </div>

          <div className="card">
            <h3>recently</h3>
            <p>not long ago</p>
            <small>She recently moved abroad.</small>
          </div>

          <div className="card">
            <h3>approach</h3>
            <p>a way of dealing with something</p>
            <small>I like your approach to learning.</small>
          </div>
        </div>
      </section>
      {/* EXERCISE */}
      <section className="lesson">
        <h2>✏️ NMT Multiple Choice</h2>

        <div className="exercise-card">
          {/* QUESTION 1 */}

          <p>1. The teacher spoke very _____ so the students could relax.</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="softly">softly</option>
            <option value="expect">expect</option>
            <option value="recently">recently</option>
            <option value="approach">approach</option>
          </select>

          <br />
          <br />

          {/* QUESTION 2 */}

          <p>2. Parents should not _____ pressure on teenagers.</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="make">make</option>
            <option value="put">put</option>
            <option value="take">take</option>
            <option value="do">do</option>
          </select>

          <br />
          <br />

          {/* QUESTION 3 */}

          <p>3. Scientists _____ major climate changes in the future.</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="expect">expect</option>
            <option value="softly">softly</option>
            <option value="approach">approach</option>
            <option value="recently">recently</option>
          </select>

          <br />
          <br />

          {/* QUESTION 4 */}

          <p>4. She has _____ started learning English online.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="recently">recently</option>
            <option value="softly">softly</option>
            <option value="expect">expect</option>
            <option value="approach">approach</option>
          </select>

          <br />
          <br />

          {/* QUESTION 5 */}

          <p>5. His friendly _____ helped solve the conflict.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="approach">approach</option>
            <option value="pressure">pressure</option>
            <option value="softly">softly</option>
            <option value="recently">recently</option>
          </select>

          <br />
          <br />

          {/* BUTTON */}

          <button onClick={checkAnswers}>Check Answers</button>

          {/* SCORE */}

          {score !== null && (
            <p className="score">You got {score} / 5 correct ✨</p>
          )}
        </div>
      </section>
      {/* NMT READING TASK */}
      <section className="lesson">
        <h2>📖 Teenager Problems — NMT Style Reading</h2>

        <div className="exercise-card">
          <h3>
            Choose the correct sentence parts (A–F) to complete the text. There
            is ONE extra option.
          </h3>

          <br />

          <p>
            Being a teenager is not always easy because young people often
            <strong>(1) ______</strong>
            and misunderstandings with adults.
          </p>

          <p>
            Many students feel nervous because parents and teachers
            <strong>(2) ______</strong>
            and behave perfectly at school.
          </p>

          <p>
            Teenagers also spend a lot of time on social media,
            <strong>(3) ______</strong>
            unhappy with their appearance or lifestyle.
          </p>

          <p>
            Some teenagers avoid talking about their feelings
            <strong>(4) ______</strong>
            or laugh at them.
          </p>

          <p>
            However, support from family and friends can help teenagers
            <strong>(5) ______</strong>
            and feel more confident.
          </p>

          <br />

          <div className="options-box">
            <p>A — expect them to get excellent grades</p>

            <p>B — become stronger after difficult situations</p>

            <p>C — have stress, school problems,</p>

            <p>D — because they are afraid people may not understand them</p>

            <p>E — which sometimes makes them feel</p>

            <p>F — spend too much money online</p>
          </div>

          <br />

          <h3>Your Answers</h3>

          <table className="answer-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((num) => (
                <tr key={num}>
                  <td>{num}</td>

                  <td>
                    <input type="text" maxLength="1" placeholder="A" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* ### ✅  1 — C
2 — A
3 — E
4 — D
5 — B

Extra option: F*/}

      {/* NMT READING TASK */}
      <section className="lesson">
        <h2>📖 NMT Reading Task</h2>

        <div className="exercise-card">
          <h3>Choose the correct option (A–E) to complete the text.</h3>

          <br />

          <p>
            Recently, many teenagers have experienced stress because adults
            often
            <strong> (1) ______ </strong> them. Some students feel nervous
            before exams because they <strong> (2) ______ </strong> perfect
            results.
          </p>

          <p>
            Teachers and parents should speak more <strong> (3) ______ </strong>
            and support teenagers emotionally. A calm and friendly
            <strong> (4) ______ </strong> to communication can help students
            feel safer and more confident.
          </p>

          <p>
            Psychologists have <strong> (5) ______ </strong> started discussing
            mental health problems among young people more actively.
          </p>

          <br />

          <div className="options-box">
            <p>A — softly</p>
            <p>B — recently</p>
            <p>C — approach</p>
            <p>D — put pressure on</p>
            <p>E — expect</p>
          </div>

          <br />

          <h3>Your Answers</h3>

          <table className="answer-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((num) => (
                <tr key={num}>
                  <td>{num}</td>

                  <td>
                    <input type="text" maxLength="1" placeholder="A" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default NMTVocabularyLesson;
