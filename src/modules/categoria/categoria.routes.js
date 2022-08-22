import { CATEGORIAS_URL } from '@/modules/categoria/categoria.constants';
import { createEmptyComponent } from '@/router/route.service';

export default [
  {
    path: CATEGORIAS_URL.path,
    redirect: '/',
    component: { render: createEmptyComponent },
    children: [
      {
        ...CATEGORIAS_URL.view,
        component: () => import('@/modules/categoria/views/CategoriaViewPage.vue'),
      },
      {
        ...CATEGORIAS_URL.edit,
        component: () => import('@/modules/categoria/views/CategoriaEditPage.vue'),
      },
      {
        ...CATEGORIAS_URL.create,
        component: () => import('@/modules/categoria/views/CategoriaEditPage.vue'),
      },
      {
        ...CATEGORIAS_URL.notfound,
        component: () => import('@/modules/categoria/views/CategoriaNotFound.vue'),
      },
    ],
  },
];

export function goToCategoriaNotFound($router) {
  $router.push({
    name: CATEGORIAS_URL.notfound.name,
  });
}

export function goToOpenCategoria($router, categoria) {
  $router.push({
    name: CATEGORIAS_URL.view.name,
    params: { id: categoria.id },
  });
}

export function goToCreateCategoria($router) {
  $router.push({
    name: CATEGORIAS_URL.create.name,
  });
}
