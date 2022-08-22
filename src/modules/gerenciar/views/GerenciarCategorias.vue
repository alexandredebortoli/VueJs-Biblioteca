<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <biblioteca-header>Categorias</biblioteca-header>
        <biblioteca-button @click="onCreateCategoria">
          Adicionar Categoria
        </biblioteca-button>
      </div>
      <table v-if="categoriaList && categoriaList.length > 0" class="table">
        <tbody>
          <tr v-for="categoria in categoriaList" :key="categoria.id">
            <td class="py-3 px-2">
              <biblioteca-header size="sm" class="d-flex align-item--center">
                <biblioteca-categoria-link :id="categoria.id">
                  {{ categoria.nome }}
                </biblioteca-categoria-link>
              </biblioteca-header>
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                trigger="click">
                <biblioteca-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <biblioteca-categoria-link
                      :id="categoria.id"
                      action="edit">
                      <biblioteca-icon size="sm" icon="pencil" />
                      Editar
                    </biblioteca-categoria-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteCategoria(categoria)">
                      <biblioteca-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <biblioteca-modal-delete
                v-if="showModal(categoria)"
                content="Você realmente deseja excluir a categoria?"
                @close="setDeleteCategoria(null)"
                @confirm="onDeleteCategoria(categoria)">
              </biblioteca-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <biblioteca-p v-else class="opacity--50 my--lg">( Sem Categorias )</biblioteca-p>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { fetchCategorias, removeCategoria } from '@/modules/categoria/categoria.service';
import { goToCreateCategoria } from '@/modules/categoria/categoria.routes';

import BibliotecaCategoriaLink from '@/modules/categoria/components/CategoriaLink.vue';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaGerenciarCategorias',
  components: {
    BibliotecaCategoriaLink,
    BibliotecaSingleContentLayout,
  },
  data() {
    return {
      categoriaList: [],
      categoriaDelete: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.categoriaList = [];
      fetchCategorias()
        .then(data => {
          this.categoriaList = data.data;
        })
        .catch(() => {
          this.categoriaList = [];
        });
    },
    onCreateCategoria() {
      goToCreateCategoria(this.$router);
    },
    setDeleteCategoria(categoria) {
      this.categoriaDelete = categoria;
    },
    showModal(categoria) {
      return this.categoriaDelete && this.categoriaDelete.id === categoria.id;
    },
    onDeleteCategoria(categoria) {
      removeCategoria(categoria)
        .then(() => {
          this.$router.go(0);
        })
        .catch(() => toastError('Não foi possível excluir a categoria'));
    },
  },
};
</script>
