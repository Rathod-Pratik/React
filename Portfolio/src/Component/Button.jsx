import React from 'react'
import styled from 'styled-components'

const Button = ({text}) => {
  return (
    <div className='text-white'> 
       <TextBtn className='bg-yellow text-White py-2 px-6 rounded-full text-xl'>{text}</TextBtn>
    </div>
  )
}

export default Button

const TextBtn=styled.button`
  &:hover{
    background-color: #6f34fe;
    transition: all 0.5s;
  }
`
