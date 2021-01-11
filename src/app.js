import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            tasks: [
                { name: "Make it simple", isDone: false },
                { name: "Keep on task", isDone: true }
            ],
        newTask:""
        },
        methods: {
            saveNewTask: function() {
                this.tasks.push({name: this.newTask, isDone: false });
                this.newTask = "";
            },
            taskDone: function(index){
                this.tasks[index].isDone = true;
            }
        }
    });
});
    

