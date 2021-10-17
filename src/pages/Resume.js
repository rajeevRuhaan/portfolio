import React from "react";
import Footer from "../components/Footer";
import rajeev from "../picture/raj.jpg";

const Resume = () => {
  return (
    <body class="w3-light-grey">
      {/* Page Container */}
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        {/* The grid */}
        <div className="w3-row-padding">
          {/* Left column */}
          <div className="w3-third">
            <div className="w3-white w3-text-black w3-card-4">
              <div className="w3-display-container">
                <img src={rajeev} style={{ width: "100%" }} alt="rajeev" />
                <div className="w3-display-topmiddle w3-container w3-text-white">
                  <h2>Rajeev Sah</h2>
                </div>
              </div>
              <div className="w3-container">
                <p>
                  <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  Web Application Developer
                </p>
                <p>
                  <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  Ullantorppa 2 B 63, 02750 Espoo, Finland
                </p>
                <p>
                  <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>

                  <a href="mailto:rajeev.sah@edu.bc.fi">rajeev.sah@edu.bc.fi</a>

                  <p style={{ marginLeft: "2.5rem" }}>
                    <a href="mailto:urrajivin@hotmail.com">
                      urrajivin@hotmail.com
                    </a>
                  </p>
                </p>
                <p>
                  <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  +358 44 037 8568
                </p>
              </div>
              <hr />
              <div className="w3-container">
                <p className="w3-large">
                  <b>
                    <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                    Professional Skills
                  </b>
                </p>
                <ul>
                  <li>Full Stack web Development</li>
                  <li>Wastewater treatement</li>
                  <li>Water resoure Management</li>
                  <li>Assistant researcher</li>
                  <li>Teaching Assistant</li>
                </ul>
                <hr />
              </div>
              <div className="w3-container">
                <p className="w3-large">
                  <b>
                    <i class="fa fa-cogs fa-fw w3-margin-right w3-large w3-text-teal"></i>
                    Technical Skills
                  </b>
                </p>
                <div className="skills">
                  <div className="w3-half">
                    <p>
                      <i class="fa fa-html5 fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      HTML
                    </p>
                    <p>
                      <i class="fab fa-css3 fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      CSS
                    </p>
                    <p>
                      <i class="fab fa-sass fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      SCSS
                    </p>
                    <p>
                      <i class="fab fa-figma fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      Figma
                    </p>
                    <p>
                      <i class="fab fa-js fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      JavaScript
                    </p>
                    <p>
                      <i class="fab fa-drupal fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      Drupal
                    </p>
                    <p>
                      <i class="fab fa-docker fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      Docker
                    </p>
                  </div>
                  <div className="skills-right">
                    <p>
                      <i class="fab fa-aws fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      AWS
                    </p>
                    <p>
                      <i class="fab fa-jenkins fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      Jenkins
                    </p>
                    <p>
                      <i class="fab fa-node-js fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      Node.js
                    </p>
                    <p>
                      <i class="fab fa-react fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      React
                    </p>
                    <p>
                      <i class="fas fa-tools fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      Redux
                    </p>
                    <p>
                      <i class="fas fa-database fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      Database (SQL and NoSQL)
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <p class="w3-large w3-text-theme">
                <b>
                  <i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                  Languages
                </b>
              </p>
              <table>
                <tr>
                  <th>language</th>
                  <th>Speaking</th>
                  <th>Writing</th>
                </tr>
                <tr>
                  <td>English</td>
                  <td>C1</td>
                  <td>C1</td>
                </tr>
                <tr>
                  <td>Nepali</td>
                  <td>C2</td>
                  <td>C2</td>
                </tr>
                <tr>
                  <td>Hindi</td>
                  <td>B2</td>
                  <td>B2</td>
                </tr>
                <tr>
                  <td>Finnish</td>
                  <td>A2</td>
                  <td>A2</td>
                </tr>
              </table>
            </div>
          </div>

          {/* The right column */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-black w3-padding-16">
                <i class="fas fa-user-tie fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                About Me
              </h2>
              <p>
                I am an ambitious problem solver with an interest to work as a
                <i>
                  <b> Full-stack Developer</b>
                </i>
                . Currently, I am student at
                <b>
                  <a href="https://www.bc.fi/"> Helsinki Business College </a>
                </b>
                and waiting for oppertunity to work a{" "}
                <i>
                  <u> junior developer</u>
                </i>
                . I have experience in{" "}
                <i>
                  <u>
                    {" "}
                    React.js, Redux, Node.js, PHP, Symphony, SQL/NoSQL, Jest,
                    Drupal, Docker, Jenkins, CICD, AWS and Github{" "}
                  </u>
                </i>
                .
              </p>
              <p>
                My experience is also in{" "}
                <i>
                  <b>Water and Wastewater Engineering</b>
                </i>{" "}
                with the ability to design and optimize treatment processes and
                develop sustainable techniques. I am highly motivated to
                continue learning and improving my skills.
              </p>
            </div>
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-black w3-padding-16">
                <i class="far fa-building fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Work History
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Teaching Assistant, Aalto University, Espoo Finland</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>Apr - Jun
                  2021{" "}
                  {/* <span className="w3-tag w3-teal w3-round">Current</span> */}
                </h6>
                <p>
                  Assisting a master's degree course: Modelling and Control of
                  Water and Wastewater Treatment Processes. ( During the course
                  we are using SUMO, the most recent dynamic simulator, to build
                  a virtual treatment process to test various processes and
                  different controllers ).
                </p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 className="w3-opacity">
                  <b>Assistant Researcher, Aalto University, Espoo, Finland</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar - Oct
                  2018
                </h6>
                <p>
                  My job was to design and construct a pilot plant for solid
                  removal from different liquid waste.
                </p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>
                    Trainee, Environmental Impact Assessment center of Finland,
                    Espoo, Finland
                  </b>
                </h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan - May
                  2013
                </h6>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>May - Aug
                  2012
                </h6>
                <p>
                  My work was to use erosion, sediment, and hydropower modeling
                  for assessing the impact of hydropower development in the
                  Mekong Basin.{" "}
                </p>
                <br />
              </div>
            </div>
            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-black w3-padding-16">
                <i class="fa fa-university fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Education
              </h2>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>
                    Master of Science (tech.), Aalto University School of
                    Engineering, Espoo, Finland
                  </b>
                </h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>2017 -
                  2019
                </h6>
                <p>Master Programme in Water and Environmental Engineering</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>
                    Bachelor of Science, Helsinki Metroloplia University of
                    Applied Science, Vantaa, FinlandLondon Business School
                  </b>
                </h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 -
                  2014
                </h6>
                <p>Degree PRogramme in Environmental Engineering</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>
                    Bachelor of Science, Rajiv Gandhi University of Health
                    Science, Bangalore, India
                  </b>
                </h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>2002 -
                  2005
                </h6>
                <p>Degree Programme in Medical Laboratory Technologist</p>
                <br />
              </div>
            </div>
            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-black w3-padding-16">
                <i class="fa fa-university fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Vocational Education
              </h2>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>
                    Vocational, Information Technology, Business College Oy,
                    Helsinki, Finland
                  </b>
                </h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>2021 -
                  2022
                </h6>
                <p>Full-Stack Developer</p>
                <hr />
              </div>
            </div>
            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-black w3-padding-16">
                <i class="fa fa-door-open fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Free Time Fun
              </h2>
              <div class="w3-container">
                <i class="fas fa-swimmer fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                <i class="fas fa-biking fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                <i class="fas fa-headphones-alt fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                <i class="fas fa-glass-cheers fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                <i class="fas fa-video fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                <i class="fas fa-route fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                <i class="fas fa-car fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                <i class="fas fa-shopping-cart fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                <i class="fas fa-utensils fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              </div>
            </div>
            {/* <!-- End Right Column --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Page Container --> */}
      </div>
      <Footer />
    </body>
  );
};

export default Resume;
