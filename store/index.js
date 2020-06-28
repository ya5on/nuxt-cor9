import axios, * as others from 'axios'

export const state = () => ({
  articles: []
});

export const mutations = {
  SET_ARTICLES:(state, articles) => {
    state.articles = articles
  }
};

export const actions = {
  GET_ARTICLES({commit}) {
    return axios('http://localhost:1337/articles',{
      method: "GET"
    })
      .then((articles) => {
        commit('SET_ARTICLES', articles.data);
        return articles;
      })
      .catch((error) => {
        console.log("error")
        return error;
      })
  }
};

export const getters = {
  ARTICLES(state){
    return state.articles;
  }
};
