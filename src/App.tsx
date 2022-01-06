import type { Component } from 'solid-js';

import { getProduct } from './data/products';

const dummyProduct = getProduct();

const App: Component = () => {
  return (
    <div className="">
      FEM E-Commerce Product Page
    </div>
  );
};

export default App;
