<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <biblioteca-header v-if="isEditing">
        Editar Categoria
      </biblioteca-header>
      <biblioteca-header v-else>
        Criar Categoria
      </biblioteca-header>
      <biblioteca-categoria-edit-inputs @save="saveCategoria" />
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { CATEGORIA_ERRORS } from '@/modules/categoria/categoria.constants';
// eslint-disable-next-line import/no-cycle
import { goToOpenCategoria, goToCategoriaNotFound } from '@/modules/categoria/categoria.routes';
import { saveCategoria, getCategoria } from '@/modules/categoria/categoria.service';

import BibliotecaCategoriaEditInputs from '@/modules/categoria/components/CategoriaEditInputs.vue';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaCategoriaEditPage',
  components: {
    BibliotecaCategoriaEditInputs,
    BibliotecaSingleContentLayout,
  },
  provide() {
    const categoriaEditVm = {};
    Object.defineProperty(categoriaEditVm, 'categoria', {
      get: () => this.categoria,
    });
    return { categoriaEditVm };
  },
  data() {
    return {
      categoria: null,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
    isEditing() {
      return !!this.categoria?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchCategoria();
    } else {
      this.categoria = {};
    }
  },
  methods: {
    fetchCategoria() {
      getCategoria(this.id)
        .then(data => {
          this.categoria = data.data;
        })
        .catch(err => {
          this.categoria = null;
          if (err) {
            goToCategoriaNotFound(this.$router);
          } else if ((err.response.data.errors === CATEGORIA_ERRORS[err.response.status] && err.response.status === 404)) {
            goToCategoriaNotFound(this.$router);
          } else {
            toastError('Erro ao buscar a categoria');
          }
        });
    },
    saveCategoria() {
      saveCategoria(this.categoria)
        .then(data => {
          goToOpenCategoria(this.$router, data || this.categoria);
        })
        .catch(() => toastError('Erro ao salvar a categoria'));
    },
  },
};
</script>
