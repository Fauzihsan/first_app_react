import React from "react";

import img from "./asset/img/logo-ALTA@2x.png";
import img2 from "./asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

function Home() {
  return (
    <body class="home-background">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo-atas" src={img} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container p-5">
        <div class="row align-items-center isi-home">
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <img id="foto-profil" src={img2} />
          </div>
          <div class="col-lg-8 col-md-12 col-sm-12 col-12">
            <div class="main-p">
              <p class="sapaan">Hi, my name is</p>
              <p class="nama">Anne Sullivan</p>
              <p class="hobi">I build things for the web</p>
              <p class="tombol">
                <a href="#">Get In Touch</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      ></script>
    </body>
  );
}

export default Home;
