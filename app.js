const app = new Vue({
  el: "#app",
  data: {
    title: "GYM com Vue",
    tasks: [],
    newTask: "",
  },
  methods: {
    addTask: function () {
      this.tasks.push({
        name: this.newTask,
        state: false,
      });
      this.newTask = "";
    },
    editTask: function (index) {
      this.tasks[index].state = true;
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
  },
  created: function () {
    let dateDB = JSON.parse(localStorage.getItem("gym-vue"));
    if (dateDB === null) {
      this.tasks = [];
    } else {
      this.tasks = dateDB;
    }
  },
});
