import { createSignal, Show } from "solid-js";
import { currentUser } from "../data/appState";

import Cart from "./Cart";

export default function HeaderUserInfo() {
  const [cartVisible, setCartVisible] = createSignal(false);

  const toggleCart = () => setCartVisible((v) => !v);

  return (
    <div class="flex items-center gap-5 md:gap-11">
      <div class="contents">
        <button
          class="relative text-gray-400 hover:text-gray-100 focus-visible:text-gray-100 transition-colors ease-in-out duration-150"
          aria-controls="user-cart"
          aria-expanded={cartVisible()}
          onClick={toggleCart}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="currentColor"
              fill-rule="nonzero"
            />
          </svg>
          <span class="sr-only">View Cart</span>
          <Show when={currentUser().cart.items.length >= 1}>
            <div class="absolute top-[-0.375rem] right-[-0.375rem] w-5 h-3 bg-orange-500 rounded-md text-white font-bold grid place-items-center text-[0.625rem] leading-none">
              {currentUser().cart.items.length}
            </div>
          </Show>
        </button>
        <div
          id="user-cart"
          class="absolute inset-x-2 flex 2xl:block justify-end top-[calc(100%_+_0.5rem)] transition-opacity ease-in-out 2xl:inset-x-auto 2xl:-translate-x-1/2"
          classList={{
            "opacity-0": !cartVisible(),
            "pointer-events-none": !cartVisible(),
          }}
        >
          <Cart />
        </div>
      </div>
      <button class="relative w-6 aspect-square rounded-full overflow-hidden sm:w-[3.125rem] sm:border-2 sm:border-orange-500/0 sm:hover:border-orange-500 transition-colors">
        <Show
          when={currentUser().avatarImg}
          fallback={<div class="absolute bg-gray-400 inset-0"></div>}
        >
          <img src={currentUser().avatarImg} alt="User avatar" />
        </Show>
      </button>
    </div>
  );
}
