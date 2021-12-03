<template>
  <div>
    <div v-for="(data, index) in getCart" :key="index">
      <p>
        {{ data.title }}
      </p>
      <img :src="data.image" alt="" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default { computed: { ...mapGetters(["getCart"]) } };
</script>
