<template>
  <div class="cart">
    <div v-if="!cart.length" class="alert alert-secondary" role="alert">Sepette ürün yok!</div>
    <div
      v-if="orderPlaced"
      @click="() => this.orderPlaced=false"
      class="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      Sepetiniz onaylandı!
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="post in cart" :key="post.id">
        <button
          @click="removeItemFromCart(post.id)"
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="media">
          <img width="80px" :src="post.img" class="mr-3" alt="post.title" />
          <div class="media-body">
            <p class="mt-0">{{ post.title }}</p>
            <button class="qty-button btn btn-sm btn-secondary" @click="reduceQty(post.id)">-</button>
            x {{ post.qty }}
            <button
              class="qty-button btn btn-sm btn-secondary"
              @click="addQty(post.id)"
            >+</button>
          </div>
        </div>
      </li>
    </ul>
    <button
      v-if="cart.length"
      @click="placeOrder"
      class="checkout-button btn btn-lg btn-block btn-success"
      :disabled="isProcessing"
    >
      <div v-if="isProcessing" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <span v-else>Sipariş ver ($ {{ totalPrice.toLocaleString() }})</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      isProcessing: false,
      orderPlaced: false
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    totalPrice() {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
    }
  },
  methods: {
    ...mapActions(["removeItemFromCart", "addQty", "reduceQty", "emptyCart"]),
    placeOrder() {
      this.isProcessing = true;
      setTimeout(() => {
        this.isProcessing = false;
        this.orderPlaced = true;
        this.emptyCart();
      }, 1000);
    }
  }
};
</script>

<style scoped>
.media {
  width: 90%;
  text-align: left;
}

.qty-button {
  border-radius: 50%;
  width: 30px;
}

.checkout-button {
  margin-top: 20px;
}
</style>