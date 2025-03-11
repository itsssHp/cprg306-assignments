'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    return sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category);
  });

  return (
    <div className="container px-4 py-6">
      <div className="flex justify-start space-x-4 mb-6">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded-md ${sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded-md ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}