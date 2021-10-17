import React from "react";
import Footer from "../components/Footer";
import SpeedGame1 from "../picture/SpeedGame1.png";
import SpeedGameReact1 from "../picture/SpeedGameReact1.png";

const SpeedGamePage = () => {
  return (
    <div className="page">
      <h1>Recipe Book</h1>
      <nav className="content-nav">
        <ul>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#result">Result</a>
          </li>
          <li>
            <a
              href="https://github.com/rajeevRuhaan/Rajeev_react21_javaScript/tree/master/Task5_speedTest"
              target="_blank"
              rel="noreferrer"
            >
              Repo (JavaScript speedgame)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rajeevRuhaan/React21K_react_lesson/tree/master/speedgame"
              target="_blank"
              rel="noreferrer"
            >
              Repo (React speedgame)
            </a>
          </li>
          <li>
            <a
              href="https://public.bc.fi/s2100155/Task5_speedTest/"
              target="_blank"
              rel="noreferrer"
            >
              Live site (JavaScript)
            </a>
          </li>
          <li>
            <a
              href="https://public.bc.fi/s2100155/speedgame_reactapp/build/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live site (react app)
            </a>
          </li>
        </ul>
      </nav>
      <body>
        <h3>Speed Game using JavaScript</h3>
        <div className="image">
          <img id="speedgame1" src={SpeedGame1} alt="speedgame" />
        </div>
        <section>
          <div className="content">
            <h1 id="overview">Overview</h1>

            <div>
              <h2>Summary</h2>
              <p>
                This speed game is based on JavaScript. During JavaScript lesson
                the task was to create Speedgame.The game have 5 divverent
                level. The setTimeOut start with 1500 ms where speed increases
                on every success 5 active ball clicked. On 3 missed active ball
                will end the game.
              </p>
              <h2>Web Stack</h2>
              <p>This app was created using React HTML, CSS and JavaScript.</p>
            </div>
          </div>

          <div className="content">
            <h1 id="process">Process </h1>
            <div>
              <h3>Design</h3>
              <p>
                During writing code design was not focused. Later I could not
                give time on designing this app in mobile responsive.{" "}
              </p>
              <h3>Development</h3>
              <p>
                This app was created during learning JavaScript where I was just
                get familirity with HTML DOM getElementById(), random function,
                function, if/else, addEventListener(). I was thinking to
                increase the ball number but didnot get time to do so.{" "}
              </p>
            </div>
          </div>

          <div className="content">
            <h1 id="result">Result </h1>
            <div>
              <h3>What I learned?</h3>
              <p>
                {" "}
                I learned how JavaScript used to change HTML DOM. I come across
                function and eventlistener. I also come across to use if/else
                statement.{" "}
              </p>
            </div>
          </div>
          <hr />
          <h1>Speed Game using React</h1>
          <div className="image">
            <img src={SpeedGameReact1} alt="speedgame" />
          </div>
          <p style={{ fontSize: "25px", marginLeft: "20%" }}>
            This game was re created in React during study React. The
            functanility is same as previous speed game in JavaScript. Again css
            part is still need more development. most of my app is not mobile
            responsive. In future I will try to give time to be mobile
            responsive.
          </p>
        </section>
      </body>
      <Footer />
    </div>
  );
};

export default SpeedGamePage;
