import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Navbar from "./Components/Navbar";
import Home from "./Home";
import Veg from "./Veg";
import Fruits from "./Fruits";
import Dairy from "./Dairy";
import Drinks from "./Drinks";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Footer from "./Footer";

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function App() {
  const [page, setPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (item: {
    name: string;
    price: number;
    image: string;
  }) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    toast.success(
      `${item.name} added to cart 🛒`
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar
        setPage={setPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartItems={cartItems}
      />

      <main className="pt-24 px-4 flex-grow">
        {page === "home" && (
          <Home setPage={setPage} />
        )}

        {page === "veg" && (
          <Veg
            addToCart={addToCart}
            searchTerm={searchTerm}
          />
        )}

        {page === "fruits" && (
          <Fruits
            addToCart={addToCart}
            searchTerm={searchTerm}
          />
        )}

        {page === "dairy" && (
          <Dairy
            addToCart={addToCart}
            searchTerm={searchTerm}
          />
        )}

        {page === "drinks" && (
          <Drinks
            addToCart={addToCart}
            searchTerm={searchTerm}
          />
        )}

        {page === "nonveg" && (
          <NonVeg
            addToCart={addToCart}
            searchTerm={searchTerm}
          />
        )}

        {page === "cart" && (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            setPage={setPage}
          />
        )}

        {page === "checkout" && (
         <Checkout
        setPage={setPage}
        cartItems={cartItems}
        totalAmount={totalAmount}
        setCartItems={setCartItems}
         />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;