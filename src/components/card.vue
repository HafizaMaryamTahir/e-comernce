<template>
  <v-app>
<!-- ************************************************ -->
     <v-row>
        <v-col
         style="background-color:#5C6BC0" 
          v-for="(CatogaryName, index) in Catogary"
          :key="index"
        >


          <v-list-item v-if="index === 0"  @click="viewAllProduct">View All</v-list-item>

              <v-list-item @click="fetchdata(CatogaryName)">{{
            CatogaryName
          }}</v-list-item>
        </v-col>
      </v-row>

<!-- ************************************************ -->

    <v-container>

   <!-- ***************** categories products************************* -->
       <v-row>
        <v-col
        
          v-for="(item, index) in getCat"
          :key="index"
          cols="12"
          sm="12"
          lg="4"
          xl="4"
        >
          <v-card class="ma-5" max-width="350">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="item.image"></v-img>

            <v-card-title> {{ item.title }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">${{ item.price }}</div>
                <!-- <div>{{ item.description }}</div> -->
              </v-row>

              <div class="my-4 text-subtitle-1"></div>

              <div></div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-blue lighten-2" text @click="addcart(item.id)" > Add to cart </v-btn>
              <v-btn color="deep-blue lighten-2" text> See details </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>


      <!-- ******************* all products card  ********************* -->
      <v-row v-if="cardStatus" >
        <v-col

          v-for="(item, index) in posts"
          :key="index"
          cols="12"
          sm="12"
          lg="4"
          xl="4"
        >
          <v-card class="ma-5" max-width="350">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="item.image"></v-img>

            <v-card-title> {{ item.title }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">${{ item.price }}</div>
                <!-- <div>{{ item.description }}</div> -->
              </v-row>

              <div class="my-4 text-subtitle-1"></div>

              <div></div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-blue lighten-2" text> Add to cart </v-btn>
              <v-btn color="deep-blue lighten-2" text> See details </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
   
    </v-container>
  </v-app>
</template>


<script>
import { mapState, mapGetters } from "vuex";

export default {
  data(){
    return{
      cardStatus: true,
    }
  },
  methods: {
    fetchdata(apiId) {
      this.cardStatus = false;
      this.$store.dispatch("apiCall", apiId);
     
    },
       addcart(apiId){

        this.snackbar=true;
      this.$$store.dispatch("Add",apiId)
      },
   
    viewAllProduct(){
       
        this.$store.dispatch("loadPosts");
    },
   
  },
  computed: {
    ...mapState(["posts"]),
    ...mapState(["Catogary"]),   
     ...mapGetters(["getCat"]),
     ...mapState(["cart"]),
     ...mapGetters(["cart"])
  },
};
</script>

<style>
</style>