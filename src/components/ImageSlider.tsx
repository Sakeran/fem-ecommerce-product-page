import { Accessor, createEffect, For } from "solid-js";
import { IProductImage } from "../data/products";

interface ImageSliderProps {
  images: IProductImage[];
  currentImage: number;
  productName: string;
}

export default function ImageSlider(props: ImageSliderProps) {

  createEffect(() => {
    if (!imageContainer) return;
    imageContainer.style.transform = `translateX(-${
      100 * props.currentImage
    }%)`;
  });

  let imageContainer: HTMLDivElement | undefined;

  return (
    <div class="overflow-x-hidden md:rounded-gallery-main">
      <div
        ref={imageContainer}
        class="flex w-full transition-transform ease-in-out duration-300"
      >
        <For each={props.images}>
          {(image: IProductImage, i: Accessor<number>) => (
            <div class="basis-full shrink-0">
              <img
                src={image.href}
                alt={`${props.productName} image ${i() + 1} of ${
                  props.images.length
                }`}
              />
            </div>
          )}
        </For>
      </div>
    </div>
  );
}