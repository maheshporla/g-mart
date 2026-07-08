interface ProductProps {
  image: string;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  addToCart?: (item: any) => void;
  buttonColor?: string;
}

function ProductCard({
  image,
  name,
  description,
  oldPrice,
  newPrice,
  addToCart,
  buttonColor = "bg-red-500 hover:bg-red-600",
}: ProductProps) {
  return (
    <div className="w-72 bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-5 relative">

      {/* Discount Badge */}
      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
        15% OFF
      </span>

      {/* Delivery Badge */}
      <span className="absolute top-4 right-4 bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full shadow">
        🚚 20 min
      </span>

      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-contain mt-6"
        />
      </div>

      {/* Rating */}
      <div className="mt-3 text-yellow-500 text-lg">
        ⭐⭐⭐⭐⭐
      </div>

      {/* Product Name */}
      <h3 className="text-xl font-bold mt-2 text-gray-800">
        {name}
      </h3>

      {/* Weight */}
      <p className="text-sm text-gray-400 mt-1">
        500 g
      </p>

      {/* Description */}
      <p className="text-gray-500 mt-2 min-h-[50px]">
        {description}
      </p>

      {/* Price + Cart Button */}
      <div className="mt-5 flex items-center justify-between">

        <div>
          <p className="text-gray-400 line-through text-sm">
            ₹{oldPrice}
          </p>

          <p className="text-red-500 font-bold text-2xl">
            ₹{newPrice}
          </p>
        </div>
<button
  onClick={() => {
    addToCart?.({
      name,
      price: newPrice,
      image,
    });
  }}
  className={`
    ${buttonColor}
    text-white
    px-4
    py-2
    rounded-xl
    text-sm
    font-bold
    shadow-md
    transition-all
    duration-300
    flex
    items-center
    gap-2
  `}
>
  🛒 Cart
</button>

      </div>

    </div>
  );
}

export default ProductCard;