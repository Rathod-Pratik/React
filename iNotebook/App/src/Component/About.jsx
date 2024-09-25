import React,{useContext} from 'react'
import noteContect from './contect/notes/noteContect'

const About = () => {
  const a=useContext(noteContect);
  return (
    <div>
      hello friend my name is {a.Name} and he is learn in {a.Class}
    </div>
  )
}

export default About
