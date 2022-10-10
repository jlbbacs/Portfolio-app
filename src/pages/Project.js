import { Tabtitle } from '../components/GeneralFunctions';
import React, { useEffect } from 'react';
import "../css/projects.css";
import Nolimit from "../images/Nolimit1.png";
import Kodekid from "../images/kodekid1.png";
import Charmingpets from "../images/charmingpets1.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



const Project = () => {
  Tabtitle('Project | JLB');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
 
return(
    <div className="container">
        <h1>Projects</h1>
       
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 " data-aos="fade-right" data-aos-duration="2000">
      <img src={Kodekid} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kodekid</h5>
        <p class="card-text">Guide for Basic HTML and CSS.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
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
      <div class="card-footer">
        <small class="text-muted"></small>
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
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
  </div>
</div>
            
    </div>

   
)
}

export default Project;