import React from "react";
import Recipe1 from "../picture/Recipe1.png";
import Recipe2 from "../picture/Recipe2.png";
import Recipe3 from "../picture/Recipe3.png";
import Footer from "../components/Footer";

const RecipePage = () => {
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
              href="https://github.com/rajeevRuhaan/homerecipe"
              target="_blank"
              rel="noreferrer"
            >
              Repo for frontend
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rajeevRuhaan/symfony-recipe-backend"
              target="_blank"
              rel="noreferrer"
            >
              Repo for backend
            </a>
          </li>
          <li>
            <a
              href="https://happy-kilby-4009e8.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live site
            </a>
          </li>
        </ul>
      </nav>
      <body>
        <div className="image">
          <img src={Recipe1} alt="recipe home" />
        </div>
        <section>
          <div className="content">
            <h1 id="overview">Overview</h1>

            <div>
              <h2>Summary</h2>
              <p>
                Recipe book is simple react and Symphony based web app. The user
                can post their recipe using form. The recipes displayed as list
                in Recipe page and the page also give option to view detail. I
                have also used plain css and bootstrap for styling the page. The
                app is lacking mobile responsive. In future if I get free time I
                will work with styling this app for all kind of devices.
              </p>
              <h2>Web Stack</h2>
              <p>
                This app was created using React (frontend), PHP and Symphony
                (REST api).
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Recipe2} alt="recipe app" />
          </div>
          <div className="content">
            <h1 id="process">Process </h1>
            <div>
              <h3>Design</h3>
              <p>
                The design is simple where app contain three page home, recipes,
                form and about section. The recipes are listed where search
                option also applied later. For futher reading it contains link
                for next page to display detail resipe. This was learning period
                so I have followed design privided my teacher.{" "}
              </p>
              <h3>Development</h3>
              <p>
                The development was first implement functionality for frontend
                and used JSON server for testing and latar backend written in
                Symphony PHP.{" "}
              </p>
            </div>
          </div>
          <div className="image">
            <img src={Recipe3} alt="form page" />
          </div>
          <div className="content">
            <h1 id="result">Result </h1>
            <div>
              <h3>What I learned?</h3>
              <p>
                {" "}
                I learned how to use React Js for frontend designing. In this
                Recipe book I learned to use class component, function
                component, react hook (useState, useEffect, useHistory,
                useParam), axios(for api call). I also learned
                react-router-bootstrap for using (BrowserRouter, Route, Link){" "}
              </p>
              <p>
                For backend I have used Symphony PHP. Symphony makes work load
                easy for database setup. In this task I come across composer,
                maker, docetrine. In this project I get familirity with Symphony
                but in future I still want dive deeper in Symphony.{" "}
              </p>
            </div>
          </div>
        </section>
      </body>
      <Footer />
    </div>
  );
};

export default RecipePage;
