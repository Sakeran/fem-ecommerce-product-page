import { createEffect } from "solid-js";
import { IProductData } from "../data/products";

interface QuantityInputProps {
  product: IProductData;
  ref?: HTMLInputElement | undefined;
}

export default function QuantityInput(props: QuantityInputProps) {
  let input: HTMLInputElement | undefined;

  createEffect(() => {
    input =
      (document.getElementById(
        `${props.product.productName}-quantity`
      ) as HTMLInputElement) || undefined;
  });

  const step = (v: number) => {
    if (!input || v == 0) return;
    v < 0 ? input.stepDown() : input.stepUp();
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };

  return (
    <div class="min-h-[3.5rem] bg-[hsl(220,59%,98%)] rounded-xl text-orange-500 flex items-stretch">
      <button
        class="shrink-0 w-14 aspect-square hover:text-orange-700 focus-visible:text-orange-700 grid place-items-center"
        onClick={() => step(-1)}
      >
        <MinusIcon />
        <span className="sr-only">
          Decrease quantity for {props.product.productName}
        </span>
      </button>

      <input
        ref={props.ref}
        class="[appearance:textfield] w-full grow font-bold text-gray-100 text-center bg-transparent"
        type="number"
        name="quantity"
        min="1"
        value="1"
        id={`${props.product.productName}-quantity`}
      />

      <button
        class="shrink-0 w-14 aspect-square hover:text-orange-700 focus-visible:text-orange-700 grid place-items-center"
        onClick={() => step(1)}
      >
        <PlusIcon />
        <span className="sr-only">
          Increase quantity for {props.product.productName}
        </span>
      </button>
    </div>
  );
}

function MinusIcon() {
  return (
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
  );
}

function PlusIcon() {
  return (
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
  );
}
