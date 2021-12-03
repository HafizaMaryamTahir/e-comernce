<template>
  <div class="mt-1" >
    <topNav />
<carousel/>
 


<card/> 
 
 <Footer/>
  </div>
</template>

<script>

import topNav from  "../components/topNav.vue"
import carousel from  "../components/carousel.vue"

import Footer from  "../components/footer.vue"
import card from  "../components/card.vue"




export default {
 
  components: {

    topNav,
    carousel,
    Footer,
    card,
  
  }
}
</script>
