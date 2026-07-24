import products from "../assets/data.js";
import ProductCard from "./ProductCard.jsx";

export default function AllProducts() {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
      {products.map((item) => (
        <div>
          <ProductCard 
          name={item.name}
          description={item.productDetails}
          price={item.amount}
          src={item.id}
           />
        </div>
      ))}
    </div>
  );
}

