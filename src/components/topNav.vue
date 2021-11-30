<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo lighten-1" >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Exponent shop </v-app-bar-title>
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>

        <v-btn text>
          <v-icon small left>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn to="/Products" text>
          <v-icon small left>mdi-basket</v-icon>
          Categorys
        </v-btn>
        <v-btn text>
          <v-icon small left>mdi-cart</v-icon>
          Cart
        </v-btn>
        <v-btn to="/updateProfile" text>
          <v-icon small left>mdi-account</v-icon>
          update profile
        </v-btn>
        <v-btn text>
          <v-icon small left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container > 
         
        <v-row   > 
        
          <v-col>
            <v-sheet min-height="70vh" rounded="lg" max-width="500vh">
              <v-carousel>
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>
          
    <v-divider class="my-5"></v-divider>
            <v-col 
           sm="3" 
            md="3"
             class="indigo lighten-1"
            v-for="(CatogaryName, index) in Catogary" :key="index"
                > 
                <v-list-item  @click="fetchdata(CatogaryName)">{{CatogaryName}}</v-list-item>
         </v-col>
       
        </v-row>
       
          
          
           
        
      </v-container>
    </v-main>
        <v-divider class="my-5"></v-divider>
    <!-- cards ---------------------------------------------------------------------->
    <v-container>
      <v-row>
        <v-card
          
          class="mx-auto my-2"
          max-width="374"
          v-for="(item, index) in posts"
          :key="index"
        >
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
            <v-btn color="deep-blue lighten-2" text @click="reserve">
              Add to cart
            </v-btn>
            <v-btn color="deep-blue lighten-2" text @click="reserve">
              See details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-divider class="my-5"></v-divider>

    <Footer />
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Footer from "./footer.vue";

export default {
  components: {
    Footer,
  },
  name: "topNav",
  data() {
    return {
      items: [
        {
          src: "https://i0.wp.com/www.pinti.co.uk/assets/frontend/images/home/slider-2.jpg",
        },
        {
          src: "https://ca.khaadi.com/media/wysiwyg/khaadicadesktopbanner16112020.jpg",
        },
        {
          src: "https://cdn.shopify.com/s/files/1/2459/1583/files/Collage-Web-Banner-1980x850.jpg?v=1633346995",
        },
        {
          src: "https://cdn.shopify.com/s/files/1/2290/7887/files/1920_x_900_main_banners_M_48e1e251-d153-49c9-835f-2c89559d501e.jpg?v=1638162175",
        }
      ],
    };
  },methods:{
    fetchdata(apiId) {

      //  alert(apiId);

      this.$store.dispatch("apiCall", apiId);
      this.$router.push({name:'Catogary'});

    },

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