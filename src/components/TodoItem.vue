<template>
  <b-row class="justify-content-between mx-2">
      <h4 v-if="!editing">{{todo.title}}</h4>
      <input v-bind:value="todoText" @change="todoTextChange" v-else type="text" class="col form-control" />
      <div>
        <b-button @click="updateTodoI(todo)" variant="primary mx-3 my-1">
          <font-awesome-icon icon="edit" v-if="!editing" />
          <font-awesome-icon icon="check" v-else />
        </b-button>
        <b-button @click="deleteTodo(todo.id)" variant="danger">Delete</b-button>
      </div>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
      todo: {},
    },
    data() {
      return {
        todoText: "", 
        editing: false
      };
    },
    methods: {
      ...mapActions(["deleteTodo", "updateTodo"]),
      todoTextChange(e) {
        this.todoText = e.target.value;
      },
      updateTodoI(todo) {
        this.editing = this.editing == true ? false : true;
        if(this.editing) {
          this.todoText = todo.title;
          this.updateTodo(todo);
        } else {
          todo.title = this.todoText;
        }
      }
    }
}
</script>

<style>

</style>