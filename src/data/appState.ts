import { createStore, produce } from "solid-js/store";

import { IProductData } from "./products";

interface IAppState {
  user: IUserState;
  productPage: IProductPage;
}

interface IUserState {
  avatarImg: string;
  cart: ICart;
}

interface ICart {
  items: ICartLine[];
}

interface ICartLine {
  product: IProductData;
  quantity: number;
}

interface IProductPage {
  product?: IProductData;
  lightboxOpen: boolean;
}

const defaultState: IAppState = {
  user: {
    avatarImg: "",
    cart: { items: [] },
  },

  productPage: {
    product: undefined,
    lightboxOpen: false,
  },
};

const [appState, setAppState] = createStore<IAppState>(defaultState);

/**
 * Get the current user
 * @returns IUserState
 */
export function currentUser(): IUserState {
  return appState.user;
}

/**
 * Returns the current user's cart
 * @returns ICart
 */
export function cart(): ICart {
  return appState.user.cart;
}

/**
 * Get data for the active product page
 * @returns IProductPage
 */
export function productPage(): IProductPage {
  return appState.productPage;
}

// Setters

/**
 * Sets the current user's avatar image
 * @param href href attribute for the avatar image
 */
export function setUserAvatar(href: string) {
  setAppState("user", "avatarImg", href);
}

/**
 * Adds the given product to the cart. If the product already exists in the cart,
 * this will overwrite the line item for that product.
 * @param product Product to add
 * @param quantity Quantity to add
 */
export function addItemToCart(product: IProductData, quantity: number) {
  setAppState("user", "cart", "items", (lines) => {
    const updatedLines = lines.filter((i) => i.product !== product);
    updatedLines.push({ product, quantity });
    return updatedLines;
  });
}

/**
 * Removes the given product from the cart.
 * @param product Product to remove
 */
export function removeProductFromCart(product: IProductData) {
  setAppState("user", "cart", "items", (lines) => {
    const updatedLines = lines.filter((line) => line.product !== product);
    return updatedLines;
  });
}

/**
 * Clears the current user's cart
 */
export function clearCart() {
  setAppState("user", "cart", "items", []);
}
