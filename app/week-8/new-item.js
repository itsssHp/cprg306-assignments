'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 w-full rounded-md text-black"
      />
      <div className="flex space-x-2 my-3">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="bg-gray-500 text-white px-3 rounded"
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          className="bg-blue-500 text-white px-3 rounded"
        >
          +
        </button>
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 w-full rounded-md text-black"
      >
        <option>Produce</option>
        <option>Bakery</option>
        <option>Dairy</option>
        <option>Meat</option>
        <option>Dry Goods</option>
        <option>Canned Goods</option>
        <option>Household</option>
      </select>
      <button type="submit" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
        +
      </button>
    </form>
  );
}
