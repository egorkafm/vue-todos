<template>
  <div class="todos">
    <div class="newTodo">
      <input v-model="newTodo">
      <button class="newTodoBtn" @click="addTodo">Add todo</button>
    </div>
    <div v-for="(todo, n) in todos" v-bind:key="n">
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
        <div class="todo">{{ todo }}</div>
        <div class="newTodo">
          <button class="newTodoBtn" @click="editTodo">Edit</button>
          <button class="newTodoBtn" @click="removeTodo(n)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: null
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch(e) {
        localStorage.removeItem('todos');
      }
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) {
        return;
      }

      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.saveTodos();
    },
    removeTodo(x) {
      this.todos.splice(x, 1);
      this.saveTodos();
    },
    editTodo () {

      // this.todos.forEach(function(part, index, theArray) {
      //   theArray[index] = "hello world";
      // });
      // this.todos.pop()function() {
      console.log(this.todos)

      this.saveTodos();
    },
    // editTodo () {
    //   this.todo = todo;
    //   this.saveTodos();
    // },
    // updateTask: function(e, name){
    //   e.preventDefault();
    //   todo = e.target.innerText;
    //   e.target.blur();
    // },
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
  }
}
</script>

<style>
.newTodo {
  display: flex;
}
.todo {
  margin-top: 20px;
}
.newTodoBtn {
  width: 100px;
  display: block;
};

</style>
