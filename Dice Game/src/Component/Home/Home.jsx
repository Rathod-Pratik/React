import React from 'react'
import styles from './Home.module.css'
import Button from "../button/button";

const Home = () => {
  return (
    <div>
    <div className={styles.dice}>
      <div className={styles.img}>
            <img src="public\Image\dices 1.png" alt="" />
      </div>
      <div className={styles.start_Game}>
        
            <h1>DICE GAME</h1>
            <div>
            <Button text="Play now"/>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Home
