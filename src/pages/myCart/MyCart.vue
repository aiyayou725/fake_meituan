<template>
  <div class="cart">
    <Header title="购物车" edit="true" />
    <CartDetails v-if="isShow" :changeShow="changeShow" />
    <Blank v-else />
    <Footer />
  </div>
</template>

<script>
import CartDetails from './components/CartDetails.vue'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    CartDetails
  },
  setup() {
    const store = useStore()
    let isShow = ref(true)
    const init = () => {
      if(store.state.cartList.length === 0) {
        isShow.value = false
      }
    }

    const changeShow = () => {
      isShow.value = false
    }

    onMounted(() => {
      init()
    }) 
    return {
      isShow,
      changeShow
    }
  }

}
</script>

<style lang="less" scoped>
.cart {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>