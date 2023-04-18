import React from 'react'
import styles from './homepage.module.css'
import hug from './images/hug.png'
import rectangle9 from './images/Rectangle 9.png' 
import rectangle10 from './images/Rectangle 10.png'
import rectangle11 from './images/Rectangle 11.png'

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
            src={rectangle10}
            alt="Rectangle105373"
            className={styles['rectangle10']}
          />
          <img
            src={rectangle11}
            alt="Rectangle115374"
            className={styles['rectangle11']}
          />
         
         
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
      </div>
    </div>
  )
}

export default Homepage
