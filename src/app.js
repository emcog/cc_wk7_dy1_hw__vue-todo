import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "app",
        data: {
            todos: [
                {name: "Make it simple", isDone: false },
                {name: "Keep on task", isDone: false }
            ],
        newTodo:""
        },
        methods: {
            saveNewTodo: function() {
                this.todos.push({name: this.newTodo, isDone: false });
                this.newTodo = "";
            },
            done: function(index){
                this.todos[index].isDone = true;
            }
        }
    });
});
    

