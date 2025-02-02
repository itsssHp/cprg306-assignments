// /app/week-3/item.js

export default function Item({ name, quantity, category }) {
    return (
      <li className="flex justify-between items-center p-3 bg-gray-800 text-white mb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium">{name}</span>
        </div>
        <span className="text-xs text-gray-400">Buy {quantity} in {category}</span>
      </li>
    );
  }
  