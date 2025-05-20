// App.jsx
import React from 'react';
import useProducts from './components/useProducts';

const App = () => {
  const { products, error } = useProducts();

  return (
    <div>
      <h2>Product List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <h4>{product.title}</h4>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;