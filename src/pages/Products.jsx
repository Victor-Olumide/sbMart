import React from 'react'
import AllProducts from '../components/AllProducts'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function Products() {
  const navigate = useNavigate();

  return (
    <>
    <button onClick={() => navigate(-1)} className='flex flex-row gap-2 items-center px-12 py-2 bg-gray-200 group'><FaArrowLeftLong className="group-hover:-translate-x-4" /> Back</button>
    <h1 className="text-lg text-center font-semibold m-4 overflow-x-hidden">All Available Products</h1>
    <AllProducts />
    </>
  )
}
