<template>
  <div class="footer">
    <div class="item">
      <router-link to="/home" class="nav-item" active-class="nav-color">
        <van-icon name="wap-home-o" size="25" />
        首页
      </router-link>
    </div>
    <div class="item">
      <router-link to="/cart" class="nav-item" active-class="nav-color">
        <van-icon name="cart-o" size="25" />
        购物车
      </router-link>
    </div>
    <div class="item">
      <router-link to="/order" class="nav-item" active-class="nav-color">
        <van-icon name="label-o" size="25" />
        订单
      </router-link>
    </div>
    <div class="item">
      <router-link to="/mine" class="nav-item" active-class="nav-color">
        <van-icon name="user-circle-o" size="25" />
        我的
        </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang = "less" scoped>
.footer {
  display: flex;
  font-size: 12px;
  background-color: #fff;
  border-top: 0.5px solid #eee;
  padding: 3px;
  .item {
    flex: 1;
    .nav-color {
      color: #ffcc53;
    }
    .nav-item {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }
}


</style>