import React from 'react'
import products from "./assets/data.js"
import { TbCurrencyNaira } from 'react-icons/tb'

export default function ProductDetailsPage() {
// const product = products.find(p => p.id === product.id && p.category === product.category)


  return (
    <>
    <div>
    <h1 className='text-3xl font-bold mb-4'>Product Details</h1>

    <div>
        {products.map((product) => (p => (
            <div>
                <img src={`${product.id > 1 ? "0" : product.id}.png`} alt={product.name} />


                <div>
                    <h2>{product.name}</h2>

                    <p>{product.productDetails}</p>

                    <p>{product.category}</p>

                    <p>Price: <TbCurrencyNaira />{product.amount}</p>

                    <p>Dealer: {product.dealer}</p>

                    <p>Description: {product.productDescription}</p>
                </div>
            </div>
        ))(product))}
    </div>



    <div>
        text
    </div>
    </div>
    </>
  )
}
