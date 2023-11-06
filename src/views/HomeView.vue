<template>
  <div class="maincard">
    <div class="home ">
    <div class="card " style="width: 70%; padding: 50px">
      <h1 style="margin-bottom: 30px"><b>My Todo Application</b></h1>

      <div class="columns">
        <div class="column is-three-fifths">
          <b-field label="ToDo" horizontal>
            <b-input v-model="todo" placeholder="Enter your Todo"></b-input>
          </b-field>
        </div>

        <div class="column is-one-quarter">
          <b-field label="Date Range" horizontal>
            <b-datepicker
              placeholder="Click to select..."
              v-model="dates"
              range
            >
            </b-datepicker>
          </b-field>
        </div>

        <div class="column is-one-fifth">
          <b-button type="is-primary" @click="addToDo">Add to List</b-button>
        </div>
      </div>

      <br />

      <ul>
        <li v-for="(task, index) in todoList" :key="index" class="m-5">
          <div class="card is-flex has-text-centered is-10 listcard"   style="padding: 10px ">
            <div class="card-content">
              <div class="columns">
                <div class=" column is-6 ml-5">
                  <span :style="taskColors[index]" class="column is-flex">
                    <p><b>Task: </b></p>
                    {{ task }} <br>
                    <p class="ml-4"><b>Time Range: </b></p>
                    {{ formatDateTime(dates[0]) }}  to 
                    {{ formatDateTime(dates[1]) }}
                  </span>
                </div>

                <b-field class="ml-5 column is-3">
                  <b-switch
                    v-model="isSwitchedCustom[index]"
                    true-value="Completed"
                    false-value="In Progress"
                    type="is-success"
                    class="column"
                  >
                    {{ isSwitchedCustom[index] }}
                  </b-switch>
                </b-field>

                <b-button
                  type="is-danger ml-5  is-2"
                  @click="clearTask(index)"
                  class="mt-4"
                  >Delete</b-button
                >
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      todo: "",
      todoList: [],
      dates: [],
      isSwitchedCustom: [],
    };
  },
  computed: {
    taskColors() {
      // Generate an array of styles based on isSwitchedCustom values
      return this.isSwitchedCustom.map((value) =>
        value === "Completed" ? "color: red;" : ""
      );
    },
  },
  methods: {
   
    addToDo() {
      if (this.todo.trim() !== "") {
        this.todoList.push(this.todo); // Add the new task to the todoList array
        this.isSwitchedCustom.push("in progress"); // Initialize isSwitchedCustom for the new task
        this.todo = ""; // Clear the input field
      }
    },
    clearTask(index) {
      this.todoList.splice(index, 1); // Remove the task at  the specified index
      this.isSwitchedCustom.splice(index, 1); // Remove the corresponding isSwitchedCustom value
    },

    formatDateTime: function (date) {
      let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}

.maincard{
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  background-position: center;
  height: 98vh;
}

.listcard{
  background-color: rgba(251, 226, 226, 0.645)!important;
}



</style>
