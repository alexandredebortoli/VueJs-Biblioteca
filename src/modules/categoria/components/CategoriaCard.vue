<template>
  <biblioteca-row>
    <biblioteca-col
      :sm="4"
      :md="2">
      <biblioteca-icon
        class="mt-2"
        size="xl"
        icon="book" />
    </biblioteca-col>
    <biblioteca-col
      :sm="20"
      :md="22">
      <biblioteca-header v-truncate size="sm">
        <biblioteca-categoria-link :id="categoria.id">{{ categoria.nome }}</biblioteca-categoria-link>
      </biblioteca-header>
    </biblioteca-col>
  </biblioteca-row>
</template>

<script>
import BibliotecaCategoriaLink from '@/modules/categoria/components/CategoriaLink.vue';

export default {
  name: 'CategoriaListItem',
  components: {
    BibliotecaCategoriaLink,
  },
  props: {
    categoria: {
      type: Object,
      required: true,
    },
  },
};
</script>
