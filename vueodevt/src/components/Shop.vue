<template>
<div>
   <input v-model="search" style="width: 35rem;" placeholder="ürün ara.."/>
  <div class="row">
    <div
      class="card"
      style="width: 15rem;"
      v-for="post in searchResult"
      :key="post.id"
    >
      <img :src="post.img" class="card-img-top" :alt="post.title" />
      <div class="card-body">
        <h5><a :href="'/product/' + post.id"> {{post.title}} </a></h5>
        <p class="card-text">$ {{ post.price.toLocaleString() }}</p>
        <button class="btn btn-primary" @click="addItemToCart(post)">
          Sepete ekle
        </button>
        <br><br>
        
        
      </div>
    </div>
  </div>
</div>
</template>

<script>



import { mapActions, mapGetters } from "vuex";

export default {
  name: "Shop",
  mounted() {
    this.getProducts();
  },
  data(){
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(["products"]),
    searchResult(){
      const newAray = []
      this.products.forEach((resp) => {
        if (resp.title.toLowerCase().includes(this.search.toLowerCase())) {
          newAray.push(resp)
        }
      })
      return newAray
    }
  },
  methods: {
    ...mapActions(["addItemToCart", "getProducts"]),
  },
};
</script>

<style scoped>
.card {
  padding: 20px;
  border: none;
}
</style>
