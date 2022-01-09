import { For } from "solid-js";
import { IProductImage } from "../data/products";

interface ImageThumbnailsProps {
  images: IProductImage[];
  currentImage: number;
  productName: string;

  onSelection: (i: number) => void;
}

export default function ImageThumbnails(props: ImageThumbnailsProps) {
  const isCurrent = (i: number) => props.currentImage == i;

  return (
    <div class="flex flex-wrap gap-8 justify-center">
      <For each={props.images}>
        {(img, i) => (
          <button
            class="relative rounded-lg overflow-hidden basis-[calc(25%-1.5rem)] rouded-xl border-2 border-transparent hover:[--thumbnail-opacity:0.5] focus-visible:[--thumbnail-opacity:0.5] focus-visible:outline-orange-500 outline-none"
            classList={{
              "border-orange-500": isCurrent(i()),
            }}
            onClick={() => props.onSelection(i())}
          >
            <img src={img.thumbnailHref} alt="" />
            <span className="sr-only">
              View image {i() + 1} of {props.images.length}.
            </span>
            <div
              class="absolute inset-0 bg-white pointer-events-none opacity-[var(--thumbnail-opacity,0)] transition-opacity"
              classList={{ "[--thumbnail-opacity:0.75]": isCurrent(i()) }}
            ></div>
          </button>
        )}
      </For>
    </div>
  );
}
