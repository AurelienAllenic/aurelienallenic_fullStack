/* eslint-disable */
import React from 'react'
import './error.scss'
import { FaArrowRight } from "react-icons/fa";

const Error = () => {
    const returnHome = () => {
        window.location.href = "/"
    }
  return (
    <div className='container_error'>
      <div className='container_error_content'>
        <h1>Error 404</h1>
        <button onClick={returnHome}>Return home <FaArrowRight /></button>
      </div>
    </div>
  )
}

export default Error
