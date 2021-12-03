<template>
    <div class="background">
  
    <v-main class=" mt-16 mb-16">
      <v-col cols="10" lg="4" class="">
        <v-card class=" d-flex justify-center align-center  pa-16">
          
            <h2 class="black--text">Login</h2>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="user.email"
                :rules="emailRule"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                      v-model="user.password"
                      :rules="passwordRule"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      placeholder="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
              <v-switch label="Remember me" color="blue-grey darken-1"></v-switch>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="blue-grey darken-1" @click="home()">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar top color="red" v-model="snackbar">
      Please Enter Correct Email or Password
    </v-snackbar>
  
    </div>
</template>

<script>
import {
        emailRule,
        passwordRule, } from '../views/validation';

export default {
  name: 'Login',

  data: () => ({
    emailRule: emailRule,
    passwordRule:passwordRule,
    loading:false,
    snackbar:false,
    passwordShow:false,
    user :{
       email: "",
    password: "",
    }
    
   
  }),
  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
          this.loading = true
        setTimeout(()=> {
          this.loading = false
          this.snackbar = true

        const keys = Object.keys(localStorage);
        for (let key of keys) {
          console.log(this.user.email);
          if (this.user.email === key) {
            if (
              this.user.password === JSON.parse(localStorage.getItem(key)).password
            ) {
              localStorage.setItem("currentUser", this.user.email);
              this.$router.push({ name: "Home" });
            }
          }
        }
         
         
        
        })
      }
      // this.$router.push({name:"Home"})
    }
  }
};
</script>
<style >
  .background{
  
background: url("https://media.istockphoto.com/photos/shopping-online-concept-shopping-service-on-the-online-web-with-by-picture-id1133980246?k=20&m=1133980246&s=612x612&w=0&h=bwut2YUV7gtnjrv354523xU_9S-TtKQOqGTdiGMsPfs=");
 background-repeat: no-repeat;
 background-size: cover;
 height: 100vh;
 display: flex;
 /* flex-direction: row; */
 align-items: center;
 justify-content: center;
 margin: 0 auto;

  }
</style>