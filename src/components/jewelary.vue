<template>
     <v-container>
    <v-row>
     
           <v-card
    :loading="loading"
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

    <v-img
      height="250"
    :src="item.image"
    ></v-img>

    <v-card-title> {{ item.title }}</v-card-title>

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
         ${{ item.price }}
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
        @click="reserve"
      >
        Add to cart
      </v-btn>
      <v-btn
        color="deep-blue lighten-2"
        text
        @click="reserve"
      >
        See details
      </v-btn>
    </v-card-actions>
  </v-card>
  
    
    </v-row>
    </v-container>
</template>