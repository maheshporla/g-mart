import ProductCard from "./Components/Product";

import carrot from "/images/carrot.jpeg";
import beans from "/images/beans.jpeg";
import drumstick from "/images/drumstick.jpeg";
import tomato from "/images/tomato.jpg";
import cabbage from "/images/cabbage.jpeg";
import ladiesFinger from "/images/ladysfinger.jpeg";
import onion from "/images/onion.jpeg";
import potato from "/images/potato.jpeg";
import whiteCarrot from "/images/white carrot.jpeg";
import capsicum from "/images/capcicum.jpeg";

interface VegProps {
  addToCart: (item: any) => void;
  searchTerm: string;
}

const vegetables = [
  {
    image: carrot,
    name: "Carrot",
    description: "Rich in Vitamin A",
    oldPrice: 25,
    newPrice: 20,
  },
  {
    image: beans,
    name: "Beans",
    description: "Good source of protein",
    oldPrice: 30,
    newPrice: 25,
  },
  
  {
    image: tomato,
    name: "Tomato",
    description: "Fresh and juicy",
    oldPrice: 15,
    newPrice: 12,
  },
  {
    image: cabbage,
    name: "Cabbage",
    description: "Crunchy and fresh",
    oldPrice: 18,
    newPrice: 14,
  },
  {
    image: ladiesFinger,
    name: "Ladies Finger",
    description: "Tender and delicious",
    oldPrice: 22,
    newPrice: 18,
  },
  {
    image: drumstick,
    name: "Drumstick",
    description: "Nutrient-rich greens",
    oldPrice: 20,
    newPrice: 15,
  },
  {
    image: onion,
    name: "Onion",
    description: "Aromatic and flavorful",
    oldPrice: 12,
    newPrice: 10,
  },
  {
    image: potato,
    name: "Potato",
    description: "Versatile staple",
    oldPrice: 16,
    newPrice: 13,
  },
  {
    image: whiteCarrot,
    name: "White Carrot",
    description: "Mild and sweet",
    oldPrice: 28,
    newPrice: 22,
  },
  {
    image: capsicum,
    name: "Capsicum",
    description: "Colorful and crisp",
    oldPrice: 35,
    newPrice: 28,
  },
];

function Veg({ addToCart, searchTerm }: VegProps) {
  const filteredVegetables = vegetables.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
return (
  <section className="py-6">
    <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
      Fresh Vegetables
    </h1>

    {/* Products Section Background */}
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-md">
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {filteredVegetables.map((vegetable) => (
          <ProductCard
            key={vegetable.name}
            image={vegetable.image}
            name={vegetable.name}
            description={vegetable.description}
            oldPrice={vegetable.oldPrice}
            newPrice={vegetable.newPrice}
            addToCart={addToCart}
            buttonColor="bg-green-500 hover:bg-green-600"
          />
        ))}
      </div>
    </div>
  </section>
);
}

export default Veg;