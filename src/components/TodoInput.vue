 <template>
     <div>
         <b-row >
         <b-input-group class="my-4 mx-4">
            <b-form-input v-model="todoText"></b-form-input>
                <b-input-group-append>
                    <b-button @click="addTodoI" variant="primary"> <font-awesome-icon icon="folder-plus"/> Add</b-button>
                    
                </b-input-group-append>
         </b-input-group>
         </b-row>
     </div>
 </template>

 <script>
    import { mapActions } from "vuex"; 
    import { v1 } from 'uuid';

     export default {
        data() {
            return {
                todoText: "" 
            };
        },
        methods: {
            ...mapActions(['addTodo']),
            addTodoI() {
                this.addTodo({
                    id: v1(),
                    title: this.todoText
                });
            }
        }
     }
 </script>

 <style>

</style>