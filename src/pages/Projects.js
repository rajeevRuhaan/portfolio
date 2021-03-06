import React from "react";
import processdesign from "../picture/process-design.png";
import mekongriver from "../picture/mekong-river.png";
import { LinkContainer } from "react-router-bootstrap";

import Link from "react-bootstrap/NavLink";
import Footer from "../components/Footer";
import rangeslider from "../picture/rangeslider.png";
import jsonAPI from "../picture/jsonAPI.png";

const Projects = () => {
  return (
    <div>
      {/* school project */}
      <div className=" w3-container w3-center w3-padding w3-light-green">
        <h2>School Projects</h2>
        <div className="projects w3-row w3-light-grey  ">
          {/* column */}
          <div className="w3-col  ">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>Recipe Book</h3>
              </header>
              <div class="w3-container">
                <hr />
                <p>
                  Recipe book web app built with React and Symfony. This is
                  school project created while learning React and Symfony.
                </p>
              </div>
              <LinkContainer to="/recipepage">
                <Link>
                  <button class="w3-button w3-block w3-dark-grey">
                    Click to see project
                  </button>
                </Link>
              </LinkContainer>
            </div>
          </div>
          <div className="w3-col ">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>Simple Social Web Application</h3>
              </header>
              <div class="w3-container">
                <hr />
                <p>
                  Simple web application where user can register and login to
                  use the app. The user can also create, edit, delete, read
                  their posts and the others'.
                </p>
              </div>
              <LinkContainer to="/socialWebAppPage">
                <Link>
                  <button class="w3-button w3-block w3-dark-grey">
                    Click to see project
                  </button>
                </Link>
              </LinkContainer>
            </div>
          </div>
          <div className="w3-col ">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>Rock Shop</h3>
              </header>
              <div class="w3-container">
                <hr />
                <p>
                  This app is designed as e-commerce page. The products
                  displayed and can add to cart. JSON server used for backend
                </p>
              </div>
              <LinkContainer to="/rockShopPage">
                <Link>
                  <button class="w3-button w3-block w3-dark-grey">
                    Click to see project
                  </button>
                </Link>
              </LinkContainer>
            </div>
          </div>
          <div className="w3-col ">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>Speed Game</h3>
              </header>
              <div class="w3-container">
                <hr />
                <p>This is simple game app made with JavaScript.</p>
              </div>
              <LinkContainer to="/speedgamepage">
                <Link>
                  <button class="w3-button w3-block w3-dark-grey">
                    Click to see project
                  </button>
                </Link>
              </LinkContainer>
            </div>
          </div>
          {/* column */}
        </div>
      </div>
      {/* Personal porject */}
      <div className=" w3-container w3-center w3-padding ">
        <h2>Personal Projects</h2>
        <div className="projects w3-row w3-light-grey  ">
          {/* column */}
          <div className="w3-col">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>Range Slider</h3>
                <a
                  href="https://github.com/rajeevRuhaan/RangeSlider"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github w3-hover-opacity w3-padding w3-medium">
                    {" "}
                    Github Link
                  </i>
                </a>
              </header>
              <div class="w3-container">
                <hr />
                <img
                  src={rangeslider}
                  style={{ width: "400px", height: "150px" }}
                  alt="rangeslider shows in/out pannel"
                />
              </div>
              <button class="w3-button w3-block w3-dark-grey">
                <a
                  href="https://rajeevruhaan.github.io/RangeSlider/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link for the project
                </a>
              </button>
            </div>
          </div>
          <div className="w3-col">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>Rajeev Sah</h3>
              </header>
              <div class="w3-container">
                <hr />
                <img
                  src={jsonAPI}
                  style={{ width: "400px", height: "150px" }}
                  alt="jsonAPI dashboard"
                />
              </div>
              <button class="w3-button w3-block w3-dark-grey">
                <a
                  href="https://zealous-minsky-cf0dc8.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link for the project
                </a>
              </button>
            </div>
          </div>
          <div className="w3-col">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>Rajeev Sah</h3>
              </header>
              <div class="w3-container">
                <hr />
                <p>Comming...</p>
              </div>
              <button class="w3-button w3-block w3-dark-grey">
                Click to see project
              </button>
            </div>
          </div>

          {/* column */}
        </div>
      </div>
      {/* Publication */}
      <div className=" w3-container w3-center w3-padding w3-light-green">
        <h2>Publication</h2>
        <div className="projects publication w3-row w3-light-grey  ">
          {/* column */}
          <div className="w3-col">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>
                  Development and Optimization of Pilot Plant for Nutrient
                  Recovery from Reject Water (2019)
                </h3>
              </header>
              <div class="w3-container">
                <hr />
                <img
                  src={processdesign}
                  alt="process-design"
                  style={{ width: "80%" }}
                />
                <hr />
                <p>
                  This is my master thesis. The work was to develop laboratory
                  scale rejectwater treatement process to pilot scale. The pilot
                  designed capacity was 100 l/hr in continuous process.
                </p>
              </div>
              <a
                href="https://aaltodoc.aalto.fi/handle/123456789/37940"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="w3-button w3-block w3-dark-grey">
                  Link to read more
                </button>
              </a>
            </div>
          </div>
          <div className="w3-col">
            <div class="w3-card-4 w3-padding w3-margin w3-hover-grey">
              <header class="w3-container w3-light-grey">
                <h3>
                  Mekong Erosion, Hydropower Development and Sediment Trapping
                  by the Reservoirs (2014)
                </h3>
              </header>
              <div class="w3-container">
                <hr />
                <img
                  src={mekongriver}
                  alt="mekong river"
                  style={{ width: "70%" }}
                />
                <hr />
                <p>
                  This is my bachelor thesis. The mathematical flood model was
                  made to study erosion pattern at Mekong River, Vietnam because
                  of the reservoir construction at upstream.
                </p>
              </div>
              <a
                href="https://www.theseus.fi/handle/10024/69592"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="w3-button w3-block w3-dark-grey">
                  Link to read more
                </button>
              </a>
            </div>
          </div>

          {/* column */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
