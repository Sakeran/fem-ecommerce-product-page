import { createEffect, createSignal, Show } from "solid-js";

import { addItemToCart, currentUser, productPage } from "../data/appState";
import { IProductData } from "../data/products";
import QuantityInput from "./QuantityInput";

const asDollars = (i: number) => `$${i.toFixed(2)}`;

export function ProductInfo() {
  const product = () =>
    productPage().product ??
    ({
      productName: "",
      companyName: "",
      productDescription: "",
      priceAdjustmentPercentage: 0,
      originalPrice: 0,
      displayPrice: 0,
    } as IProductData);

  let quantityInputRef: HTMLInputElement | undefined;

  const addToCart = () => {
    if (!quantityInputRef || !productPage().product) return;

    let quantity = parseInt(quantityInputRef.value);
    if (!quantity || quantity < 1) return;

    return addItemToCart(productPage().product as IProductData, quantity);
  };

  return (
    <div class="w-full flex flex-col p-6">
      <h1 class="order-1 text-gray-100 text-2.5xl font-bold pt-5 pb-4 md:text-4.5xl md:pb-8 md:pt-7">
        {product().productName}
      </h1>
      <p class="font-bold uppercase text-xs text-orange-500 tracking-[1.85px] md:text-tiny">
        {product().companyName}
      </p>
      <p class="order-2 text-sm text-gray-400 md:text-base max-w-prose">
        {product().productDescription}
      </p>
      <div class="order-2 pt-6 pb-7 flex justify-between md:flex-wrap md:gap-[0.625rem] md:pb-8">
        <div class="flex gap-4">
          <span class="text-gray-100 font-bold text-2.5xl">
            {asDollars(product().displayPrice)}
          </span>
          <Show when={product().priceAdjustmentPercentage > 0}>
            <span class="px-2 bg-orange-900 text-orange-500 font-bold rounded-md flex items-center">
              {product().priceAdjustmentPercentage}%
            </span>
          </Show>
        </div>
        <span class="font-bold text-gray-700 line-through md:basis-full">
          {asDollars(product().originalPrice)}
        </span>
      </div>
      <div class="order-2 md:flex md:gap-4">
        <div class="md:basis-[10.5rem]">
          <QuantityInput ref={quantityInputRef} product={product()} />
        </div>

        <div class="mt-4 md:mt-0 md:grow">
          <button
            class="w-full min-h-[3.5rem] text-white font-bold bg-orange-500 hover:bg-orange-700 focus-visible:bg-orange-700 rounded-xl flex items-center justify-center shadow-cta transition-colors duration-150 ease-in-out"
            onClick={addToCart}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="currentColor"
                fill-rule="nonzero"
              />
            </svg>
            <span class="ml-4">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
