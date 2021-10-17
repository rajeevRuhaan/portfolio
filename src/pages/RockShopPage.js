import React from "react";
import Footer from "../components/Footer";

const RockShopPage = () => {
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
              href="https://github.com/rajeevRuhaan/Rock-Shop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </li>

          <li>
            <a
              href="https://sharp-swartz-f35205.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live site
            </a>
          </li>
        </ul>
      </nav>
      <body>
        <h3>Social Web App</h3>
        <div className="image">
          {/* <img src={SocialWebApp2} alt="socialWebApp" /> */}
        </div>
        <section>
          <div className="content">
            <h1 id="overview">Overview</h1>

            <div>
              <h2>Summary</h2>
              <p>
                This is a small I collaborated with 3 other students to create a
                simple web application where user can register and login to use
                the app. The user can also create, edit, delete, read their
                posts and the others'. Users can also post images, like and
                unlike each other post.
              </p>
              <h2>Web Stack</h2>
              <p>
                This app is based on MERN (Mongo, Express, React and Node js)
                stack.
              </p>
            </div>
          </div>

          <div className="content">
            <h1 id="process">Process </h1>
            <div>
              <h3>Design</h3>
              <p>
                We are in a group first design our app in figma and then start
                coading part.{" "}
              </p>
              <h3>Development</h3>
              <p>
                This app was created in purpose to develop further for Demo
                project. We were planing to add more functanility. The
                development was stoped and didnot proceed further for
                development.
              </p>
            </div>
          </div>
          <div className="image">
            {/* <img src={SocialWebApp1} alt="socialWebApp2" /> */}
          </div>
          <div className="content">
            <h1 id="result">Result </h1>
            <div>
              <h3>What I learned?</h3>
              <p>
                {" "}
                During this app designing I was not familier with Redux. I come
                across with Redux during this project. I was mianly involved
                with react (frontend part){" "}
              </p>
            </div>
          </div>
        </section>
      </body>
      <Footer />
    </div>
  );
};

export default RockShopPage;
