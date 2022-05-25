export function getCart() {
  const products = localStorage.getItem('cart');
  return products ? products.split(',') : [];
}

export function addToCart(product) {
  const products = getCart();
  localStorage.setItem('cart', [...products, product]);
}
