<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>
<script>
import { CATEGORIAS_URL } from '@/modules/categoria/categoria.constants';

export default {
  name: 'BibliotecaCategoriaLink',
  props: {
    id: {
      type: Number,
      required: true,
    },
    action: {
      type: String,
      default: 'view',
      validator(action) {
        return action && ['view', 'edit'].includes(action);
      },
    },
  },
  computed: {
    to() {
      return {
        name: CATEGORIAS_URL[this.action].name,
        path: CATEGORIAS_URL[this.action].path,
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>
