'use client';

import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

function cleanItemName(name) {
  return name.replace(/,.*$/, '').replace(/[\u{1F300}-\u{1FAFF}]/gu, '').trim().toLowerCase();
}

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    };

    loadItems();
  }, [user]);

  if (!user) return <p className="text-white p-6">Please sign in to view your shopping list.</p>;

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    const itemWithId = { ...newItem, id };
    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  const handleItemSelect = (item) => {
    const cleaned = cleanItemName(item.name);
    setSelectedItemName(cleaned);
  };

  return (
    <main className="p-6 flex flex-col md:flex-row gap-8 text-white">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-center mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="md:w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
