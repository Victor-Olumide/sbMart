import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { TbCurrencyNaira } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({name, description, price, src}) {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-white w-[300px] h-[500px] flex flex-col justify-between rounded-lg shadow-md p-4   z">
        <a onClick={() => navigate(`/products/${name.toLowerCase().replace(/\s+/g, '-')}`)} className="cursor-pointer">
        <img src={`${src > 1 ? "0" : src}.png`} alt={name} />
        </a>
        <h2 className="text-lg font-semibold mt-4">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className=" flex flex-row items-center gap-1 text-lg font-bold mt-4"><TbCurrencyNaira />
{price}</p>
        <button className="bg-[#f47c31] text-white px-4 py-2 rounded mt-4 hover:bg-[#e36b28] transition duration-300 flex flex-row items-center gap-2 justify-center"> <FaCartPlus />
 Add to Cart</button>
    </div>
    </>
  )
}
