import { TbCurrencyNaira } from 'react-icons/tb'

export default function ProductInfo({ product }) {
  return (
    <div className="flex md:flex-row flex-col gap-8 p-12 max-w-6xl mx-auto">
      <img
        src={`/${product.id > 1 ? 0 : product.id}.png`}
        alt={product.name}
        className="md:w-1/2 w-full h-auto rounded-xl shadow-lg object-cover"
      />

      <div className="md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="flex items-center gap-1 text-2xl font-bold text-[#f47c31]">
          <TbCurrencyNaira />
          {product.amount}
        </p>
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Description</h3>
          {Array.isArray(product.productDescription) ? (
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.productDescription.map((line, idx) => (
                <li key={idx} className="leading-relaxed">{line}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 leading-relaxed">{product.productDescription}</p>
          )}
        </div>
        </div>
    </div>
  )
}