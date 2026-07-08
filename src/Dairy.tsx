import ProductCard from "./Components/Product";

import milk from "/images/milk.jpeg";
import butter from "/images/butter.jpeg";
import butterMilk from "/images/butter-milk.jpeg";
import cheese from "/images/cheese.jpeg";
import kefir from "/images/kefir.jpeg";
import paneer from "/images/panner.jpeg";
import yogurt from "/images/yogurt.jpeg";
import iceCream from "/images/ice cream.jpeg";

interface DairyProps {
  addToCart: (item: any) => void;
  searchTerm: string;
}

const dairyItems = [
  {
    image: milk,
    name: "Milk",
    description: "Fresh Milk",
    oldPrice: 70,
    newPrice: 60,
  },
  {
    image: butter,
    name: "Butter",
    description: "Fresh Butter",
    oldPrice: 110,
    newPrice: 100,
  },
  {
    image: butterMilk,
    name: "Butter Milk",
    description: "Fresh Butter Milk",
    oldPrice: 80,
    newPrice: 70,
  },
  {
    image: cheese,
    name: "Cheese",
    description: "Fresh Cheese",
    oldPrice: 120,
    newPrice: 100,
  },
  {
    image: kefir,
    name: "Kefir",
    description: "Fresh Kefir",
    oldPrice: 90,
    newPrice: 80,
  },
  {
    image: paneer,
    name: "Paneer",
    description: "Fresh Paneer",
    oldPrice: 100,
    newPrice: 80,
  },
  {
    image: yogurt,
    name: "Yogurt",
    description: "Fresh Yogurt",
    oldPrice: 60,
    newPrice: 50,
  },
  {
    image: iceCream,
    name: "Ice Cream",
    description: "Fresh Ice Cream",
    oldPrice: 80,
    newPrice: 60,
  },
];

function Dairy({ addToCart, searchTerm }: DairyProps) {
  const filteredDairy = dairyItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
return (
  <section className="py-6">
    <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
      Fresh Dairy Delights 🥛
    </h1>

    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl p-8 shadow-md">
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {filteredDairy.map((item) => (
          <ProductCard
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            addToCart={addToCart}
            buttonColor="bg-blue-500 hover:bg-blue-600"
          />
        ))}
      </div>
    </div>
  </section>
);
}

export default Dairy;