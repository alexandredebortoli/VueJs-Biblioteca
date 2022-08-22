import { get, post, put, remove } from '@/helpers/http';

const BASE_PATH = 'categorias';

export function fetchCategorias() {
  return get(`${BASE_PATH}`);
}

export function getCategoria(categoriaId) {
  return get(`${BASE_PATH}/${categoriaId}`);
}

export function createCategoria(categoria) {
  return post(`${BASE_PATH}`, { ...categoria });
}

export function updateCategoria(categoria) {
  return put(`${BASE_PATH}/${categoria.id}`, categoria);
}

export function removeCategoria(id) {
  return remove(`${BASE_PATH}/${id}`);
}
