import ProductCard from "./Components/Product";

import apple from "/images/apple.jpeg";
import banana from "/images/banana.jpeg";
import dragonFruit from "/images/dragenfruits.jpeg";
import grapes from "/images/grapes.jpeg";
import orange from "/images/orange.jpeg";
import pear from "/images/pear.jpeg";
import pineapple from "/images/pineapple.jpeg";
import sapota from "/images/sapota.jpeg";
import strawberry from "/images/strawberry.jpeg";
import watermelon from "/images/watermelon.jpeg";

interface FruitsProps {
  addToCart: (item: any) => void;
  searchTerm: string;
}

const fruits = [
  {
    image: apple,
    name: "Apple",
    description: "Healthy Fruit",
    oldPrice: 116,
    newPrice: 89,
  },
  {
    image: banana,
    name: "Banana",
    description: "Energy Fruit",
    oldPrice: 40,
    newPrice: 29,
  },
  {
    image: dragonFruit,
    name: "Dragon Fruit",
    description: "Tropical Fruit",
    oldPrice: 150,
    newPrice: 120,
  },
  {
    image: grapes,
    name: "Grapes",
    description: "Sweet Fruit",
    oldPrice: 120,
    newPrice: 90,
  },
  {
    image: orange,
    name: "Orange",
    description: "Vitamin C Rich",
    oldPrice: 50,
    newPrice: 35,
  },
  {
    image: pear,
    name: "Pear",
    description: "Crisp Fruit",
    oldPrice: 60,
    newPrice: 45,
  },
  {
    image: pineapple,
    name: "Pineapple",
    description: "Tropical Fruit",
    oldPrice: 80,
    newPrice: 60,
  },
  {
    image: sapota,
    name: "Sapota",
    description: "Sweet Fruit",
    oldPrice: 50,
    newPrice: 35,
  },
  {
    image: strawberry,
    name: "Strawberry",
    description: "Sweet Fruit",
    oldPrice: 100,
    newPrice: 75,
  },
  {
    image: watermelon,
    name: "Watermelon",
    description: "Refreshing Fruit",
    oldPrice: 60,
    newPrice: 45,
  },
];

function Fruits({ addToCart, searchTerm }: FruitsProps) {
  const filteredFruits = fruits.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <section className="py-6">
    <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
      Fresh Fruits 🍎
    </h1>

    <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-3xl p-8 shadow-md">
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {filteredFruits.map((fruit) => (
          <ProductCard
            key={fruit.name}
            image={fruit.image}
            name={fruit.name}
            description={fruit.description}
            oldPrice={fruit.oldPrice}
            newPrice={fruit.newPrice}
            addToCart={addToCart}
            buttonColor="bg-orange-500 hover:bg-orange-600"
          />
        ))}
      </div>
    </div>
  </section>
);
}

export default Fruits;