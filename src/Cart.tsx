import { useRef, useState } from "react";
import { coupons } from "./Coupon";

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setPage: (page: string) => void;
}

function Cart({
  cartItems,
  setCartItems,
  setPage,
}: CartProps) {
  const couponRef = useRef<HTMLInputElement>(null);

  const [couponPercent, setCouponPercent] = useState(0);
  const [message, setMessage] = useState("");

  const increaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const applyCoupon = () => {
    const couponCode =
      couponRef.current?.value.trim() || "";

    const coupon = coupons.find(
      (c) =>
        c.code.toUpperCase() ===
        couponCode.toUpperCase()
    );

    if (coupon) {
      setCouponPercent(coupon.discount);
      setMessage(
        `🎉 Coupon Applied (${coupon.discount}% OFF)`
      );
    } else {
      setCouponPercent(0);
      setMessage("❌ Invalid Coupon Code");
    }
  };

  const grandTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const discount =
    (grandTotal * couponPercent) / 100;

  const deliveryCharge =
    grandTotal >= 500 ? 0 : 40;

  const finalAmount =
    grandTotal - discount + deliveryCharge;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl">
          Your cart is empty 🛒
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-wrap justify-center gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="w-72 bg-white rounded-xl shadow-lg p-4 text-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-contain mx-auto"
                  />

                  <h3 className="font-bold text-xl mt-3">
                    {item.name}
                  </h3>

                  <p className="text-green-600 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex justify-center items-center gap-4 mt-4">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.name)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span className="font-bold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.name)
                      }
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-3 font-semibold">
                    Subtotal: ₹
                    {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bill Details */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-4">
                Bill Details
              </h2>

              {/* Coupon */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <input
                    ref={couponRef}
                    type="text"
                    placeholder="Enter Coupon"
                    className="flex-1 border border-gray-300 p-3 rounded-lg"
                  />

                  <button
                    onClick={applyCoupon}
                    className="w-28 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                  >
                    Apply
                  </button>
                </div>

                {message && (
                  <p className="mt-2 text-sm font-medium">
                    {message}
                  </p>
                )}

                <div className="mt-3 text-sm text-gray-500">
                  <p>SAVE10 → 10% OFF</p>
                  <p>SAVE20 → 20% OFF</p>
                  <p>SAVE30 → 30% OFF</p>
                  <p>NEW50 → 50% OFF</p>
                </div>
              </div>

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>
                  ₹{grandTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-3 text-green-600">
                <span>Discount</span>
                <span>
                  -₹{discount.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Delivery Charge</span>
                <span>
                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`}
                </span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total Amount</span>
                <span>
                  ₹{finalAmount.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => setPage("checkout")}
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;