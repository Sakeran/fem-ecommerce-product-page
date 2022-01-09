import { createEffect, createSignal, For } from "solid-js";

import prevIcon from "../assets/icons/icon-previous.svg";
import nextIcon from "../assets/icons/icon-next.svg";

import { productPage } from "../data/appState";

export function ProductGallery() {
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const productImages = () => productPage().product?.images || [];
  const productName = () => productPage().product?.productName || "";

  const selectPreviousImage = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const selectNextImage = () =>
    setCurrentIndex((i) => Math.min(i + 1, productImages().length - 1));

  const isCurrent = (i: number) => currentIndex() == i;

  const onFirstImage = () => currentIndex() == 0;
  const onLastImage = () => currentIndex() == productImages().length - 1;

  let mainImageContainer: HTMLDivElement | undefined;

  createEffect(() => {
    if (!mainImageContainer) return;
    mainImageContainer.style.transform = `translateX(-${
      100 * currentIndex()
    }%)`;
  });

  return (
    <>
      <div class="grid grid-cols-1 grid-rows-1 md:mx-12 md:gap-8">
        <div class="overflow-x-hidden row-start-1 col-start-1 md:rounded-gallery-main">
          <div
            ref={mainImageContainer}
            class="flex w-full transition-transform ease-in-out duration-300"
          >
            <For each={productImages()}>
              {(image, i) => (
                <div class="basis-full shrink-0">
                  <img
                    src={image.href}
                    alt={`${productName()} image ${i() + 1} of ${
                      productImages().length
                    }`}
                  />
                </div>
              )}
            </For>
          </div>
        </div>
        <div class="px-4 flex justify-between items-center row-start-1 col-start-1 z-20 md:hidden">
          <button
            onClick={selectPreviousImage}
            class="w-min h-min"
            classList={{ "opacity-50": onFirstImage() }}
            disabled={onFirstImage()}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M22.8572 14.2857L17.1429 20L22.8572 25.7143"
                stroke="#1D2026"
                stroke-width="3"
              />
            </svg>

            <span className="sr-only">View Previous Image</span>
          </button>

          <button
            onClick={selectNextImage}
            class="w-min h-min"
            disabled={onLastImage()}
            classList={{ "opacity-50": onLastImage() }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M17.1428 14.2857L22.8571 20L17.1428 25.7143"
                stroke="#1D2026"
                stroke-width="3"
              />
            </svg>

            <span className="sr-only">View Next Image</span>
          </button>
        </div>
        <div class="hidden md:flex md:flex-wrap md:gap-8 md:justify-center">
          <For each={productImages()}>
            {(img, i) => (
              <button
                class="rounded-lg overflow-hidden basis-[calc(25%-1.5rem)] rouded-xl border-2 border-transparent hover:[--thumbnail-opacity:0.5] focus-visible:[--thumbnail-opacity:0.5] focus-visible:outline-orange-500 outline-none transition-opacity"
                classList={{
                  "border-orange-500": isCurrent(i()),
                }}
                onClick={() => setCurrentIndex(i())}
              >
                <img
                  src={img.thumbnailHref}
                  alt=""
                  class="opacity-[var(--thumbnail-opacity,_1)]"
                  classList={{ "[--thumbnail-opacity:0.25]": isCurrent(i()) }}
                />
                <span className="sr-only">
                  View image {i() + 1} of {productImages().length}.
                </span>
              </button>
            )}
          </For>
        </div>
      </div>
      <div class="hidden">LIGHTBOX</div>
    </>
  );
}
