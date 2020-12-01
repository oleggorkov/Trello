import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({

    state: {
        myBoards: [],
        myLists: []
    },
    mutations: {
        createBoard(state, board) {
            state.myBoards.push(board);
        },
        createList(state, myList) {
            state.myLists.push(myList);
        }
    },
    actions: {
        createBoard({commit}, board) {
            commit('createBoard', board);
        },
        createList({commit}, myList) {
            commit('createList', myList);
        }
    },
    getters: {
        titleMyBoard: state => state.myBoards,
        titleMyList: state => state.myLists
    }
})

export default store;
