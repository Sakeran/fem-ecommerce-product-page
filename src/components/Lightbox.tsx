import { createSignal, For } from "solid-js";
import { productPage } from "../data/appState";
import ImageSlider from "./ImageSlider";
import ImageThumbnails from "./ImageThumbnails";

interface LightboxProps {
  onClose: () => void;
}

export default function Lightbox(props: LightboxProps) {
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const productImages = () => productPage().product?.images || [];
  const productName = () => productPage().product?.productName || "";

  const selectPreviousImage = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const selectNextImage = () =>
    setCurrentIndex((i) => Math.min(i + 1, productImages().length - 1));

  const onFirstImage = () => currentIndex() == 0;
  const onLastImage = () => currentIndex() == productImages().length - 1;

  return (
    <div
      onClick={(e) => e.target == e.currentTarget && props.onClose()}
      className="max-w-[1110px]"
    >
      <div class="w-1/2 mx-auto grid">
        <div class="justify-self-end mb-6">
          <button
            onClick={props.onClose}
            class="text-[hsl(0,0%,85%)] hover:text-orange-500 focus-visible:text-orange-500 transition-colors duration-150 ease-in-out"
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Close lightbox</span>
          </button>
        </div>
        <div className="row-start-2 col-start-1">
          <ImageSlider
            images={productPage().product?.images ?? []}
            currentImage={currentIndex()}
            productName={productName()}
          />
        </div>
        <div class="row-start-2 col-start-1 z-10 flex items-center justify-between">
          <button
            disabled={onFirstImage()}
            onClick={selectPreviousImage}
            class="-translate-x-1/2 text-gray-100 hover:text-orange-500 focus-visible:text-orange-500 duration-150 transition-all disabled:opacity-25"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="28" r="28" fill="white" />
              <path
                d="M32 20L24 28L32 36"
                stroke="currentColor"
                stroke-width="3"
              />
            </svg>

            <span className="sr-only">Previous Image</span>
          </button>
          <button
            disabled={onLastImage()}
            onClick={selectNextImage}
            class="translate-x-1/2 text-gray-100 hover:text-orange-500 focus-visible:text-orange-500 duration-150 transition-all disabled:opacity-25"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="28" r="28" fill="white" />
              <path
                d="M24 20L32 28L24 36"
                stroke="currentColor"
                stroke-width="3"
              />
            </svg>

            <span className="sr-only">Next Image</span>
          </button>
        </div>
        <div class="pt-10 mx-12">
          <ImageThumbnails
            images={productPage().product?.images ?? []}
            currentImage={currentIndex()}
            productName={productName()}
            onSelection={(i) => setCurrentIndex(i)}
          />
        </div>
      </div>
    </div>
  );
}
