interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CheckoutProps {
  setPage: (page: string) => void;
  cartItems: CartItem[];
  totalAmount: number;
}

function Checkout({
  setPage,
  cartItems,
  totalAmount,
}: CheckoutProps) {
  const placeOrder = () => {
    alert("🎉 Order Placed Successfully!");

    setPage("home");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Checkout
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Address Section */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">
            Delivery Address
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows={4}
              placeholder="Enter Full Address"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Pincode"
              className="w-full border p-3 rounded-lg"
            />

            <button
              onClick={placeOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-bold"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <p className="font-semibold">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <span className="font-semibold">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold text-green-700">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                🚚 Estimated Delivery
              </p>
              <p className="font-bold">
                Within 30 Minutes
              </p>
            </div>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                💳 Payment Method
              </p>
              <p className="font-bold">
                Cash On Delivery
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;