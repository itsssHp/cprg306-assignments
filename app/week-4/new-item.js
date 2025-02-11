// In /app/week-4/new-item.js
'use client';
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Increment function
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement function
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-72 mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Set Quantity</h2>
      <div className="flex items-center gap-6">
        <button
          className="p-3 bg-blue-500 text-white rounded-full shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 hover:bg-blue-600"
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="text-3xl font-bold text-gray-700">{quantity}</span>
        <button
          className="p-3 bg-blue-500 text-white rounded-full shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 hover:bg-blue-600"
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Quantity must be between 1 and 20.
      </p>
    </div>
  );
}
