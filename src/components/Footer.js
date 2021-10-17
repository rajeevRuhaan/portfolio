import React from "react";

function Footer() {
  return (
    <footer class="w3-container w3-teal w3-center w3-margin-top">
      <p>Find me on social media.</p>
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=100007882245588"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-facebook-official w3-hover-opacity w3-padding w3-xxlarge"></i>
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/rajeevs2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-instagram w3-hover-opacity w3-padding w3-xxlarge"></i>
      </a>
      {/* twitter */}
      <a
        href="https://twitter.com/rajeevsju"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-twitter w3-hover-opacity w3-padding w3-xxlarge"></i>
      </a>
      {/* linkedin */}
      <a
        href="https://www.linkedin.com/in/rajeev-sah-7a73065b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-linkedin w3-hover-opacity w3-padding w3-xxlarge"></i>
      </a>
      <a
        href="https://github.com/rajeevRuhaan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-github w3-hover-opacity w3-padding w3-xxlarge"></i>
      </a>
      <p>Copyright @ Rajeev Sah </p>
    </footer>
  );
}

export default Footer;
