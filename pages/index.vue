<template>
  <div class="container">
    <b-row v-if="products">
      <b-col lg="4" v-for="product in products" :key="product.id">
        <product-item :product="product" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  async mounted() {
    this.products = await this.fetchProducts();
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchAllProducts'
    })
  }
}
</script>
