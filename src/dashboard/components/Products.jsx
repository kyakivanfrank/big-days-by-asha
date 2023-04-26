import { useState } from 'react';

function Products({ products, removeProduct }) {
  const [newProduct, setNewProduct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct) return;
    const id = Math.floor(Math.random() * 100000);
    const product = { id, name: newProduct };
    setNewProduct('');
    // Call the parent component's addProduct function to add the new product
    addProduct(product);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="new-product" className="mr-2">
          Add Product
        </label>
        <input
          type="text"
          id="new-product"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 ml-4 rounded">
          Add
        </button>
      </form>
      <ul className="divide-y">
        {products.map((product) => (
          <li key={product.id} className="py-2">
            <div className="flex items-center justify-between">
              <span className="mr-2">{product.name}</span>
              <button
                onClick={() => removeProduct(product.id)}
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

export default Products;
