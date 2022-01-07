export interface IProductData {
  productName: string;
  productDescription: string;

  companyName: string;

  displayPrice: number;
  originalPrice: number;
  priceAdjustmentPercentage: number;

  images: IProductImage[];
}

export interface IProductImage {
  id: number;
  href: string;
  thumbnailHref: string;
}

function makeProductImage(id: number): IProductImage {
  return {
    id,
    href: `/images/image-product-${id}.jpg`,
    thumbnailHref: `/images/image-product-${id}-thumbnail.jpg`,
  };
}

export function getProduct(): IProductData {
  // Return the exercise's dummy data
  return {
    productName: "Fall Limited Edition Sneakers",
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    companyName: "Sneaker Company",
    displayPrice: 125,
    originalPrice: 250,
    priceAdjustmentPercentage: 50,
    images: [1, 2, 3, 4].map((id) => makeProductImage(id)),
  };
}
