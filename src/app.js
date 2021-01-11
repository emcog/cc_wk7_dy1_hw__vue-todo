import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            tasks: [
                { name: "Make it simple", isHigh: true, isDone: false },
                { name: "Keep on task", isHigh: false, isDone: true }
            ],
        newTask:""
        },
        methods: {
            saveNewTask: function() {
                this.tasks.push({name: this.newTask, isHigh: this.newTask, isDone: false });
                this.newTask = "";
            },
            taskDone: function(index){
                this.tasks[index].isDone = true;
            }
        }
    });
});
    

