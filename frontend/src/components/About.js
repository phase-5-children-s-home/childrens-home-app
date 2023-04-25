import React from 'react';
import './About.css';
import './about-us.css';
import aboutpic from './about_us_img.jpeg';


function About() {
  return (
    <div className='container' >
      {/* <div className="about-us">
        <h1>About Us</h1>
        <p>We are a non-profit organization dedicated to improving the lives of those in need through charitable acts and donations. Our mission is to create a more compassionate world by supporting causes and communities that are often overlooked.</p>
        <p>Our team is made up of passionate individuals who believe that everyone deserves a chance to live a better life. We work tirelessly to raise awareness of the issues facing our communities and to provide resources to those who need them most.</p>
        <p>Through our fundraising events and donation drives, we have been able to make a significant impact in the lives of countless individuals and families. We are committed to continuing our work and making a difference in the world, one act of kindness at a time.</p>
      </div> */}


    <section class="about-us-section">
      <div class="about_container">
        <div class="content-section">
          <div class="titles">
            <h1>About Us</h1>
          </div>
          <div class="content">
            <h3>Learn more and get to know us</h3>
            <p>
            We are a non-profit organization dedicated to improving the lives of those in need through charitable acts and donations. 
            Our mission is to create a more compassionate world by supporting causes and communities that are often overlooked.
            </p>
            <div class="button">
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="social">
            <a href="https://www.facebook.com/"
              ><i class="fa fa-facebook-f"></i
            ></a>
            <a href=""><i class="fa fa-twitter"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="image-section">
        <img src={aboutpic} alt="pic" />
      </div>
    </section>

    </div>
  );
}

export default About;
