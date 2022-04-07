<template>
  <article class="product">
    <div class="featured-image" v-if="product.images.length > 0">
      <img :src="product.images[0].src" :alt="product.images[0].alt">
    </div>
    <div class="product-content">
      <!--<pre v-html="product"></pre>-->
      <h4 v-html="product.title"></h4>
      <button class="button button-primary" @click="addToCart">Add to cart</button>
    </div>
  </article>
</template>
<script>
import {mapActions} from "vuex";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    ...mapActions({
      addLineItems: 'cart/addLineItems'
    }),
    async addToCart() {
      console.log(this.product);
      await this.addLineItems({
        variantId: this.product.variants[0].id,
        quantity: 1
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  background: #f4f4f4;

  .product-content {
    padding: 20px;
  }

  .featured-image {
    padding-top: 120%;
    position: relative;
  }

  img {
    position: absolute;
    top: 0px; left: 0px; bottom: 0px; right: 0px;
    object-fit: cover;
    height: 100%;
    max-width: 100%;
  }
}
</style>
