import { Tabtitle } from "../components/GeneralFunctions";
import React, { useEffect } from "react";
import "../css/projects.css";
import Nolimit from "../images/Nolimit1.png";
import Kodekid from "../images/kodekid1.png";
import ApiFetch from "../images/api-test.png";
import Charmingpets from "../images/charmingpets1.png";
import Weatherapp from "../images/weatherapp.png";
import Crud from "../images/crud.png";
import AOS from "aos";
import "aos/dist/aos.css";
import bmi from "../images/bmi.png";
import mern from "../images/mern.png";
import Todoapp from "../images/todo-app.png";
import Qregistration from '../images/bqr.png';

AOS.init();

const Project = () => {
  Tabtitle("Project | JLB");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" id="project">
      <h1>Projects</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4" id="group-card">
        <div class="col">
          <div
            class="card h-100 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={Kodekid} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Kodekid</h5>
              <p class="card-text">Guide for Basic HTML and CSS.</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://jlbbacs.github.io/mini-project-kode-kid/">
                  Demo
                </a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/mini-project-kode-kid">
                  Repo
                </a>
              </small>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card h-100 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Nolimit} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">No Limit</h5>
              <p class="card-text">Fitness website with e-commerce.</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://jlbbacs.github.io/NOLIMIT-GROUP4-PROJECT/">
                  Demo
                </a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/NOLIMIT-GROUP4-PROJECT">
                  Repo
                </a>
              </small>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card h-100 "
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={Charmingpets} class="card-img-top" alt="..." />
            <div class="card-body ">
              <h5 class="card-title">Charming Pets</h5>
              <p class="card-text">
                Website for pets training manners and pet adoption.
              </p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://group-3-nickel-capstone.vercel.app/">Demo</a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/LightLotus/group-3-nickel-capstone">
                  Repo
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 mb-5" id="group-card">
        <div class="col">
          <div
            class="card h-100 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={Weatherapp} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">JLB Weather</h5>
              <p class="card-text">Simple Weather App</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://bacsarsaweatherapp.vercel.app/">Demo</a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/Bacs-Weather-app">Repo</a>
              </small>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card h-100 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={ApiFetch} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">API Fetch</h5>
              <p class="card-text">Simple api fetch with search bar</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://api-withsearchbar-test.vercel.app/">Demo</a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/react-api-search-test">
                  Repo
                </a>
              </small>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card h-100 "
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Crud} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">CRUD</h5>
              <p class="card-text">Simple CRUD operation made of PHP</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://jlbcrud.000webhostapp.com/index.php">Demo</a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/crud">Repo</a>
              </small>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card h-100 "
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={bmi} class="card-img-top" alt="..." />
            <div class="card-body bg-secondaryr">
              <h5 class="card-title">BMI CALCULATOR</h5>
              <p class="card-text">Simple BMI Calculator</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://bmi-calculator-cyan.vercel.app/">Demo</a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/ionic-test">Repo</a>
              </small>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card h-100 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={mern} class="card-img-top" alt="..." />
            <div class="card-body bg-secondaryr">
              <h5 class="card-title">MERN CRUD TEST</h5>
              <p class="card-text">Simple Mern CRUD operations</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://mern-test-indol.vercel.app/">Demo</a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/mern-test">Repo</a>
              </small>
            </div>
          </div>
        </div>
         <div class="col">
          <div
            class="card h-100 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Qregistration} class="card-img-top" alt="..." />
            <div class="card-body">Quick-Registrtion-form
              <h5 class="card-title"></h5>
              <p class="card-text">Simple online registration app then export to pdf</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://quick-registration-seven.vercel.app/">
                  Demo
                </a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/quick-registration">
                  Repo
                </a>
              </small>
            </div>
          </div>
        </div>

        <div class="col h-100">
          <div
            class="card h-100 "
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Todoapp} class="card-img-top" alt="..." />
            <div class="card-body bg-secondaryr">
              <h5 class="card-title">TODO APP</h5>
              <p class="card-text">Simple To-do Applicationr</p>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                <a href="https://to-do-app-ochre-nu.vercel.app/">Demo</a>
              </small>
              <small class="text-muted">
                <a href="https://github.com/jlbbacs/to-do-app">Repo</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Project;
