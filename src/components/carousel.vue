<template>
  
   <v-main>
      <v-container>
        <v-row>
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

        </v-row>
      </v-container>
    </v-main> 
 
</template>
<script>


export default {

  name: "carousel",
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
  },

}
</script>