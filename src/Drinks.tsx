import ProductCard from "./Components/Product";

import coke from "/images/coca-cola.jpeg";
import pepsi from "/images/pepsi.jpeg";
import sprite from "/images/sprite.jpeg";
import fanta from "/images/fanta.webp";
import thumsUp from "/images/thums-up.webp";
import maaza from "/images/maaza.webp";
import slice from "/images/slice.webp";
import appyFizz from "/images/appy-fizz.jpeg";
import limca from "/images/limca.jpg";
import sevenUp from "/images/7-up.jpeg";

interface DrinksProps {
  addToCart: (item: any) => void;
  searchTerm: string;
}

const drinks = [
  {
    image: coke,
    name: "Coca Cola",
    description: "Cold Drink",
    oldPrice: 30,
    newPrice: 25,
  },
  {
    image: pepsi,
    name: "Pepsi",
    description: "Soft Drink",
    oldPrice: 50,
    newPrice: 40,
  },
  {
    image: sprite,
    name: "Sprite",
    description: "Soft Drink",
    oldPrice: 50,
    newPrice: 40,
  },
  {
    image: fanta,
    name: "Fanta",
    description: "Soft Drink",
    oldPrice: 50,
    newPrice: 40,
  },
  {
    image: thumsUp,
    name: "Thums Up",
    description: "Soft Drink",
    oldPrice: 50,
    newPrice: 40,
  },
  {
    image: maaza,
    name: "Maaza",
    description: "Fruit Drink",
    oldPrice: 50,
    newPrice: 40,
  },
  {
    image: slice,
    name: "Slice",
    description: "Mango Drink",
    oldPrice: 50,
    newPrice: 40,
  },
  {
    image: appyFizz,
    name: "Appy Fizz",
    description: "Apple Drink",
    oldPrice: 50,
    newPrice: 40,
  },
  {
    image: limca,
    name: "Limca",
    description: "Lemon Drink",
    oldPrice: 50,
    newPrice: 40,
  },
  {
    image: sevenUp,
    name: "7 Up",
    description: "Soft Drink",
    oldPrice: 50,
    newPrice: 40,
  },
];

function Drinks({ addToCart, searchTerm }: DrinksProps) {
  const filteredDrinks = drinks.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
  <section className="py-6">
    <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
      Refreshing Drinks 🥤
    </h1>

    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 shadow-md">
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {filteredDrinks.map((drink) => (
          <ProductCard
            key={drink.name}
            image={drink.image}
            name={drink.name}
            description={drink.description}
            oldPrice={drink.oldPrice}
            newPrice={drink.newPrice}
            addToCart={addToCart}
            buttonColor="bg-purple-500 hover:bg-purple-600"
          />
        ))}
      </div>
    </div>
  </section>
);
}

export default Drinks;