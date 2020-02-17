export default {
  state: {
    users: []
  },
  mutations: {
    updateUserList: (state, users) => state.users = users
  },
  actions: {
    async fetchUsers(ctx) {
      const res = await fetch("http://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      ctx.commit('updateUserList', users)
    }
  },
  getters: {
    allUsers: state => state.users,
    usersCount: state => state.users.length
  }
}