import "../css/contact.css";
import { Tabtitle } from '../components/GeneralFunctions';
import React, { useEffect } from 'react';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import {useRef} from 'react';

const Contact = () => {
    
    Tabtitle('Contact | JLB');
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const form = useRef();
    const paulene = useRef();
    const nicca = useRef();
    const kevin = useRef();



    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_w09xyou', 'template_yrbq91h', form.current, 'ESHXTij9cdezyf77R')
          .then((result) => {
              paulene.current.value = ""
              kevin.current.value = ""
              nicca.current.value = ""
              console.log(result.text);
              swal("Success", "Youre message has been sent!", "success");
          }, (error) => {
              console.log(error.text);
          });
      };
    



return(
    <div class="container">
        <h1>Contact Me</h1>
    <div className="row">
        <div className="col"></div>
        <div className="col-sm">
        <form ref={form} onSubmit={sendEmail}>
    <div class="mb-2">
    <label for="exampleFormControlInput1" class="form-label">Name</label>
    <input type="Name"  name="user_name" ref={paulene} class="form-control" id="exampleFormControlInput1" />
    </div>

    <div class="mb-2">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" name="user_email" ref={nicca}  class="form-control" id="exampleFormControlInput1" />
    </div>

    <div class="mb-2">
    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
    <textarea class="form-control" ref={kevin}  id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-dark mt-2">Submit</button>

    </form>


        </div>
        <div className="col"></div>
    </div>
  </div>
)
}

export default Contact;