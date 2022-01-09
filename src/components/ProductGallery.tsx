import { createEffect, createSignal, For } from "solid-js";

import prevIcon from "../assets/icons/icon-previous.svg";
import nextIcon from "../assets/icons/icon-next.svg";

import { productPage } from "../data/appState";
import Lightbox from "./Lightbox";
import ImageSlider from "./ImageSlider";
import ImageThumbnails from "./ImageThumbnails";

export function ProductGallery() {
  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [lightboxOn, setLightboxOn] = createSignal(false);

  const productImages = () => productPage().product?.images || [];
  const productName = () => productPage().product?.productName || "";

  const selectPreviousImage = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const selectNextImage = () =>
    setCurrentIndex((i) => Math.min(i + 1, productImages().length - 1));

  const onFirstImage = () => currentIndex() == 0;
  const onLastImage = () => currentIndex() == productImages().length - 1;

  const toggleLightbox = () => setLightboxOn((v) => !v);

  let lightboxScrim: HTMLDivElement | undefined;

  return (
    <>
      <div class="grid grid-cols-1 grid-rows-1 md:mx-12 md:gap-8">
        <div class="relative row-start-1 col-start-1">
          <ImageSlider
            images={productPage().product?.images ?? []}
            currentImage={currentIndex()}
            productName={productName()}
          />
          <button
            class="hidden md:block absolute inset-0 w-full"
            onClick={toggleLightbox}
          >
            <span className="sr-only">Open Lightbox</span>
          </button>
        </div>
        <div class="px-4 flex justify-between items-center row-start-1 col-start-1 z-10 md:hidden">
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
        <div className="hidden md:block">
          <ImageThumbnails
            images={productPage().product?.images ?? []}
            currentImage={currentIndex()}
            productName={productName()}
            onSelection={(i) => setCurrentIndex(i)}
          />
        </div>
      </div>
      <div
        ref={lightboxScrim}
        class="hidden md:grid md:place-items-center md:fixed md:inset-0 md:bg-black/75 z-50 transition-opacity ease-in-out duration-300"
        classList={{
          "opacity-0": !lightboxOn(),
          "pointer-events-none": !lightboxOn(),
        }}
        onClick={(e) => e.target === lightboxScrim && toggleLightbox()}
      >
        <Lightbox onClose={toggleLightbox} />
      </div>
    </>
  );
}
