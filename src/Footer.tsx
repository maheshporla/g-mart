function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold mb-3">
              G-Mart 🛒
            </h2>
            <p>
              Fresh groceries delivered to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>Vegetables</li>
              <li>Fruits</li>
              <li>Cart</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Contact
            </h3>

            <p>📍 Hyderabad</p>
            <p>📞 +91 9876543210</p>
            <p>📧 support@gmart.com</p>
          </div>

        </div>

        <hr className="my-6 border-green-500" />

        <p className="text-center">
          © 2026 G-Mart. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;