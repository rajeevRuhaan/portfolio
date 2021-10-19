import React from "react";
import rockshop1 from "../picture/rockshop1.png";
import rockshop2 from "../picture/rockshop2.png";
import Footer from "../components/Footer";

const RockShopPage = () => {
  return (
    <div className="page">
      <h1>Rock Shop</h1>
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
              rel="noreferrer"
            >
              Repo
            </a>
          </li>

          <li>
            <a
              href="https://sharp-swartz-f35205.netlify.app/"
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
          <img src={rockshop1} alt="rockshop page" />
        </div>
        <section>
          <div className="content">
            <h1 id="overview">Overview</h1>

            <div>
              <h2>Summary</h2>
              <p>
                This is an ecommerce page and was created using react, redux
                (frontend) and json server (backend) for study purpose. Redux
                used to study manage state. The site is perform adding projuct
                to cart and deleting product from cart. I use json server for
                backend testing. The web pae is not performing adding and
                deleting because json server is not performing well when we
                deploy at netlify.
              </p>
              <h2>Web Stack</h2>
              <p>
                This app is based React, Reduc, Json server, Sass and bootstrap.
              </p>
            </div>
          </div>

          <div className="content">
            <h1 id="process">Process </h1>
            <div>
              <h3>Design</h3>
              <p>
                {" "}
                I have created a home page where we can see three category of
                products. It is linked to product page. I use a basic ecommerce
                page where products are listed. To buy product first we need to
                view product which open in new page. From single product page we
                can add the product to cart or can back to product list page.
                Once product get added to cart it can also be deleted from cart
                which we can perform in cart page. currently add and delete is
                not working due to json serve which is not functionally at
                netlify.{" "}
              </p>
              <h3>Development</h3>
              <p>
                At the moment the page looks ugly and didnot get time to make it
                prettier. In future I will make it functionally by changing json
                server to node.js.
              </p>
            </div>
          </div>
          <div className="image">
            <img src={rockshop2} alt="rock shopp roduct list page" />
          </div>
          <div className="content">
            <h1 id="result">Result </h1>
            <div>
              <h3>What I learned?</h3>
              <p>
                {" "}
                In this project I was more focusing to learn redux. I was
                familier of making app using react but this is my first app
                using redux.{" "}
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
