import Vuex from 'vuex'
import language from '@static/language/config.json';

const state = {
  datas: {},
  language: 'cn'
}

const getters = {
  languageDatas(state) {
    return state.datas
  },
  language(state) {
    return state.language
  }
}

const actions = {
  updateLanguage({commit, state}, lang) {
    window.localStorage.setItem('LANGUAGE', lang);
    commit(types.LANGUAGE);
  }
}

const mutations = {
  LANGUAGE_INIT_DATA(state) {
    state.datas = language;
  },
  LANGUAGE(state) {
    // if (window.localStorage.getItem('LANGUAGE')) {
    //     state.language = window.localStorage.getItem('LANGUAGE');
    // }
  }
};

const createStore = () => {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}

export default createStore
