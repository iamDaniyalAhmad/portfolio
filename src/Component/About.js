import React from 'react'
import AboutImage from '../assets/About-image2.jpg'


const About = () => {
  return (
    <>

 <div className="container" style={{marginTop:'150px'}}>
 	<div className="row align-items-center">
 		<div className="col-md-10 mx-auto col-xl-5 mb-4">
	 <h1 className="mb-2"style={{fontSize:'58px'}}>About Me</h1>
 			<div className="lc-block">
 				<img className="img-fluid mx-auto rounded" src={AboutImage} srcSet="" sizes="" width="400px" height="100px" alt=" by Alessandro Di Credico" loading="lazy"/>
 			</div>
 		</div>
 		<div className="col-12 col-xl-6 " >
 			<div className="lc-block mt-3 me-lg-5">
 				<div editable="rich">
 					
 					<p >A passionate Software Developer with a knack for crafting dynamic digital solutions. With a diverse skill set spanning MERN Stack, .NET, and WordPress development, I thrive on bringing ideas to life and creating seamless online experiences. Whether it's building scalable web applications with MERN, crafting robust solutions with .NET, or designing elegant websites with WordPress, I'm dedicated to delivering excellence in every project I undertake. My journey in the tech world is fueled by curiosity, innovation, and a relentless pursuit of excellence. Let's collaborate and turn your visions into reality!</p>
 				</div>
 			</div>
 			<div className="lc-block d-grid  d-lg-block">
 				<a className="btn btn-primary px-5 mt-2" href="mailto:daniyalahmad.dev@gmail.com" role="button">Email Me</a>
 			</div>

 		</div>
 	</div>
 </div>
 
 
  
 
 
  
    </>
  )
}

export default About
