import { useState } from 'react';

const Dashboardcategories = ({ categories, addCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCategory) return;
    const id = Math.floor(Math.random() * 100000);
    const category = { id, name: newCategory };
    setNewCategory('');
    // Call the parent component's addCategory function to add the new category
    addCategory(category);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="new-category" className="mr-2">
          Add Category
        </label>
        <input
          type="text"
          id="new-category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 ml-4 rounded">
          Add
        </button>
      </form>
      <ul className="divide-y">
        {categories.map((category) => (
          <li key={category.id} className="py-2">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboardcategories;