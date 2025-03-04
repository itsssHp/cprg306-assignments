'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(true); 

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {})
    : { 'All Items': sortedItems };

  return (
    <div className="container ml-4 px-4 py-6">
      
      <div className="flex justify-start space-x-4 mb-6">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded-md ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded-md ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupByCategory(!groupByCategory)}
          className="px-4 py-2 rounded-md bg-orange-500 text-white"
        >
          {groupByCategory ? 'Ungroup by Category' : 'Group by Category'}
        </button>
      </div>

      <div className="max-w-4xl ml-4">
        {Object.keys(groupedItems).sort().map(category => (
          <div key={category} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-300 capitalize mb-3">{category}</h2>
            <ul className="space-y-3">
              {groupedItems[category].map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
