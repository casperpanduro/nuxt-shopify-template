export const state = () => ({
  items: [],
  discount: [],
  checkout: null
});

export const actions = {
  async addLineItems({commit, dispatch, state}, lineItem) {
    await dispatch('createCheckout');
    console.log("state.checkout.id", state.checkout.id);
    this.$shopify.checkout.addLineItems(state.checkout.id, lineItem).then((checkout) => {
      commit('UPDATE_CHECKOUT', checkout);
    }).catch((e) => {
      console.log(e);
    });

  },
  async createCheckout({commit, state}) {
    if (state.checkout) {
      return state.checkout;
    }

    await this.$shopify.checkout.create().then((checkout) => {
      // Do something with the checkout
      commit('UPDATE_CHECKOUT', checkout);

    }).catch((e) => {
      console.log(e);
    });
  }
}

export const mutations = {
  UPDATE_CHECKOUT(state, checkout) {
    console.log("checkout updated", checkout);
    state.checkout = checkout;
  }

}
