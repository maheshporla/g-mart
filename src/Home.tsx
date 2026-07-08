import {
  FcShipped,
  FcInspection,
  FcSafe,
} from "react-icons/fc";

interface HomeProps {
  setPage: (page: string) => void;
}

function Home({ setPage }: HomeProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-white to-green-50 rounded-[40px] shadow-xl overflow-hidden">

        <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16 gap-10">

          {/* Left Content */}
          <div className="flex-1">

            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              🌿 BIG SAVINGS
              <span className="text-gray-600">
                Up to 30% OFF on First Order
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Fresh Groceries,
              <br />
              Delivered Fast
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
              Shop the widest range of fresh vegetables,
              fruits, dairy products, beverages and
              daily essentials at the best prices.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <button
                onClick={() => setPage("veg")}
                className="
                  bg-gradient-to-r
                  from-green-500
                  to-green-600
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  shadow-lg
                  hover:scale-105
                  hover:shadow-green-300
                  transition-all
                  duration-300
                "
              >
                Shop Now →
              </button>

              <button
                onClick={() => setPage("fruits")}
                className="
                  bg-white
                  border-2
                  border-green-500
                  text-green-600
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  shadow-md
                  hover:bg-green-500
                  hover:text-white
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Explore Categories
              </button>

            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">

              <div className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
                <FcShipped size={55} />

                <div>
                  <p className="font-bold text-lg">
                    Fast Delivery
                  </p>

                  <p className="text-gray-600">
                    Within 30 Minutes
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
                <FcInspection size={55} />

                <div>
                  <p className="font-bold text-lg">
                    Fresh Products
                  </p>

                  <p className="text-gray-600">
                    100% Quality Assured
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
                <FcSafe size={55} />

                <div>
                  <p className="font-bold text-lg">
                    Secure Payment
                  </p>

                  <p className="text-gray-600">
                    Safe & Secure Checkout
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">

            <img
              src="/images/hero1.png"
              alt="Fresh Groceries"
              className="
                w-full
                max-w-[700px]
                rounded-[40px]
                shadow-2xl
              "
            />

          </div>

        </div>
      </div>

    
    </>
  );
}

export default Home;