import { Tabtitle } from '../components/GeneralFunctions';
import React, { useEffect } from 'react';
import "../css/projects.css";
import Nolimit from "../images/Nolimit1.png";
import Kodekid from "../images/kodekid1.png";
import Charmingpets from "../images/charmingpets1.png";
import Weatherapp from "../images/weatherapp.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



const Project = () => {
  Tabtitle('Project | JLB');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
 
return(
  
    <div className="container" id='project'>
        <h1>Projects</h1>
       
  <div class="row row-cols-1 row-cols-md-3 g-4" id='group-card'>
  <div class="col">
    <div class="card h-100 " data-aos="fade-right" data-aos-duration="2000">
      <img src={Kodekid} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kodekid</h5>
        <p class="card-text">Guide for Basic HTML and CSS.</p>
      </div>
      <div class="card-footer text-center">
        <small class="text-muted"><a href='https://jlbbacs.github.io/mini-project-kode-kid/'>Demo</a></small>
        <small class="text-muted"><a href='https://github.com/jlbbacs/mini-project-kode-kid'>Repo</a></small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 "  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <img src={Nolimit} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">No Limit</h5>
        <p class="card-text">Fitness website with e-commerce.</p>
      </div>
      <div class="card-footer text-center">
        <small class="text-muted"><a href='https://jlbbacs.github.io/NOLIMIT-GROUP4-PROJECT/'>Demo</a></small>
        <small class="text-muted"><a href='https://github.com/jlbbacs/NOLIMIT-GROUP4-PROJECT'>Repo</a></small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 " data-aos="fade-left" data-aos-duration="2000">
      <img src={Charmingpets} class="card-img-top" alt="..."/>
      <div class="card-body ">
        <h5 class="card-title">Charming Pets</h5>
        <p class="card-text">Website for pets training manners and pet adoption.</p>
      </div>
      <div class="card-footer text-center">
        <small class="text-muted"><a href='https://group-3-nickel-capstone.vercel.app/'>Demo</a></small>
        <small class="text-muted"><a href='https://github.com/LightLotus/group-3-nickel-capstone'>Repo</a></small>
      </div>
    </div>
  </div>
</div>

{/* ============solo card============= */}



<div class="row row-cols-1 row-cols-md-3 g-4" >

<div className='col-sm-4 '>
<div class="card mt-5 mb-5 weather-app" data-aos="fade-down" data-aos-duration="2000">
    <img src={Weatherapp} class="card-img-top" alt="..."/>
    <div class="card-body ">
      <h5 class="card-title">JLB Weather</h5>
      <p class="card-text">Simple Weather App</p>
      <p class="card-text"><small class="text-muted"> Using API</small></p>
      
  </div>
    <div class="card-footer text-center">
        <small class="text-muted"><a href='https://bacsarsaweatherapp.vercel.app/'>Demo</a></small>
        <small class="text-muted"><a href='https://github.com/jlbbacs/Bacs-Weather-app'>Repo</a></small>
      </div>
  </div>
 
  </div>







</div>

            
    </div>

   
)
}

export default Project;