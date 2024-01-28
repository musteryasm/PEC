import React from 'react'

const Banner = ({ name, childStyles, parentStyles}) => {
  return (
    <div className={`relative w-full flex items-center z-0 overflow-hideen nft-gradient-2 ${parentStyles}`} >
      <p className={`fold-bold text-5xl font-poppins leading-70 ${childStyles}`}>{name}</p>
    </div>
  )
}

export default Banner;