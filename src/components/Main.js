import React from "react";
import Rajeev from "../picture/raj.jpg";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

const Main = () => {
  return (
    <body>
      <section className="personal-info">
        <img src={Rajeev} alt="rajeev profile" className="app-logo" />
        <div>
          <h3 className="h3-text">Hello! I'm Rajeev Sah</h3>
          <p className="h4-text">
            I am currently studying FullStack developer programme at{" "}
            <a href="https://www.bc.fi/">Business College Helsinki</a>.
          </p>

          <p>
            In my free time I like cycling and watching science-fiction movie.
          </p>
          <p>
            You can inpsect my code on{" "}
            <a
              href="https://github.com/rajeevRuhaan"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/rajeev-sah-7a73065b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
      <section className="box">
        <h2>School Projects</h2>
        <div className="box card">
          <Card style={{ width: "18rem", height: "fit" }}>
            <Card.Body>
              <LinkContainer to="/recipepage">
                <Card.Link>
                  <Card.Title>Recipe Book</Card.Title>
                  <Card.Text>
                    Recipe book web app built with React and Symfony. This is
                    school project created while learning React and Symfony.
                  </Card.Text>
                  <em style={{ color: "chocolate" }}>
                    {" "}
                    <b>Click to See Project </b>
                  </em>
                </Card.Link>
              </LinkContainer>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <LinkContainer to="/socialWebAppPage">
                <Card.Link>
                  <Card.Title>Simple Social Web App</Card.Title>
                  <Card.Text>
                    Simple web application where user can register and login to
                    use the app. The user can also create, edit, delete, read
                    their posts and the others'.
                  </Card.Text>
                  <em style={{ color: "chocolate" }}>
                    {" "}
                    <b>Click to See Project </b>
                  </em>
                </Card.Link>
              </LinkContainer>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <LinkContainer to="/rockShopPage">
                <Card.Link>
                  <Card.Title>Rock Shop</Card.Title>
                  <Card.Text>
                    This app is designed as e-commerce page. The products
                    displayed and can add to cart. JSON server used for backend
                  </Card.Text>
                  <em style={{ color: "chocolate" }}>
                    {" "}
                    <b>Click to See Project </b>
                  </em>
                </Card.Link>
              </LinkContainer>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <LinkContainer to="/speedgamepage">
                <Card.Link>
                  <Card.Title>Speed Game</Card.Title>
                  <Card.Text>
                    This is simple game app made with JavaScript.
                  </Card.Text>
                  <em style={{ color: "chocolate" }}>
                    {" "}
                    <b>Click to See Project </b>
                  </em>
                </Card.Link>
              </LinkContainer>
            </Card.Body>
          </Card>
        </div>
      </section>
      <section className="contactme">
        <h2>Contact Me</h2>
        <p>
          I am new in programming and looking oppertunity to develope my skills.
          <p>
            I would love to join projects. Feel free to contact me by sending
            e-mail at{" "}
            <a href="mailto:urrajivin@hotmail.com">urrajivin@hotmail.com</a>{" "}
          </p>
        </p>
      </section>
    </body>
  );
};

export default Main;
