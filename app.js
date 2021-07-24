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
      localStorage.setItem("gym-vue", JSON.stringify(this.tasks));
    },
    editTask: function (index) {
      this.tasks[index].state = true;
      localStorage.setItem("gym-vue", JSON.stringify(this.tasks));
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
      localStorage.setItem("gym-vue", JSON.stringify(this.tasks));
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
