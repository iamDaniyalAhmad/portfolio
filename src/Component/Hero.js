import React from "react";
import hero from '../assets/Hero-image2.jpg'
import daniyal from '../assets/Daniyal.pdf'
import {Cursor,useTypewriter} from 'react-simple-typewriter'

function Hero () {
    const [text] = useTypewriter({
        words: ['MERN STACK DEVELOPER', 'DOT NET DEVELOPER' , 'WORDPRESS DEVELOPER'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80

    })
  return (
    <div className="container my-5" id="home">
      <div className="row p-4 pb-2 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <div className="lc-block mb-3">
            <div editable="rich">
              <h2 className="fw-bold display-4" style={{fontWeight:'bold',fontSize:'40px'}}>
              <img  width="60" height="60" src="https://img.icons8.com/emoji/48/waving-hand-light-skin-tone.png" alt="waving-hand-light-skin-tone"/>
             <br/> HELLO,<br/> THIS IS DANIYAL!<p></p>
                <p></p>
              </h2>
            </div>
          </div>

          <div className="lc-block mb-3">
            <div editable="rich">
              <h2 >
                I'm a  <span style={{fontWeight:'bold',color:'#0B5ED7'}}> {text}</span> <span><Cursor/></span>
              </h2>
              <p className="mt-3">with 2+ years of extensive experience in designing and development of websites to ensure the success of startups or to add value in already established businesses.</p>
            </div>
          </div>

          <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
          <a className="btn btn-primary px-4 me-md-2 " href={daniyal} download="Daniyal" >Download CV</a>
            {/* <a className href="/" role="button">
              DOWNLOAD CV
            </a> */}
            
          </div>
        </div>
        <div className="col-lg-4  p-0 overflow-hidden shadow-lg">
          <div className="lc-block">
            <img
              className="rounded-start w-100"
              src={hero}
              alt=" by Diego PH"
              width="720"
              height="380"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
