import React from 'react'
import styles from './Home.module.css'
// import Button from "../button/button";

const Home = ({toggle}) => {
  return (
    <div>
    <div className={styles.dice}>
      <div className={styles.img}>
            <img src="public\Image\dices 1.png" alt="" />
      </div>
      <div className={styles.start_Game}>
              <h1>Dice Game</h1>
              <div>
            <button onClick={toggle} >Play now</button>
              </div>
            
      </div>
    </div>
    </div>
  )
}

export default Home
