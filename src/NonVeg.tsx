import ProductCard from "./Components/Product";

import chicken from "/images/chicken.jpg";
import fish from "/images/fish.webp";
import mutton from "/images/mutton.jpeg";
import beef from "/images/beef.png";
import prawns from "/images/prawns.webp";
import crab from "/images/crab.jpeg";
import pork from "/images/pork.jpg";
import duck from "/images/duck.jpg";
import turkey from "/images/turkey.jpg";
import lamb from "/images/lamb.webp";

interface NonVegProps {
  addToCart: (item: any) => void;
  searchTerm: string;
}

const nonVegItems = [
  {
    image: chicken,
    name: "Chicken",
    description: "Fresh Chicken",
    oldPrice: 300,
    newPrice: 250,
  },
  {
    image: fish,
    name: "Fish",
    description: "Fresh Fish",
    oldPrice: 200,
    newPrice: 150,
  },
  {
    image: mutton,
    name: "Mutton",
    description: "Fresh Mutton",
    oldPrice: 400,
    newPrice: 350,
  },
  {
    image: beef,
    name: "Beef",
    description: "Fresh Beef",
    oldPrice: 500,
    newPrice: 450,
  },
  {
    image: prawns,
    name: "Prawns",
    description: "Fresh Prawns",
    oldPrice: 400,
    newPrice: 350,
  },
  {
    image: crab,
    name: "Crab",
    description: "Fresh Crab",
    oldPrice: 400,
    newPrice: 350,
  },
  {
    image: pork,
    name: "Pork",
    description: "Fresh Pork",
    oldPrice: 300,
    newPrice: 250,
  },
  {
    image: duck,
    name: "Duck",
    description: "Fresh Duck",
    oldPrice: 300,
    newPrice: 250,
  },
  {
    image: turkey,
    name: "Turkey",
    description: "Fresh Turkey",
    oldPrice: 300,
    newPrice: 250,
  },
  {
    image: lamb,
    name: "Lamb",
    description: "Fresh Lamb",
    oldPrice: 400,
    newPrice: 350,
  },
];

function NonVeg({ addToCart, searchTerm }: NonVegProps) {
  const filteredItems = nonVegItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
  <section className="py-6">
    <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
      Fresh Meat & Seafood 🍗
    </h1>

    <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-3xl p-8 shadow-md">
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {filteredItems.map((item) => (
          <ProductCard
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            addToCart={addToCart}
            buttonColor="bg-red-500 hover:bg-red-600"
          />
        ))}
      </div>
    </div>
  </section>
);
}

export default NonVeg;