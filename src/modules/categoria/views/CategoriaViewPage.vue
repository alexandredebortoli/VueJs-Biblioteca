<template>
  <biblioteca-single-content-layout container-size="lg">
    <template v-if="categoria" #content>
      <biblioteca-row class="d-flex align-items-center">
        <biblioteca-col>
          <biblioteca-header>
            {{ categoria.nome }}
          </biblioteca-header>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
        </biblioteca-col>
      </biblioteca-row>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { CATEGORIA_ERRORS } from '@/modules/categoria/categoria.constants';
import { getCategoria } from '@/modules/categoria/categoria.service';
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToCategoriaNotFound } from '@/modules/categoria/categoria.routes';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'CategoriaViewPage',
  components: {
    BibliotecaSingleContentLayout,
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
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      getCategoria(this.id)
        .then(({ data }) => {
          this.categoria = data;
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
  },
};
</script>
