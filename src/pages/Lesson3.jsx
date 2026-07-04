import "../index.css";
import { useState } from "react";

const idioms = [
  {
    idiom: "like clockwork",
    meaning: "something happens very regularly",
    example: "Every morning, it's like clockwork – she wakes up at 6 a.m.",
  },
  {
    idiom: "be on the fence",
    meaning: "be unable to decide",
    example: "I'm still on the fence about which university to apply to.",
  },
  {
    idiom: "break a sweat",
    meaning: "make a lot of effort",
    example: "She passed the exam without breaking a sweat.",
  },
  {
    idiom: "hit it off",
    meaning: "become friends quickly",
    example: "We hit it off the moment we met.",
  },
  {
    idiom: "I'm on it",
    meaning: "I'm already taking care of it",
    example: "Don't worry about the report – I'm on it.",
  },
  {
    idiom: "pipe dream",
    meaning: "an unrealistic idea",
    example: "Owning a private island is just a pipe dream.",
  },
  {
    idiom: "out of the blue",
    meaning: "unexpectedly",
    example: "She called me out of the blue.",
  },
  {
    idiom: "whip up",
    meaning: "prepare something quickly",
    example: "I whipped up a quick lunch.",
  },
];

const answers = {
  gap1: "clockwork",
  gap2: "fence",
  gap3: "blue",
  mc1: "c",
  mc2: "b",
  match1: "d",
  match2: "c",
  match3: "a",
  match4: "b",
  trans1: "pipe dream",
  trans2: "whipped up",
};

export function B1Lesson() {
  const [user, setUser] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const checkAnswers = () => {
    let total = 0;

    Object.keys(answers).forEach((key) => {
      if (
        (user[key] || "").trim().toLowerCase() === answers[key].toLowerCase()
      ) {
        total++;
      }
    });

    setScore(total);
  };

  return (
    <div className="lesson">
      <h1>🧠 B2 Idioms Lesson</h1>

      <h2>Useful Idioms</h2>

      {idioms.map((item) => (
        <div key={item.idiom} className="card">
          <h3>{item.idiom}</h3>
          <p>{item.meaning}</p>
          <p>
            <i>{item.example}</i>
          </p>
        </div>
      ))}

      <hr />

      <h2>Exercise 1 — Fill in the Gaps</h2>

      <p>
        She arrives at exactly 8 a.m. every day. It's like
        <input name="gap1" onChange={handleChange} />
      </p>

      <p>
        I can't decide whether to study medicine or law. I'm on the
        <input name="gap2" onChange={handleChange} />
      </p>

      <p>
        He texted me completely out of the
        <input name="gap3" onChange={handleChange} />
      </p>

      <hr />

      <h2>Exercise 2 — Multiple Choice</h2>

      <p>1. What does "pipe dream" mean?</p>

      <label>
        <input type="radio" name="mc1" value="a" onChange={handleChange} />
        A. A travel plan
      </label>

      <label>
        <input type="radio" name="mc1" value="b" onChange={handleChange} />
        B. A useful idea
      </label>

      <label>
        <input type="radio" name="mc1" value="c" onChange={handleChange} />
        C. An unrealistic dream
      </label>

      <br />
      <br />

      <p>2. "I'm on it" means...</p>

      <label>
        <input type="radio" name="mc2" value="a" onChange={handleChange} />
        A. I'm standing on something.
      </label>

      <label>
        <input type="radio" name="mc2" value="b" onChange={handleChange} />
        B. I'm already dealing with it.
      </label>

      <label>
        <input type="radio" name="mc2" value="c" onChange={handleChange} />
        C. I'm late.
      </label>

      <hr />

      <h2>Exercise 3 — Match</h2>

      <p>Write the correct letter.</p>

      <p>
        1. hit it off
        <input name="match1" onChange={handleChange} />
      </p>

      <p>
        2. whip up
        <input name="match2" onChange={handleChange} />
      </p>

      <p>
        3. break a sweat
        <input name="match3" onChange={handleChange} />
      </p>

      <p>
        4. out of the blue
        <input name="match4" onChange={handleChange} />
      </p>

      <br />

      <p>A. make a lot of effort</p>
      <p>B. unexpectedly</p>
      <p>C. prepare quickly</p>
      <p>D. become friends immediately</p>

      <hr />

      <h2>Exercise 4 — Replace the Phrase</h2>

      <p>"An unrealistic idea."</p>

      <input name="trans1" onChange={handleChange} />

      <br />
      <br />

      <p>"Prepared dinner very quickly."</p>

      <input name="trans2" onChange={handleChange} />

      <hr />

      <h2>Exercise 5 — Speaking Challenge</h2>

      <p>Create your own sentence using:</p>

      <ul>
        <li>be on the fence</li>
        <li>hit it off</li>
        <li>I'm on it</li>
      </ul>

      <textarea rows="6" placeholder="Write your own sentences..." />

      <br />
      <br />

      <button onClick={checkAnswers}>Check Answers</button>

      {score !== null && <h2>Your score: {score} / 11</h2>}
    </div>
  );
}

export default B1Lesson;
