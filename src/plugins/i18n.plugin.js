import { translate } from '@/services/translate.service';

export default {
  install(Vue) {
    Vue.prototype.$t = term => translate(term);
  },
};
