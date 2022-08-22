export const CATEGORIAS_URL = Object.freeze({
  path: '/categorias',
  view: {
    name: 'categoria.view',
    path: '/categorias/ver/:id',
  },
  edit: {
    name: 'categoria.edit',
    path: '/categorias/editar/:id',
  },
  create: {
    name: 'categoria.create',
    path: '/categorias/criar',
  },
  notfound: {
    name: 'categoria.notfound',
    path: '/categorias/nao-encontrado',
  },
});

export const CATEGORIA_ERRORS = {
  404: 'CATEGORIA_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
