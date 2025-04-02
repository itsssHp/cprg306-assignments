'use client';

import { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;
    const loadMealIdeas = async () => {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found for &quot;{ingredient}&quot;</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="hover:underline">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
