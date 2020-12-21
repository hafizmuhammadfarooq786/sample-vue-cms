<template>
  <v-container class="container">
      <h2>Banner Content</h2>
      <v-flex xs12>
            <div class="meetuptitle text-center">{{loadedBannerContent.tagLine}}</div>
            <div class="meetuptitle text-center">{{loadedBannerContent.description}}</div>
      </v-flex>

<h2>Contact Details</h2>

 <v-flex xs12>
            <div class="meetuptitle text-center">{{loadedContactContent.tagLine}}</div>
            <div class="meetuptitle text-center">{{loadedContactContent.description}}</div>
      </v-flex>

  </v-container>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      info: null
    }
  },
  computed: {
    ...mapGetters(["loadedBannerContent"]),
    ...mapGetters(["loadedContactContent"])
  }
};
</script>

<style scoped>
.container{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.meetuptitle {
  font-weight: 900;
  background: #2196f3a8;
  color: #fff;
  font-size: 2rem;
  padding: 1rem;
}
@media only screen and (min-width: 600px) {
  .leftbtn {
    margin-right: 20px;
  }
}
@media only screen and (max-width: 600px) {
  .primary {
    margin-top: 10px;
  }
}
</style>