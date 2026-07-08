import {
  FaHome,
  FaCarrot,
  FaDrumstickBite,
  FaAppleAlt,
  FaGlassWhiskey,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";

interface NavbarProps {
  setPage: (page: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

function Navbar({
  setPage,
  searchTerm,
  setSearchTerm,
}: NavbarProps) {
  return (
    <nav
      style={{
        background: "linear-gradient(to right, #16a34a, #22c55e, #84cc16)",
        padding: "15px 25px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaShoppingCart color="white" size={30} />
          <h1
            style={{
              color: "white",
              margin: 0,
              fontSize: "30px",
            }}
          >
            G-Mart
          </h1>
        </div>

        {/* Search Bar */}
        <div
          style={{
            marginLeft: "30px",
            position: "relative",
          }}
        >
          <FaSearch
            style={{
              position: "absolute",
              left: "12px",
              top: "12px",
              color: "gray",
            }}
          />

          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "300px",
              padding: "10px 15px 10px 40px",
              borderRadius: "25px",
              border: "none",
              outline: "none",
            }}
          />
        </div>

        {/* Navigation Buttons */}
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
              onClick={() => setPage("home")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white"
            >
              <FaHome />
              Home
            </button>

          <button
            onClick={() => setPage("veg")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white"
          >
            <FaCarrot />
            Veg
          </button>

          <button
            onClick={() => setPage("nonveg")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white"
          >
            <FaDrumstickBite />
            Non-Veg
          </button>

          <button
              onClick={() => setPage("fruits")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white"
            >
              <FaAppleAlt />
              Fruits
            </button>

          <button
            onClick={() => setPage("dairy")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            <GiMilkCarton />
            Dairy
          </button>

          <button
            onClick={() => setPage("drinks")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 text-white"
          >
            <FaGlassWhiskey />
            Drinks
          </button>

         <button
            onClick={() => setPage("cart")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 text-white"
          >
            <FaShoppingCart />
              Cart
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;