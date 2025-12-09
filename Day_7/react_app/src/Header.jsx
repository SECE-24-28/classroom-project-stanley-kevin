import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

const Header = ({title}) => 
    {
  return (
    <div>
         <h1>{title}</h1>
         <hr />    
         </div>
  )
}

export default Header