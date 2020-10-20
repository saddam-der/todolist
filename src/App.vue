<template>
  <b-container>
  <div id="app">
    <div class="mt-3">
    <b-card-group deck class="mb-5">
      <b-card border-variant="dark" header="Todo App" align="center">
        <b-card-text>
          <TodoInput />
        <TodoList />
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
    
    
  </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

@Component({
  components: {
    TodoInput,
    TodoList
  }
})

export default class App extends Vue {}
</script>

<style>
  #app {
  text-align: center;
}
</style>
