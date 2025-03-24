export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="cursor-pointer flex justify-between items-center p-3 bg-gray-800 text-white mb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start space-x-2">
        <span className="text-lg font-medium">{name}</span>
      </div>
      <span className="text-xs text-gray-400">Buy {quantity} in {category}</span>
    </li>
  );
}
