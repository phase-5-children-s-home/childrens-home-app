import React from 'react'
import styles from './homepage.module.css'
import hug from './images/hug.png'
import rectangle9 from './images/Rectangle 9.png' 
import rectangle10 from './images/Rectangle 10.png'
import rectangle11 from './images/Rectangle 11.png'
import rectangle13 from './images/Rectangle 13.png'
import rectangle12 from './images/Rectangle 12.png'

const Homepage = (props) => {
  return (
    <div>
      <div className={styles['homepage']}>
        <div className={styles['mac-book1']}>
          <img
            src={rectangle9}
            alt="Rectangle95372"
            className={styles['rectangle9']}
          />
          <img
            src={rectangle12}
            alt="Rectangle125394"
            className={styles['rectangle12']}
          />
          <img
            src={rectangle13}
            alt="Rectangle135396"
            className={styles['rectangle13']}
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
            <span>Donate</span>
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
              <span>RM 100,255.00</span>
            </span>
          </span>
          <span className={styles['text22']}>
            <span>
              <span>Individual Signed Up</span>
              <br></br>
              <span>8,250 people</span>
            </span>
          </span>
          <span className={styles['text27']}>
            <span>
              <span>GO/NGO Participation</span>
              <br></br>
              <span>925 Teams</span>
            </span>
          </span>
        </div>
        <img
          src="/playground_assets/ellipse5391-fu2j-200w.png"
          alt="Ellipse5391"
          className={styles['ellipse']}
        />
      </div>
    </div>
  )
}

export default Homepage
