import productService from '../services/product.service.js';

export const getAll = async (req, res) => {
  const products = await productService.getAll();
  res.json(products);
};

export const getById = async (req, res) => {
  const product = await productService.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
};

export const create = async (req, res) => {
  const product = await productService.create(req.body);
  res.status(201).json(product);
};

export const update = async (req, res) => {
  const product = await productService.update(req.params.id, req.body);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
};

export const remove = async (req, res) => {
  const result = await productService.delete(req.params.id);
  if (!result) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};