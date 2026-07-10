    import { useState } from "react";
    import QrCode from "react-qr-code";
    import { FaMapMarkerAlt } from "react-icons/fa";
    import { getAddressFromLocation } from "./Api/Locationapi";
    import emailjs from "@emailjs/browser";

    interface CartItem {
      name: string;
      price: number;
      quantity: number;
      image: string;
    }

    interface CheckoutProps {
      setPage: (page: string) => void;
      cartItems: CartItem[];
      totalAmount: number;
      setCartItems: React.Dispatch<
        React.SetStateAction<CartItem[]>
      >;
    }

    export default function Checkout({
      setPage,
      cartItems,
      totalAmount,
      setCartItems,
    }: CheckoutProps) {
      const [fullName, setFullName] = useState("");
      const [phone, setPhone] = useState("");
      const getCurrentLocation = () => {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          try {
            const data = await getAddressFromLocation(
              lat,
              lng
            );

            setAddress(data.display_name);
          } catch (error) {
            alert("Unable to fetch address.");
          }
        },
        (error) => {
          alert(error.message);
        }
      );
    };
      const [address, setAddress] = useState("");
      const [email, setEmail] = useState("");
      const [pincode, setPincode] = useState("");
      const [paymentMethod, setPaymentMethod] =
        useState("");

      const handlePlaceOrder =async () => {
        // Validate delivery details
        if (
          !fullName ||
          !phone ||
          !address ||
          !email ||
          !pincode
        ) {
          alert(
            "Please fill all delivery details before placing the order."
          );
          return;
        }

        // Phone validation
        if (phone.length !== 10) {
          alert(
            "Please enter a valid 10-digit phone number."
          );
          return;
        }

        // Email validation
        if (!email.includes("@")) {
          alert("Please enter a valid email address.");
          return;
        }

        // Pincode validation
        if (pincode.length !== 6) {
          alert("Please enter a valid 6-digit pincode.");
          return;
        }

        // Payment validation
        if (!paymentMethod) {
          alert("Please select a payment method.");
          return;
        }

        // Create Order
        const order = {
          id: `GM${Date.now()}`,
          fullName,
          phone,
          address,
          email,
          pincode,
          paymentMethod,
          totalAmount,
          items: cartItems,
          orderDate: new Date().toLocaleString(),
        };

        try {
          // Get existing orders
          const orders = JSON.parse(
            localStorage.getItem("orders") || "[]"
          );

          // Add new order
          orders.push(order);

          // Save orders
              localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    await emailjs.send(
      "service_mb02zdu",
      "template_rjsyo3m",
      {
        name: fullName,
        email: email,
        order_id: order.id,
        price: totalAmount,
        address: address,
        payment_method: paymentMethod,
      },
      "Mrj7Jyl0poj19VR-L"
    );

    // Clear cart state
    setCartItems([]);

    // Clear cart from localStorage
    localStorage.removeItem("cart");

    alert(
      `🎉 Order Placed Successfully!\n\nOrder ID: ${order.id}`
    );

    setPage("home");
    }catch (error) {
  console.error("EmailJS Error:", error);
  alert("Something went wrong while placing the order.");
} 

      };

      return (
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
            Checkout
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side */}
            <div className="flex-1">
              {/* Delivery Address */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Delivery Address
                </h2>

                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  className="w-full border p-3 rounded-lg mb-3"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  className="w-full border p-3 rounded-lg mb-3"
                />

                  <textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                    className="w-full border p-3 rounded-lg mb-3"
                  />

                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 mb-3"
                  >
                    <FaMapMarkerAlt />
                    Use Current Location
                  </button>

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full border p-3 rounded-lg mb-3"
                />

                <input
                  type="text"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) =>
                    setPincode(e.target.value)
                  }
                  className="w-full border p-3 rounded-lg"
                />
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <h2 className="text-2xl font-bold mb-4">
                  Payment Method
                </h2>

                <label className="flex items-center gap-3 mb-4">
                  <input
                    type="radio"
                    name="payment"
                    value="qr"
                    checked={paymentMethod === "qr"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  QR Payment (UPI)
                </label>

                <label className="flex items-center gap-3 mb-4">
                  <input
                    type="radio"
                    name="payment"
                    value="debit"
                    checked={paymentMethod === "debit"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  Debit Card
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  Cash on Delivery
                </label>

                {/* QR Payment */}
                {paymentMethod === "qr" && (
                  <div className="mt-4 text-center border rounded-lg p-4">
                    <h3 className="font-bold mb-2">
                      Scan QR To Pay
                    </h3>

                    <div className="flex justify-center">
                      <QrCode
                        size={180}
                        value={`upi://pay?pa=maheshporla93@okicici&pn=Porla Mahesh &am=${totalAmount}&cu=INR`}
                      />
                    </div>

                    <p className="mt-3 text-green-700 font-semibold">
                      Amount: ₹{totalAmount}
                    </p>
                  </div>
                )}

                {/* Debit Card */}
                {paymentMethod === "debit" && (
                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full border p-2 rounded"
                    />

                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      className="w-full border p-2 rounded"
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 rounded"
                      />

                      <input
                        type="password"
                        placeholder="CVV"
                        className="border p-2 rounded"
                      />
                    </div>
                  </div>
                )}

                {/* COD */}
                {paymentMethod === "cod" && (
                  <div className="mt-4 bg-green-100 p-4 rounded-lg">
                    Pay cash when your order is delivered.
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-80">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-4">
                  Order Summary
                </h2>

                <div className="flex justify-between mb-3">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex justify-between mb-3">
                  <span>Total Amount</span>
                  <span>₹{totalAmount}</span>
                </div>

                <hr className="my-4" />

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }