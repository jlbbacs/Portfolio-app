import "../css/about.css"
import React from 'react';
import Mayon from "../images/mayon.png"
import { Tabtitle } from '../components/GeneralFunctions';
import { useEffect } from 'react';
import AOS from "aos";
import Photoshop from "../images/icons8-adobe-photoshop.gif";
import "aos/dist/aos.css";
AOS.init();

const About = () => {

    Tabtitle('About | JLB');
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return(

        <div className="container">
        <h1>About</h1>
        <div className="card mb-3 border-0 mt-4" style={{maxwidth: 540}}>
  <div className="row g-0">
    <div className="col-md-6">
      <img src={Mayon} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title aboutname">Joseph Lester Bacsarsa</h5>
        <p className="card-text-about">You can call me Bax that's my nickname, and I am comfortable with it. 
         I'm an aspiring Front End Developer who loves to design websites and learn new directives.
         </p>
         <h5 className="text-center skills-about">SKILLS</h5>
            <ul className="about-list">
                <li className="list" id="ht" data-bs-toggle="tooltip" data-bs-placement="top" title="HTML"><i class="fa-brands fa-html5 fa-bounce fa-2xl"></i></li>
                <li className="list" id="cs" data-bs-toggle="tooltip" data-bs-placement="top" title="CSS"><i class="fa-brands fa-css3-alt fa-flip fa-2xl"></i></li>
                <li className="list" id="bo" data-bs-toggle="tooltip" data-bs-placement="top" title="BOOTSTRAP"><i class="fa-brands fa-bootstrap fa-beat-fade fa-2xl"></i></li>
                <li className="list" id="ja" data-bs-toggle="tooltip" data-bs-placement="top" title="JAVASCRIPT"><i class="fa-brands fa-square-js fa-shake fa-2xl"></i></li>
                <li className="list" id="re" data-bs-toggle="tooltip" data-bs-placement="top" title="REACT"><i class="fa-brands fa-react fa-spin-pulse fa-2xl"></i></li>
                <li className="list" id="gi" data-bs-toggle="tooltip" data-bs-placement="top" title="GITHUB"><i class="fa-brands fa-github fa-fade fa-2xl"></i></li>
                <li className="list" id="my" data-bs-toggle="tooltip" data-bs-placement="top" title="SQL">MYSQL</li>
                <li className="list" id="ph"data-bs-toggle="tooltip"  data-bs-placement="top" title="PHP"><i class="fa-brands fa-php fa-beat-fade fa-2xl"></i></li>
                <li className="list" id="photo"data-bs-toggle="tooltip" data-bs-placement="top" title="PHOTOSHOP"><img src={Photoshop} className="img-fluid" alt="..."/></li>
            </ul>
        <p className="card-text"><small className="text-muted"></small></p>
      </div>
    </div>
  </div>
</div>
</div>
    
    )
}

export default About;