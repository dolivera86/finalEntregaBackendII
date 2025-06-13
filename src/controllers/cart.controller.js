import cartService from '../services/cart.service.js';

export const getCart = async (req, res) => {
  const cart = await cartService.getUserCart(req.user.id);
  res.json(cart);
};

export const addProduct = async (req, res) => {
  const cart = await cartService.addProduct(req.user.id, req.body.productId);
  res.json(cart);
};

export const clearCart = async (req, res) => {
  const cart = await cartService.clear(req.user.id);
  res.json(cart);
};