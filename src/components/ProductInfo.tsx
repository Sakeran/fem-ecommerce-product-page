import { Show } from "solid-js";

import { productPage } from "../data/appState";
import { IProductData } from "../data/products";

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

  let quantityInput: HTMLInputElement | undefined;

  const validateQuantity = () => {
    if (!quantityInput) return;

    const value = quantityInput.value;
    const intValue = parseInt(value);

    if (intValue.toString() !== value || intValue < 1) {
      quantityInput.value = "1";
      return;
    }
  };

  const setQuantity = (fn: (prev: number) => number) => {
    if (!quantityInput) return;
    let newValue = fn(parseInt(quantityInput.value));

    if (!newValue || newValue < 1) {
      newValue = 1;
    }

    quantityInput.value = newValue.toFixed().toString();
  };

  return (
    <div class="w-full flex flex-col p-6">
      <h1 class="order-1 text-gray-100 text-2.5xl font-bold pt-5 pb-4">
        {product().productName}
      </h1>
      <p class="font-bold uppercase text-xs text-orange-500 tracking-[1.85px]">
        {product().companyName}
      </p>
      <p class="order-2 text-sm text-gray-400">
        {product().productDescription}
      </p>
      <div class="order-2 pt-6 pb-7 flex justify-between">
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
        <span class="font-bold text-gray-700 line-through">
          {asDollars(product().originalPrice)}
        </span>
      </div>
      <div class="order-2">
        <div class="min-h-[3.5rem] flex items-center bg-[hsl(220,59%,98%)] rounded-xl text-orange-500">
          <button
            class="w-14 aspect-square hover:text-orange-700 focus-visible:text-orange-700 grid place-items-center"
            aria-controls="quantity"
            onClick={() => setQuantity((p) => p - 1)}
          >
            <svg
              width="12"
              height="4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">
              Decrease quantity for {product().productName}
            </span>
          </button>
          <input
            ref={quantityInput}
            class="[appearance:textfield] font-bold text-gray-100 text-center bg-transparent flex-grow"
            type="number"
            name="quantity"
            id="quantity"
            min="1"
            value="1"
            onBlur={validateQuantity}
          />
          <button
            class="w-14 aspect-square hover:text-orange-700 focus-visible:text-orange-700 grid place-items-center"
            aria-controls="quantity"
            onClick={() => setQuantity((p) => p + 1)}
          >
            <svg
              width="12"
              height="12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">
              Increase quantity for {product().productName}
            </span>
          </button>
        </div>
        <button class="mt-4 w-full min-h-[3.5rem] text-white font-bold bg-orange-500 hover:bg-orange-700 focus-visible:bg-orange-700 rounded-xl flex items-center justify-center shadow-cta transition-colors duration-150 ease-in-out">
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
  );
}
