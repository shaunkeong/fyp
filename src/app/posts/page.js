export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Acoustic Guitar",
      price: 199.99,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Studio Headphones",
      price: 89.99,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border rounded-lg p-4 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Qty: {item.quantity}</p>
              <p className="text-gray-800 font-medium">${item.price.toFixed(2)}</p>
            </div>
            <div className="text-right font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right text-2xl font-bold">
        Total: ${total.toFixed(2)}
      </div>
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
        Checkout
      </button>
    </main>
  );
}
