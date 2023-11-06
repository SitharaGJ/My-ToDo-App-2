<template>
  <div>
    
 <br> <hr>

    <b-table
          :data="data">

        <b-table-column field="id" label="ID" width="40" sortable numeric v-slot="props" sticky>
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="email" label="Email" sortable v-slot="props" width="200">
          {{ props.row.email }}
        </b-table-column>

        <b-table-column field="first_name" label="First Name" sortable v-slot="props" width="200">
          {{ props.row.first_name }}
        </b-table-column>

        <b-table-column field="last_name" label="Last Name" sortable v-slot="props" width="200">
          {{ props.row.last_name }}
        </b-table-column>
      </b-table>

 <hr>
  </div>
</template>
<script>
//https://reqres.in/api/users?page=2
import axios from "axios";
export default {
  name : "AboutView",
  data(){
    return{
      data:[]
    }
  },

  mounted() {
    this.fetchData();
  },

  methods:{
    fetchData(){
      axios.get('https://reqres.in/api/users?page=2')
        .then(response => {
          this.data = response.data.data;
        })
       
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
};
</script>
<style></style>
