import * as categoriaResource from '@/modules/categoria/categoria.resource';

export function fetchCategorias() {
  return new Promise((resolve, reject) =>
    categoriaResource
      .fetchCategorias()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getCategoria(categoriaId) {
  return new Promise((resolve, reject) =>
    categoriaResource
      .getCategoria(categoriaId)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveCategoria(categoria) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getCategoriaSaveAction(categoria)(categoria)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function removeCategoria(categoria) {
  return new Promise((resolve, reject) =>
    categoriaResource
      .removeCategoria(categoria.id)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      }));
}

function getCategoriaSaveAction(categoria) {
  return categoria.id ? categoriaResource.updateCategoria : categoriaResource.createCategoria;
}
