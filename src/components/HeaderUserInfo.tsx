import { Show } from "solid-js";
import cartIcon from "../assets/icons/icon-cart.svg";
import { currentUser } from "../data/appState";

export default function HeaderUserInfo() {
  return (
    <div class="flex items-center gap-5">
      <button>
        <img src={cartIcon} alt="" />
        <span class="sr-only">View Cart</span>
      </button>
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
