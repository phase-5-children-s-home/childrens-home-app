import React, { useState, useEffect } from 'react';
import styles from './homepage.module.css';
import hug from './images/hug.png';
import rectangle9 from './images/Rectangle 9.png';
import rectangle10 from './images/Rectangle 10.png';
import rectangle11 from './images/Rectangle 11.png';
import "./homepage.css"




const Homepage = (props) => {
  const [numPeople, setNumPeople] = useState(0);
  const [numTeams, setNumTeams] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumPeople((numPeople) => {
        if (numPeople >= 50) {
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

          {/* <span className={styles['text']}>
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
          </span> */}

         
         
          <div className={styles['akariconslockoff']}></div>
          <img
            src={hug}
            alt="peoplehuggingflatdesign23214857653915366"
            className={styles['peoplehuggingflatdesign2321485765391']}
          />
          <span className={styles['text12']}>
            <span className='span-top'>We are stronger</span>
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
        
        {/* <div id="whatwedo">
        <h1>what we do</h1>
        <Whatwedo /> 



      </div> */}
      </div>



      
    </div>

    <a href='https://childrens-home-app.vercel.app/about' >Click here to learn more about us</a>

    <div>

    </div>
    <section class="our-values">
    <div class="title-value">
      <h1>Our Values</h1>
      <p>These are the Core beliefs and attributes on which
        our organisation has been built and are the cornerstones
        of our success.
      </p>
    </div>
    <div class="values-container">
       <div class="card_card1">
            <h5>Compassion</h5>
            <p>
            At Let's Charity, we value compassion and empathy towards children in need. 
            We strive to provide a supportive and nurturing environment for all children, 
            and we believe in treating every child with kindness, respect, and understanding.
            </p>
        </div>

        <div class="card_card1">
            <h5>Transparency</h5>
            <p>
            We believe in transparency and honesty in all our operations.
             We strive to maintain open communication with our supporters, 
             sharing detailed information about the homes we support and the impact of our programs. 
             We believe in being accountable for our actions and using resources effectively and efficiently.
            </p>
        </div>

        <div class="card_card1">
            <h5>Collabarion</h5>
            <p>
            We value collaboration and partnership, working closely with children's homes, 
            donors, and volunteers to achieve our goals. We believe in the power of teamwork 
            and the importance of working together towards a shared vision of a better world for children.
             We are committed to building strong relationships with our partners, fostering trust, respect, and mutual understanding.
            </p>
        </div>

        
     
    </div>
  </section>
    </div>
  
    
  );
};

export default Homepage;
