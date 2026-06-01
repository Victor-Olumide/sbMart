import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

export default function Header( {title, description }) {
  return (
    <>
      <div className="bg-url(./trademark.png)" />

   <div className="w-screen h-screen bg-cover bg-center bg-[#f47c31]/80 text-white p-6 md:px-24 flex  flex-col text-left justify-center">
    <h1 className="text-4xl font-bold mb-4 flex flex-row gap-4">{title} <FaCartArrowDown /></h1>
    <p>{description}</p>
   </div>
    </>
  )
}
    