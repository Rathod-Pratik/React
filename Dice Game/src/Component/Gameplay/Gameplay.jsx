import React from 'react'
import style from './Gameplay.module.css'

const Gameplay = () => {
  return (
    <>
    <nav>
      <div className={style.left}>
        <h1>0</h1>
        <span>Total Score</span>
      </div>
      <div className={style.right}>
        <div className={style.Number}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
        </div>
        <div className={style.text}>
          <p>Select Number</p>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Gameplay
