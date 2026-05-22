import "../index.css";
import { useState } from "react";

const words = [
  {
    word: "backpack",
    meaning: "a bag you carry on your back",
    example: "I always travel with a backpack.",
  },
  {
    word: "portable charger",
    meaning: "a device for charging phones",
    example: "Take a portable charger with you.",
  },
  {
    word: "sleeping bag",
    meaning: "a warm bag for sleeping outdoors",
    example: "My sleeping bag is very warm.",
  },
  {
    word: "walking boots",
    meaning: "strong shoes for hiking",
    example: "Walking boots are important for mountains.",
  },
  {
    word: "waterproof jacket",
    meaning: "a jacket that keeps rain out",
    example: "A waterproof jacket is useful in the jungle.",
  },
  {
    word: "torch",
    meaning: "a small light you carry",
    example: "Don’t forget your torch.",
  },
  {
    word: "tent",
    meaning: "a portable shelter for camping",
    example: "We slept in a tent.",
  },
  {
    word: "sunglasses",
    meaning: "glasses that protect your eyes from the sun",
    example: "I wear sunglasses every summer.",
  },
  {
    word: "insect repellent",
    meaning: "spray that keeps insects away",
    example: "Use insect repellent in the jungle.",
  },
];

function Lesson4() {
  const [answers, setAnswers] = useState({});
  const [score1, setScore1] = useState(null);
  const [score2, setScore2] = useState(null);

  const correctAnswers1 = {
    q1: "portable charger",
    q2: "backpack",
    q3: "insect repellent",
    q4: "waterproof jacket",
    q5: "torch",
  };

  const correctAnswers2 = {
    m1: "c",
    m2: "e",
    m3: "b",
    m4: "d",
    m5: "a",
  };

  const handleChange = (q, value) => {
    setAnswers((prev) => ({
      ...prev,
      [q]: value,
    }));
  };

  const checkAnswers1 = () => {
    let points = 0;

    Object.keys(correctAnswers1).forEach((key) => {
      if (answers[key] === correctAnswers1[key]) {
        points++;
      }
    });

    setScore1(points);
  };

  const checkAnswers2 = () => {
    let points = 0;

    Object.keys(correctAnswers2).forEach((key) => {
      if (answers[key] === correctAnswers2[key]) {
        points++;
      }
    });

    setScore2(points);
  };

  return (
    <main className="page">
      {/* HERO */}

      <section className="hero">
        <p className="subtitle">Lesson 04</p>

        <h1>Travel & Outdoor Equipment ✈️</h1>

        <p className="description">
          Learn vocabulary for travelling, camping and adventure trips.
        </p>
      </section>

      {/* VOCABULARY */}

      <section className="grid">
        {words.map((item) => (
          <div className="card" key={item.word}>
            <h2>{item.word}</h2>

            <p className="meaning">{item.meaning}</p>

            <p className="example">{item.example}</p>
          </div>
        ))}
      </section>

      {/* EXERCISE 1 */}

      <section className="lesson">
        <h2>🌿 Exercise 1 — Choose the correct word</h2>

        <div className="exercise-card">
          <p>1. This device charges your phone.</p>

          <select onChange={(e) => handleChange("q1", e.target.value)}>
            <option value="">Choose</option>
            <option value="portable charger">portable charger</option>
            <option value="tent">tent</option>
            <option value="torch">torch</option>
          </select>

          <p>2. You carry this on your back.</p>

          <select onChange={(e) => handleChange("q2", e.target.value)}>
            <option value="">Choose</option>
            <option value="backpack">backpack</option>
            <option value="sleeping bag">sleeping bag</option>
            <option value="sunglasses">sunglasses</option>
          </select>

          <p>3. This protects you from insects.</p>

          <select onChange={(e) => handleChange("q3", e.target.value)}>
            <option value="">Choose</option>
            <option value="insect repellent">insect repellent</option>
            <option value="walking boots">walking boots</option>
            <option value="torch">torch</option>
          </select>

          <p>4. This jacket protects you from rain.</p>

          <select onChange={(e) => handleChange("q4", e.target.value)}>
            <option value="">Choose</option>
            <option value="waterproof jacket">waterproof jacket</option>
            <option value="tent">tent</option>
            <option value="sleeping bag">sleeping bag</option>
          </select>

          <p>5. You use this to see in the dark.</p>

          <select onChange={(e) => handleChange("q5", e.target.value)}>
            <option value="">Choose</option>
            <option value="torch">torch</option>
            <option value="portable charger">portable charger</option>
            <option value="sunglasses">sunglasses</option>
          </select>
        </div>

        <button onClick={checkAnswers1}>Check answers</button>

        {score1 !== null && (
          <p className="score">You got {score1} / 5 correct 🎯</p>
        )}
      </section>

      {/* EXERCISE 2 */}

      <section className="lesson">
        <h2>🧩 Exercise 2 — Match the words with meanings</h2>

        <div className="exercise-card">
          <p>1. torch</p>

          <select onChange={(e) => handleChange("m1", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">shoes for hiking</option>
            <option value="b">glasses for sun protection</option>
            <option value="c">light for dark places</option>
            <option value="d">something you sleep in</option>
            <option value="e">portable camping shelter</option>
          </select>

          <p>2. tent</p>

          <select onChange={(e) => handleChange("m2", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">shoes for hiking</option>
            <option value="b">glasses for sun protection</option>
            <option value="c">light for dark places</option>
            <option value="d">something you sleep in</option>
            <option value="e">portable camping shelter</option>
          </select>

          <p>3. sunglasses</p>

          <select onChange={(e) => handleChange("m3", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">shoes for hiking</option>
            <option value="b">glasses for sun protection</option>
            <option value="c">light for dark places</option>
            <option value="d">something you sleep in</option>
            <option value="e">portable camping shelter</option>
          </select>

          <p>4. sleeping bag</p>

          <select onChange={(e) => handleChange("m4", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">shoes for hiking</option>
            <option value="b">glasses for sun protection</option>
            <option value="c">light for dark places</option>
            <option value="d">something you sleep in</option>
            <option value="e">portable camping shelter</option>
          </select>

          <p>5. walking boots</p>

          <select onChange={(e) => handleChange("m5", e.target.value)}>
            <option value="">Choose</option>
            <option value="a">shoes for hiking</option>
            <option value="b">glasses for sun protection</option>
            <option value="c">light for dark places</option>
            <option value="d">something you sleep in</option>
            <option value="e">portable camping shelter</option>
          </select>
        </div>

        <button onClick={checkAnswers2}>Check answers</button>

        {score2 !== null && (
          <p className="score">You got {score2} / 5 correct ✨</p>
        )}
      </section>

      {/* READING */}

      <section className="lesson">
        <h2>💬 Reading — Advice Forum</h2>

        <div className="exercise-card">
          <p>
            <b>Alison:</b> Hey, has anyone been to Peru? I’m going there next
            month on a guided tour to see the Amazon jungle and to visit the
            Inca city of Machu Picchu. I need to travel as light as possible but
            take everything I’ll really need. What should I take?
          </p>

          <p>
            <b>Max:</b> You’ll need a good quality backpack and some comfortable
            walking boots — and the right clothes for all the different places
            you’re planning to visit.
          </p>

          <p>
            <b>Penny:</b> Yes, it’s very hot and humid in the Amazon. Take
            fast-drying clothes so you can wash and dry them quickly overnight.
          </p>

          <p>
            <b>Sue:</b> Remember that you’ll need extra clothes to keep you warm
            in Machu Picchu because it gets cold at night.
          </p>

          <p>
            <b>Zak:</b> You can buy sweaters and gloves quite cheaply in Peru,
            so you don’t need to pack those.
          </p>

          <p>
            <b>Maggie:</b> Don’t forget to take a portable charger too so you
            can recharge your phone.
          </p>

          <p>
            <b>Tom:</b> Insect repellent is very important to keep insects away.
          </p>

          <p>
            <b>Charlie:</b> Take sunglasses and a waterproof jacket for the
            jungle.
          </p>

          <p>
            <b>Isa:</b> You’ll need a good digital camera for wildlife photos.
          </p>
        </div>
      </section>

      {/* EXERCISE 3 */}

      <section className="lesson">
        <h2>✏️ Exercise 3 — Answer the questions</h2>

        <div className="exercise-card">
          <p>1. Where is Alison going?</p>
          <textarea placeholder="Write here..." />

          <p>2. Why does she need walking boots?</p>
          <textarea placeholder="Write here..." />

          <p>3. Why is insect repellent important?</p>
          <textarea placeholder="Write here..." />

          <p>4. What would you take on this trip?</p>
          <textarea placeholder="Write here..." />
        </div>
      </section>

      {/* SPEAKING */}

      <section className="lesson">
        <h2>🗣 Speaking Practice</h2>

        <div className="exercise-card">
          <p>• Do you like camping?</p>

          <p>• What items do you always take when travelling?</p>

          <p>• Would you like to visit Peru?</p>

          <p>• What country would you like to travel to?</p>

          <p>• What is the most useful travel item?</p>
        </div>
      </section>

      {/* GRAMMAR */}

      <section className="lesson">
        <h2>📚 Grammar — Expressing Purpose</h2>

        <div className="exercise-card">
          <p className="hint">
            We use <b>to</b>, <b>in order to</b>, and <b>so that</b> to explain
            the purpose of an action.
          </p>

          <p>
            <b>Structure:</b>
          </p>

          <p>• subject + verb + to + infinitive</p>

          <p>• subject + verb + in order to + infinitive</p>

          <p>• subject + verb + so that + subject + can + verb</p>

          <hr />

          <p>
            <b>Examples:</b>
          </p>

          <p>I’m learning English to travel abroad.</p>

          <p>I’m saving money in order to buy a new camera.</p>

          <p>I take a torch so that I can see in the dark.</p>
        </div>
      </section>

      {/* EXERCISE 4 */}

      <section className="lesson">
        <h2>✏️ Exercise 4 — Rewrite the sentences</h2>

        <div className="exercise-card">
          <p>
            1. I’m learning English so that I can travel more. (in order to)
          </p>

          <textarea placeholder="Rewrite the sentence..." />

          <p>2. I take sunglasses to protect my eyes. (so that)</p>

          <textarea placeholder="Rewrite the sentence..." />

          <p>3. I need a backpack in order to carry my things. (to)</p>

          <textarea placeholder="Rewrite the sentence..." />

          <p>
            4. We packed a waterproof jacket so that we could stay dry. (to)
          </p>

          <textarea placeholder="Rewrite the sentence..." />

          <p>
            5. She bought walking boots to hike in the mountains. (in order to)
          </p>

          <textarea placeholder="Rewrite the sentence..." />
        </div>
      </section>

      {/* EXERCISE 5 */}

      <section className="lesson">
        <h2>🧩 Exercise 5 — Complete the sentences</h2>

        <div className="exercise-card">
          <p>1. I’m learning English so I can __________.</p>

          <input type="text" placeholder="Type here..." />

          <p>2. I take a portable charger so that __________.</p>

          <input type="text" placeholder="Type here..." />

          <p>3. I’d like to visit Peru to __________.</p>

          <input type="text" placeholder="Type here..." />

          <p>4. If you go camping, you need a torch to __________.</p>

          <input type="text" placeholder="Type here..." />

          <p>5. On holiday I always bring sunglasses in order to __________.</p>

          <input type="text" placeholder="Type here..." />

          <p>
            6. For a long flight, it’s useful to take something to __________.
          </p>

          <input type="text" placeholder="Type here..." />
        </div>
      </section>

      <section className="lesson">
        <h2>🗣 Listening Practice</h2>

        <div className="exercise-card">
          <p>• What's the problem?</p>

          <p>• What do they decide to do?</p>

          <p>•which item do they decide not to take?</p>
        </div>
      </section>

      {/* WRITING */}

      <section className="lesson">
        <h2>✨ Writing Task</h2>

        <div className="exercise-card">
          <p>Imagine you are going on a trip to another country.</p>

          <p>Write what you would pack and why.</p>

          <textarea placeholder="Write your travel plan here..." />
        </div>
      </section>
    </main>
  );
}

export default Lesson4;
