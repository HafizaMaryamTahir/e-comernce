<template>
<div >

    <v-app-bar  style="background-color:#5C6BC0"  >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Exponentshop</v-app-bar-title>
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>

        <v-btn text>
          <v-icon small left>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn text>
          <v-icon small left>mdi-basket</v-icon>
            all  Categorys
        </v-btn>
        <v-btn text>
          <v-icon small left>mdi-cart</v-icon>
          Cart
        </v-btn>
        <v-btn to="/updateProfile" text>
          <v-icon small left>mdi-account</v-icon>
          update profile
        </v-btn>
        <v-btn text @click="lout()">
          <v-icon small left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-container>
    </v-app-bar>
</div>
</template>

<script>
import { mapState } from "vuex";


export default {
  name: "topNav",
  
  methods:{
    fetchdata(apiId) {
    this.$store.dispatch("apiCall", apiId);
      this.$router.push({name:'Catogary'});

    },
    lout(){
      localStorage.setItem("currentUser","");
      this.$router.push({name:"signup"});
    }

  },

  mounted() {
    this.$store.dispatch("loadPosts");
     this.$store.dispatch('loadCatogary')
  },
  computed: {
    ...mapState(["posts"]),
    ...mapState(['Catogary']),
  },
};
</script>