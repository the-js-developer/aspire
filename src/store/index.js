import { createReturnStatement } from '@vue/compiler-core'
import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import api from '../api/data.js'

export default store(function () {
  const Store = createStore({
    state: {
      cards: [],
      transactions: [],
      card: {}
    },
    mutations: {
      GET_CARDS(state, payload) {
        state.cards = payload
      },
      GET_TRANSACTIONS(state, payload) {
        state.transactions = payload
      }
    },
    actions: {
      fetchCards() {
        const cards = api.getCardsData();
        this.commit('GET_CARDS', cards)
      },
      fetchTransactions() {
        const transactions = api.getTransactions();
        this.commit('GET_TRANSACTIONS', transactions);
      },
      toggleCardFreeze({state},payload){
        let cards = [... state.cards].map((card) => {
          if(card.maskedCardNumer === payload.maskedCardNumer) {
            card.canFreeze  = !card.canFreeze;
          }
          return card;
        });
        this.commit('GET_CARDS', cards);

      },
      cancelCard({state},payload) {
        let cards = [... state.cards].filter((card) => {
          return card.maskedCardNumer !== payload.maskedCardNumer;
        });
        this.commit('GET_CARDS', cards);
      },
      addCard({state},payload) {
        const name = payload;
        const card = {
          name,
          validity: String(new Date().getMonth() +1) + '/' +String(new Date().getFullYear() +4).slice(2),
          maskedCardNumer: parseInt(Math.random()*10000).toString(),
          canFreeze: true,
          canSetLimit: true,
          canAddToGpay: true,
          canReplace: true,
          canCancel: true,

        }
        let cards = [... state.cards];
        cards.push(card)
        this.commit('GET_CARDS', cards);
      }
    },
    getters: {
      getCards: (state) => {
        return state.cards;
      },
      getTransactions: (state) => {
        return state.transactions;
      }
    }
  })

  return Store
})
