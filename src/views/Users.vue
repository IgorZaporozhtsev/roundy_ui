<template>
  <v-data-table
    :headers="headers"
    :items="allUsers"
    :search="search"
    :items-per-page="10"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title class="title">Пользователи</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
      <v-icon small @click="deleteItem(item)">delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "users",
  computed: mapGetters(["allUsers", "usersCount"]),
  methods: mapActions(["fetchUsers"]),
  data() {
    return {
      search: "",
      headers: [
        { text: "Имя пользователя", value: "username" },
        { text: "Ф.И.О.", align: "left", value: "name" },
        { text: "Email", value: "email" },
        { text: "Компания", value: "company.name" },
        { text: "Телефон", value: "phone", sortable: false },
        { text: "", value: "action", sortable: false }
      ]
    };
  },
  async mounted() {
    this.fetchUsers();
  }
};
</script>
