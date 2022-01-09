import type { Component } from "solid-js";

import { getProduct } from "./data/products";
import { setProduct, setUserAvatar } from "./data/appState";

import Header from "./components/Header";
import { ProductInfo } from "./components/ProductInfo";
import { ProductGallery } from "./components/ProductGallery";

// Set up dummy product
const dummyProduct = getProduct();
setProduct(dummyProduct);
setUserAvatar("/images/image-avatar.png");

const App: Component = () => {
  return (
    <>
      <a
        class="p-4 absolute text-white bg-orange-500 font-bold uppercase tracking-wide focus:underline focus:outline-none -translate-y-full focus:-translate-y-0 transition-transform ease-in-out"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <div class="flex flex-col md:wrapper md:flex-row md:pt-[5.625rem] md:gap-[1.875rem]">
          <div class="order-1 md:basis-1/2 md:grid md:place-items-center">
            <ProductInfo />
          </div>
          <div class="md:basis-1/2 md:grid md:place-items-center">
            <ProductGallery />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
