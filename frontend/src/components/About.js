import React from 'react';
import './About.css';
import './about-us.css';
import './team.css';
import aboutpic from './about_us_img.jpeg';


function About() {
  return (
    <div classNameName='container' >
      {/* <div classNameName="about-us">
        <h1>About Us</h1>
        <p>We are a non-profit organization dedicated to improving the lives of those in need through charitable acts and donations. Our mission is to create a more compassionate world by supporting causes and communities that are often overlooked.</p>
        <p>Our team is made up of passionate individuals who believe that everyone deserves a chance to live a better life. We work tirelessly to raise awareness of the issues facing our communities and to provide resources to those who need them most.</p>
        <p>Through our fundraising events and donation drives, we have been able to make a significant impact in the lives of countless individuals and families. We are committed to continuing our work and making a difference in the world, one act of kindness at a time.</p>
      </div> */}


    <section className="about-us-section">
      <div className="about_container">
        <div className="content-section">
          <div className="titles">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>Learn more and get to know us</h3>
            <p>
            We are a non-profit organization dedicated to improving the lives of those in need through charitable acts and donations. 
            Our mission is to create a more compassionate world by supporting causes and communities that are often overlooked.
            </p>
            <div className="button">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/"
              ><i className="fa fa-facebook-f"></i
            ></a>
            <a href=""><i className="fa fa-twitter"></i></a>
            <a href=""><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div classNameName="image-section">
        <img src={aboutpic} alt="pic" />
      </div>
    </section>

    {/* <section className="team" id="team">
      <div className="center">
        <h1>Our Team</h1>
      </div>
      <div className="team-content">
        <div className="box">
          <img src="./img/01.png" alt=""/>
          <h3>Mary <span className="takeout">Chiwala</span></h3>
          <h5>position</h5>
          <div className="phone">
           <p> +260 760 121 676 
             <span className="hide">+260 977 480 708</span> 
          </p>
          </div>
        </div>

         <div className="box">
          <img src="./img/02.png" alt=""/>
          <h3>Humphrey <span className="takeout">Chiwala</span></h3>
          <h5>position</h5>
          <div className="phone">
           <p> +260 760 121 676 
              <span className="hide">+260 977 480 708</span>
          </p>
          </div>
        </div>

         <div className="box">
          <img src="./img/03.png" alt=""/>
          <h3>Humphrey <span className="takeout">Chiwala</span></h3>
          <h5>position</h5>
          <div className="phone">
           <p> +260 760 121 676 
              <span className="hide">+260 977 480 708</span>
          </p>
          </div>
        </div>

         <div className="box">
          <img src="./img/04.png" alt=""/>
          <h3>Humphrey <span className="takeout">Chiwala</span></h3>
          <h5>position</h5>
          <div className="phone">
           <p>  +260 760 121 676 
              <span className="hide">+260 977 480 708</span>
          </p>
          </div>
        </div>
      </div>
  </section>
  <section className="btm">

  </section>
  <section className="btm">

  </section>
  <section className="btm">

  </section> */}

    </div>
  );
}

export default About;
