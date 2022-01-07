import { createSignal, Show } from "solid-js";
import cartIcon from "../assets/icons/icon-cart.svg";
import { currentUser } from "../data/appState";

import Cart from "./Cart";

export default function HeaderUserInfo() {
  const [cartVisible, setCartVisible] = createSignal(false);

  const toggleCart = () => setCartVisible((v) => !v);

  return (
    <div class="flex items-center gap-5">
      <div class="contents">
        <button
          aria-controls="user-cart"
          aria-expanded={cartVisible()}
          onClick={toggleCart}
        >
          <img src={cartIcon} alt="" />
          <span class="sr-only">View Cart</span>
        </button>
        <div
          id="user-cart"
          class="absolute inset-x-2 top-[calc(100%_+_0.5rem)] transition-all ease-in-out"
          classList={{
            "opacity-0": !cartVisible(),
            "pointer-events-none": !cartVisible(),
            "scale-0": !cartVisible()
          }}
        >
          <Cart />
        </div>
      </div>
      <div class="relative w-6 aspect-square rounded-full overflow-hidden">
        <Show
          when={currentUser().avatarImg}
          fallback={<div class="absolute bg-gray-400 inset-0"></div>}
        >
          <img src={currentUser().avatarImg} alt="User avatar" />
        </Show>
      </div>
    </div>
  );
}
