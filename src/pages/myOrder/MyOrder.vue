<template>
  <div class="order">
    <Header title="订单" />
    <div class="content">
      <van-tabs color="#ffc400">
        <van-tab v-for="i,index in navData"  :key="index" :title="i"> 
          <div v-if="i === '全部' && store.state.orderListed.length">
            <div v-for="(item, index) in store.state.orderListed" :key="index">
              <van-card
              :num="item.num"
              :price="item.price"
              :title="item.title"
              :thumb="item.pic"
            />
          </div>
        </div>
        <Blank v-else />
      </van-tab>
      </van-tabs>
    </div>
    <Footer />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    let data = reactive({
      navData: ["全部", "交易完成", "待付款", "待发货", "已发货"],
    });

    return {
      ...toRefs(data),
      store,
    };
  },
};
</script>

<style lang='less' scoped>
.order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>