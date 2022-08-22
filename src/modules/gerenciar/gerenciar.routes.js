import { GERENCIAR_URL } from '@/modules/gerenciar/gerenciar.constants';

export default [
  {
    ...GERENCIAR_URL.livros,
    component: () => import('@/modules/gerenciar/views/GerenciarLivros.vue'),
  },
  {
    ...GERENCIAR_URL.usuarios,
    component: () => import('@/modules/gerenciar/views/GerenciarUsuarios.vue'),
  },
  {
    ...GERENCIAR_URL.categorias,
    component: () => import('@/modules/gerenciar/views/GerenciarCategorias.vue'),
  },
];

export function goToLivros($router) {
  $router.push({
    name: GERENCIAR_URL.livros.name,
  });
}

export function goToUsuarios($router) {
  $router.push({
    name: GERENCIAR_URL.usuarios.name,
  });
}

export function goToCategorias($router) {
  $router.push({
    name: GERENCIAR_URL.categorias.name,
  });
}
