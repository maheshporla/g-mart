import {
  FaHome,
  FaCarrot,
  FaDrumstickBite,
  FaAppleAlt,
  FaGlassWhiskey,
  FaShoppingCart,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";

interface NavbarProps {
  setPage: (page: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  cartItems: {
    quantity: number;
  }[];
}

function Navbar({
  setPage,
  searchTerm,
  setSearchTerm,
  cartItems,
}: NavbarProps) {
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      bg-gradient-to-r
      from-green-600
      via-green-500
      to-lime-500
      backdrop-blur-md
      shadow-xl
      "
    >
      <div className="flex items-center px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setPage("home")}
        >
          <FaShoppingCart
            className="text-white"
            size={32}
          />

          <h1 className="text-white text-4xl font-bold">
            G-Mart
          </h1>
        </div>

        {/* Search Bar */}
        <div className="ml-8 relative">
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
            w-80
            pl-12
            pr-4
            py-3
            rounded-full
            outline-none
            shadow-md
            border-2 border-transparent
            focus:border-green-500
            "
          />
        </div>

        {/* Navigation */}
        <div className="ml-auto flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setPage("home")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaHome />
            Home
          </button>

          <button
            onClick={() => setPage("veg")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaCarrot />
            Veg
          </button>

          <button
            onClick={() => setPage("nonveg")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaDrumstickBite />
            Non-Veg
          </button>

          <button
            onClick={() => setPage("fruits")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaAppleAlt />
            Fruits
          </button>

          <button
            onClick={() => setPage("dairy")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-md hover:scale-105 transition-all duration-300"
          >
            <GiMilkCarton />
            Dairy
          </button>

          <button
            onClick={() => setPage("drinks")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaGlassWhiskey />
            Drinks
          </button>

         

          {/* Cart */}
          <div className="relative">
            <button
              onClick={() => setPage("cart")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              <FaShoppingCart />
              Cart
            </button>

            <span
              className="
              absolute -top-2 -right-2
              bg-red-600 text-white
              w-6 h-6
              rounded-full
              flex items-center justify-center
              text-xs font-bold
              shadow-lg
              "
            >
              {totalItems}
            </span>
          </div>
              {/* Profile */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaUserCircle size={22} />
            
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;