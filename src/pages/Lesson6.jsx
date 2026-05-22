import "../index.css";
import { useState } from "react";

const grammarPatterns = [
  {
    title: "verb + -ing",
    example: "I hate making fish pie.",
  },
  {
    title: "verb + to",
    example: "I decided to study politics.",
  },
  {
    title: "verb + sb + to",
    example: "My tutors expected me to do better.",
  },

  {
    title: "adjective + to",
    example: "I was good at taking exams.",
  },
];

function Lesson6() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const correctAnswers = {
    q1: "passing",
    q2: "to forget",
    q3: "doesn't enjoy",
    q4: "was shocked",
    q5: "encouraged",
    q6: "warns",
    q7: "used to like",
    q8: "was encouraged",
    q9: "decided",
  };

  const handleChange = (q, value) => {
    setAnswers((prev) => ({
      ...prev,
      [q]: value,
    }));
  };

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
        <p className="subtitle">Lesson 06</p>

        <h1>Grammar — Verb Patterns 📚</h1>

        <p className="description">
          Learn how to use verb patterns through real stories about exams and
          school experiences.
        </p>
      </section>

      {/* GRAMMAR CARDS */}

      <section className="grid">
        {grammarPatterns.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>

            <p className="example">{item.example}</p>
          </div>
        ))}
      </section>

      {/* READING */}

      <section className="lesson">
        <h2>💬 Reading — My Worst Exam Result</h2>

        <div className="exercise-card">
          <p>
            <b>Biddy Arnott:</b> “It’s years since I took any exams, but I can
            still remember feeling sick with fear before each one. I was a bit
            of a ‘nerdy’ student, I always did my homework and revised hard, so
            usually I didn’t find it too difficult to pass exams — that’s why
            the memory of the one exam I failed makes me shudder to this day. It
            was my domestic science exam — at least that’s what they used to
            call it in those days — it was, in fact, a cookery exam. And who
            could possibly fail that? I know all we ever learned to make in
            class were ginger biscuits and Spaghetti Bolognese, but I’m still
            not sure how I managed to fail. All I can remember is that, one
            minute the fish pie was in my hands, the next, it was face down on
            the floor.”
          </p>

          <p>
            <b>Ted Stockton:</b> “I’m a teacher and I think it’s good to be able
            to say to my shocked students: ‘I once got 9% in an exam.’ That was
            what I scored in the chemistry exam at the end of my first year at
            university. My other results weren’t much better, I only just
            managed to get enough marks overall to allow me to continue to the
            second year. Actually, the dismal mark was no surprise — I’d had a
            ball in my first year and neglected my studies. But 9%! My tutors
            expected me to do better than that.”
          </p>

          <p>
            <b>Winston Laurent:</b> “I wasn’t a star pupil, but I was good at
            taking exams. I was particularly good at maths and physics and I
            dreamed of becoming an astronaut. I hoped to be the first black guy
            on Mars — failing that, a stockbroker in the City and make millions.
            Our maths teacher let us work at our own speed, and by the time I
            was 14 I was years ahead of the rest of my class. My teacher
            encouraged me to take the Advanced-level maths exam at 14, but I was
            worried about being called a ‘swot’ so I refused to. I stopped
            working so hard. Then, when I finally took the exam at 18, I failed
            miserably.”
          </p>
        </div>
      </section>

      {/* EXERCISE 1 */}

      <section className="lesson">
        <h2>🌿 Exercise 1 — Choose the correct answer</h2>

        <div className="exercise-card">
          <p>1. Biddy usually had no problem with ___ exams.</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="taking">taking</option>
            <option value="passing">passing</option>
            <option value="studying">studying</option>
          </select>

          <p>2. She wants ___ the disastrous cookery exam.</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="forget">forget</option>
            <option value="to forget">to forget</option>
            <option value="forgetting">forgetting</option>
          </select>

          <p>3. Nowadays, she ___ cooking fish pie.</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="can't stand">can't stand</option>
            <option value="refuses">refuses</option>
            <option value="doesn't enjoy">doesn't enjoy</option>
          </select>

          <p>4. Ted ___ getting only 9% in his exam.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="remembers">remembers</option>
            <option value="was shocked">was shocked</option>
            <option value="doesn't regret">doesn't regret</option>
          </select>

          <p>5. His tutors ___ him continue with his studies.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="let">let</option>
            <option value="made">made</option>
            <option value="encouraged">encouraged</option>
          </select>

          <p>6. He ___ his students not to behave like him.</p>

          <select onChange={(e) => handleChange("q6", e.target.value)}>
            <option value="">Choose</option>
            <option value="tells">tells</option>
            <option value="warns">warns</option>
            <option value="makes">makes</option>
          </select>

          <p>7. Winston ___ taking maths exams.</p>

          <select onChange={(e) => handleChange("q7", e.target.value)}>
            <option value="">Choose</option>
            <option value="needed">needed</option>
            <option value="didn't mind">didn't mind</option>
            <option value="used to like">used to like</option>
          </select>

          <p>8. He ___ to study maths.</p>

          <select onChange={(e) => handleChange("q8", e.target.value)}>
            <option value="">Choose</option>
            <option value="stopped">stopped</option>
            <option value="was encouraged">was encouraged</option>
            <option value="expected">expected</option>
          </select>

          <p>9. He ___ to become a TV reporter.</p>

          <select onChange={(e) => handleChange("q9", e.target.value)}>
            <option value="">Choose</option>
            <option value="made">made</option>
            <option value="decided">decided</option>
            <option value="advised">advised</option>
          </select>
        </div>

        <button onClick={checkAnswers}>Check answers</button>

        {score !== null && (
          <p className="score">You got {score} / 9 correct 🎯</p>
        )}
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>✏️ Exercise 2 — Complete the sentences from the text</h2>

        <div className="exercise-card">
          <p>1. Biddy usually had no problem with __________ exams.</p>
          <input type="text" placeholder="Type here..." />

          <p>2. She wants __________ the disastrous cookery exam.</p>
          <input type="text" placeholder="Type here..." />

          <p>3. Nowadays, she doesn’t enjoy __________ fish pie.</p>
          <input type="text" placeholder="Type here..." />

          <p>4. Ted was shocked __________ only 9% in his exam.</p>
          <input type="text" placeholder="Type here..." />

          <p>5. His tutors persuaded him __________ with his studies.</p>
          <input type="text" placeholder="Type here..." />

          <p>6. He warns his students not __________ like him.</p>
          <input type="text" placeholder="Type here..." />

          <p>7. Winston used to like __________ maths exams.</p>
          <input type="text" placeholder="Type here..." />

          <p>8. He was encouraged __________ advanced-level maths.</p>
          <input type="text" placeholder="Type here..." />

          <p>9. He decided __________ politics and sociology instead.</p>
          <input type="text" placeholder="Type here..." />
        </div>
      </section>

      {/* Ex3 */}

      <section className="lesson">
        <h2>
          ✏️ Exercise 3 — Listen and complete the sentences. Who do you think
          speaking? (7.2)
        </h2>

        <div className="exercise-card">
          <p>
            1. You are such a swot! You never __________! Come and play football
            with us.
          </p>
          <input type="text" placeholder="Type here..." />

          <p>2. Sir! We __________ why you got such a low mark.</p>
          <input type="text" placeholder="Type here..." />

          <p>3. Oh my goodness! What a mess! You have __________ now.</p>
          <input type="text" placeholder="Type here..." />

          <p>
            4. Good evening! Talks have broken down with the train drivers and
            they are __________ on strike next week.
          </p>
          <input type="text" placeholder="Type here..." />

          <p>5. I __________ it. It was an accident.</p>
          <input type="text" placeholder="Type here..." />

          <p>
            6. Ok, I hope you all __________ the essay on the romantic poets.
          </p>
          <input type="text" placeholder="Type here..." />
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>1. Do you enjoy taking exams?</p>

          <p>2. What subjects are you good at?</p>

          <p>3. Have your teachers ever encouraged you to study harder?</p>

          <p>7. Did your teachers ever make you study more?</p>
          <p>4. What do you hope to achieve in the future?</p>

          <p>5. Have you ever failed an important test?</p>

          <p>6. What activities do you avoid doing?</p>

          <p>8. Would you like to become famous one day?</p>

          <p>9. What do you enjoy learning most?</p>
        </div>
      </section>

      {/* WRITING */}

      <section className="lesson">
        <h2>✨ Writing Task</h2>

        <div className="exercise-card">
          <p>Write about your best or worst exam experience.</p>

          <p>Try to use these grammar patterns:</p>

          <p>• enjoy + -ing</p>
          <p>• decide to</p>
          <p>• encourage someone to</p>
          <p>• good at + -ing</p>
          <p>• make someone + infinitive</p>

          <textarea placeholder="Write here..." />

          {/* REVISION */}
          <section className="lesson">
            <h2>✏️ Exercise 2 — Complete the sentences</h2>

            <div className="exercise-card">
              <p>1. I enjoy __________ English every day.</p>
              <input type="text" placeholder="Type here..." />

              <p>2. My teacher encouraged me __________ harder.</p>
              <input type="text" placeholder="Type here..." />

              <p>3. I decided __________ a new language.</p>
              <input type="text" placeholder="Type here..." />

              <p>4. My parents made me __________ my homework.</p>
              <input type="text" placeholder="Type here..." />

              <p>5. I’m good at __________ exams.</p>
              <input type="text" placeholder="Type here..." />

              <p>6. I hope __________ abroad one day.</p>
              <input type="text" placeholder="Type here..." />

              <p>7. I avoid __________ before important tests.</p>
              <input type="text" placeholder="Type here..." />

              <p>8. My friend advised me __________ more books.</p>
              <input type="text" placeholder="Type here..." />

              <p>9. I want __________ my English this year.</p>
              <input type="text" placeholder="Type here..." />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Lesson6;
