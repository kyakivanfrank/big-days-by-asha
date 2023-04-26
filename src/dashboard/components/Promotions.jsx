import { useState } from 'react';

function Promotions({ promotions, addPromotion, removePromotion }) {
  const [newPromotion, setNewPromotion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPromotion) return;
    const id = Math.floor(Math.random() * 100000);
    const promotion = { id, name: newPromotion };
    setNewPromotion('');
    // Call the parent component's addPromotion function to add the new promotion
    addPromotion(promotion);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Promotions</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="new-promotion" className="mr-2">
          Add Promotion
        </label>
        <input
          type="text"
          id="new-promotion"
          value={newPromotion}
          onChange={(e) => setNewPromotion(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 ml-4 rounded">
          Add
        </button>
      </form>
      <ul className="divide-y">
        {promotions.map((promotion) => (
          <li key={promotion.id} className="py-2">
            <div className="flex items-center justify-between">
              <span className="mr-2">{promotion.name}</span>
              <button
                onClick={() => removePromotion(promotion.id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Promotions;
