import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded ${styles} transition duration-300 ease-in-out transform hover:opacity-80 hover:scale-80`} >
      Get Started 
    </button>
  )
}

export default Button
