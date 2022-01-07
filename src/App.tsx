import type { Component } from "solid-js";

import { getProduct } from "./data/products";
import { setProduct, productPage } from "./data/appState";

// Set up dummy product
const dummyProduct = getProduct();
setProduct(dummyProduct);

const App: Component = () => {
  return (
    <>
      <a
        class="p-4 absolute text-white bg-orange-500 font-bold uppercase tracking-wide focus:underline focus:outline-none -translate-y-full focus:-translate-y-0 transition-transform ease-in-out"
        href="#main-content"
      >
        Skip to main content
      </a>
      <main id="main-content">
        <p>This is the main content</p>
      </main>
    </>
  );
};

export default App;
