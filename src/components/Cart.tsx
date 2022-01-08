export default function Cart() {
  return (
    <div class="w-[22.5rem] bg-white rounded-[10px] min-h-[16rem] flex flex-col shadow-cart">
      <h2 class="px-6 pt-6 pb-7 pb-text-lg text-gray-100 font-bold border-b border-b-gray-900">
        Cart
      </h2>
      <div class="flex-grow px-6 pt-6 pb-8 grid">
        <div class="grid place-items-center">
          <p class="text-lg font-bold text-gray-400">Your cart is empty.</p>
        </div>
      </div>
    </div>
  );
}
