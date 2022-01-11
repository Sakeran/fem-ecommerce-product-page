import { Dynamic, For } from "solid-js/web";
import {
  clearCart,
  currentUser,
  removeProductFromCart,
} from "../data/appState";

export default function Cart() {
  const component = () => {
    if (currentUser().cart.items.length >= 1) {
      return CartItems;
    }
    return EmptyCart;
  };

  return (
    <div class="w-[22.5rem] bg-white rounded-[10px] min-h-[16rem] flex flex-col shadow-cart z-30">
      <h2 class="px-6 pt-6 pb-7 pb-text-lg text-gray-100 font-bold border-b border-b-gray-900">
        Cart
      </h2>
      <div class="flex-grow px-6 pt-6 pb-8 grid">
        <Dynamic component={component()} />
      </div>
    </div>
  );
}

function CartItems() {
  return (
    <div class="flex flex-col gap-6">
      <div class="space-y-4">
        <For each={currentUser().cart.items}>
          {(line) => (
            <div class="flex items-center">
              <div class="mr-4 w-[3.125rem] shrink-0 aspect-square rounded overflow-hidden">
                <img src={line.product.images[0]?.thumbnailHref} alt="" />
              </div>
              <div class="text-gray-400 text-base">
                <p>{line.product.productName}</p>
                <div>
                  <span>
                    ${line.product.displayPrice.toFixed(2)} x {line.quantity}
                  </span>
                  <span class="ml-4 font-bold text-gray-100">
                    ${(line.quantity * line.product.displayPrice).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                class="pl-4 aspect-square text-gray-800 hover:text-gray-400 focus-visible:text-gray-400 transition-colors ease-in-out"
                onClick={() => removeProductFromCart(line.product)}
              >
                <svg
                  aria-hidden="true"
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">
                  Delete {line.product.productName} from cart
                </span>
              </button>
            </div>
          )}
        </For>
      </div>
      <button
        class="w-full min-h-[3.5rem] text-white font-bold bg-orange-500 hover:bg-orange-700 focus-visible:bg-orange-700 rounded-xl flex items-center justify-center shadow-cta transition-colors duration-150 ease-in-out"
        onClick={() => clearCart()}
      >
        Checkout
      </button>
    </div>
  );
}

function EmptyCart() {
  return (
    <div class="grid place-items-center">
      <p class="text-lg font-bold text-gray-400">Your cart is empty.</p>
    </div>
  );
}
