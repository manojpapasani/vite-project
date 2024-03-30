import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './ProductSlice';
const ProductForm = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ id: Date.now(), name, price }));
    setName('');
    setPrice('');
  };
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};
export default ProductForm;