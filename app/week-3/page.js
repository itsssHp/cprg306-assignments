// /app/week-3/page.js
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="bg-gray-900 p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-left text-white mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
