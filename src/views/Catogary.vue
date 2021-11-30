<template>
  <div>
    <v-row>
        <v-col 
           sm="3" 
            md="3"
            v-for="(CatogaryName, index) in Catogary" :key="index"
                > 
                <v-btn @click="fetchdata(CatogaryName)">{{CatogaryName}}</v-btn>
         </v-col>
    </v-row>



             <v-card
    
    class="mx-auto my-2"
    max-width="374"
    v-for="data in getCat"
   :key="data.id"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
    :src="data.image"
    ></v-img>

    <v-card-title> {{ data.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
         ${{ data.price }}
        </div>
        <!-- <div>{{ item.description }}</div> -->
      </v-row>

      <div class="my-4 text-subtitle-1">
      
      </div>

      <div></div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-blue lighten-2"
        text
     
      >
        Add to cart
      </v-btn>
      <v-btn
        color="deep-blue lighten-2"
        text
       
      >
        See details
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import {mapState,mapGetters,} from 'vuex'
export default {
    methods:{
         fetchdata(apiId) {
             console.log(apiId);
      this.$store.dispatch("apiCall", apiId);
      },
    },
       mounted(){
     this.$store.dispatch('loadCatogary')
    },
    computed:{
        ...mapState(['products' ]),
        ...mapState(['Catogary']),
        ...mapGetters(['getCat']),
       
    }

}
</script>

<style>

</style>