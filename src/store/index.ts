import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "One",
      },
      {
        id: 2,
        title: "Three",
      },
      {
        id: 3,
        title: "Four",
      },
    ]
  },
  getters: {
    alltodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo){
      commit("addtodo", todo);
    },
    deleteTodo({ commit }, id){
      commit('deletetodo', id);
    },
    updateTodo({ commit }, todo){
      commit("updatetodo", todo);
    },
  },
  mutations: { 
    addtodo(state, todo) {
       state.todos.push(todo);
    },
    deletetodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);  
    },
    updatetodo(state, todo) {
      const index = state.todos.findIndex(t=>t.id == todo.id);
      console.log(index);  
    }
  },
  modules: {}
});
