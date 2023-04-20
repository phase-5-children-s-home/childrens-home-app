import React, { useState, useEffect } from 'react';
import styles from './homepage.module.css';
import hug from './images/hug.png';
import rectangle9 from './images/Rectangle 9.png';
import rectangle10 from './images/Rectangle 10.png';
import rectangle11 from './images/Rectangle 11.png';

import Form from './Form';
import Footer from './footer';


import { Link } from 'react-router-dom';
import Whatwedo from './Whatwedo'

const Homepage = (props) => {
  const [numPeople, setNumPeople] = useState(0);
  const [numTeams, setNumTeams] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumPeople((numPeople) => {
        if (numPeople >= 1850) {
          clearInterval(intervalId);
          return numPeople;
        } else {
          return numPeople + 100;
        }
      });
  
      setNumTeams((numTeams) => {
        if (numTeams >= 950) {
          clearInterval(intervalId);
          return numTeams;
        } else {
          return numTeams + 10;
        }
      });
    }, 20);
  
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
<div>
      
      <div className={styles['homepage']}>
        <div className={styles['mac-book1']}>
        <img
            src={rectangle9}
            alt="Rectangle95372"
            className={styles['rectangle9']}
          />
          <img
            src={rectangle10}
            alt="Rectangle105373"
            className={styles['rectangle10']}
          />
          <img
            src={rectangle11}
            alt="Rectangle115374"
            className={styles['rectangle11']}
          />

          <span className={styles['text']}>
            <span>LetsCharity</span>
          </span>
          <span className={styles['text02']}>
            <span>Why donate?</span>
          </span>
          <span className={styles['text04']}>
            <span>About Us</span>
          </span>
          <span className={styles['text06']}>
            <span>Our Work</span>
          </span>
          <span className={styles['text08']}>
            <span><Link to="/login">Donate</Link></span>
          </span>
          <span className={styles['text10']}>
            <span>Fundrising</span>
          </span>

         
         
          <div className={styles['akariconslockoff']}></div>
          <img
            src={hug}
            alt="peoplehuggingflatdesign23214857653915366"
            className={styles['peoplehuggingflatdesign2321485765391']}
          />
          <span className={styles['text12']}>
            <span>We are stronger</span>
          </span>
          <span className={styles['text14']}>
            <span className={styles['text15']}>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>TOGETHER</span>
          </span>
          <span className={styles['text17']}>
            <span>
              <span>Funds collected</span>
              <br></br>
              <span>Ksh 100,255.00</span>
            </span>
          </span>
        <span className={styles['text22']}>
          <span>
            <span>Individuals Signed Up</span>
            <br></br>
            <span>{numPeople.toLocaleString()}+ people</span>
          </span>
        </span>
        <span className={styles['text27']}>
          <span>
            <span>GO/NGO Participation</span>
            <br></br>
            <span>{numTeams.toLocaleString()} + Teams</span>
          </span>
        </span>

       
        </div>
        
        <div id="whatwedo">
        <h1>what we do</h1>
        <Whatwedo /> 



      </div>
      </div>

      
    </div>
    
    <Form />
    <Footer/>

    </div>
    
  );
};

export default Homepage;
