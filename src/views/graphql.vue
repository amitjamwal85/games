<template>
  <div>
    <h3>Apollo GraphQL</h3>
    <input type="number" v-model="count" min="1" max="20" />
    <ul v-for="contact in contacts" :key="contact.id">
      <li>{{ contact.name }} {{ contact.email }}</li>
    </ul>

    <!--<ApolloQuery :query="require('../graphql/contacts.gql')" :variables="{count}" >-->
    <!--<template v-slot="{ result: { loading, error, data } }">-->
    <!--<div v-if="data">-->
    <!--<ul v-for="contact in data.contacts" :key="contact.id">-->
    <!--<li>{{ contact.name }} {{ contact.email }}</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</template>-->
    <!--</ApolloQuery>-->

    <!--<ApolloMutation :mutation="require('../graphql/login.gql')" :variables="{username, password}" @done="onDone">-->
    <!--<template v-slot="{mutate,  error}">-->
    <!--<form v-on:submit.prevent="mutate()">-->
    <!--<label>Email</label>-->
    <!--<input type="text" v-model="username" />-->
    <!--<label>Password</label>-->
    <!--<input type="text" v-model="password" />-->
    <!--<button>Submit</button>-->
    <!--<p v-if="error">An error occurred: {{ error }}</p>-->
    <!--</form>-->
    <!--</template>-->
    <!--</ApolloMutation>-->
    <form v-on:submit.prevent="signin()">
      <label>Email</label>
      <input type="text" v-model="username" />
      <label>Password</label>
      <input type="text" v-model="password" />
      <button>Submit</button>
    </form>

    {{ token }}
  </div>
</template>

<script>
import gql from "graphql-tag";
import login from "../graphql/login.gql";
export default {
  name: "graphql",

  data() {
    return {
      count: 5,
      username: "amit",
      password: "amit@123",
      token: ""
    };
  },

  methods: {
    // onDone(val){
    //     console.log(val);
    //     this.token = val.data ;
    // }

    signin() {
      const username = this.username;
      const password = this.password;
      this.$apollo
        .mutate({
          mutation: login,
          variables: {
            username,
            password
          }
        })
        .then(data => {
          this.token = data.data.tokenAuth.token;
          console.log(data);
        })
        .catch(error => {
          this.token = error.graphQLErrors[0].message;
          console.log("error:", error.graphQLErrors[0].message);
        });
    }
  },

  apollo: {
    contacts: {
      query: gql`
        query contacts($first: Int!) {
          contacts(first: $first) {
            id
            name
            email
          }
        }
      `,
      variables() {
        return {
          first: this.count
        };
      }
    }
  }
};
</script>

<style scoped></style>
