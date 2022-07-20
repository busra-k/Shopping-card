<template>
<div class="card" >
    <div
      style="width: 15rem;"
      v-for="post in products"
      :key="post.id"
    >
    <div v-if="post.id === get">
      <img :src="post.img" class="center" :alt="post.title" />
      <div class="card-body">
        <h5>{{post.title}}</h5>
        <p class="card-text">$ {{ post.price.toLocaleString() }}</p>
        <h6>{{post.Description}}</h6>
        <button class="btn btn-primary" @click="addItemToCart(post)">
          Sepete ekle
        </button>
      </div> 
        
      </div>
    </div>
  </div>


</template>
<script>
import { mapActions, mapGetters } from "vuex";


export default {
    
    
     props: [
    'products'
  ],
  mounted() {
    this.getProducts();
  },
 
  computed: {
    get () {
        
        return this.$route.params.id
    },
    ...mapGetters(["products"]),


  },
  methods: {
    ...mapActions(["addItemToCart", "getProducts"]),
  },
  
}
</script> 
<style>


.card {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 123%;
}

.price {
  color: grey;
  font-size: 22px;
}
</style>