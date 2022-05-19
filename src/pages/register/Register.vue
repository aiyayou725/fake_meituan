<template>
<div class="login">
  <Header title="注册" />
  <div class="img">
    <img src="../../assets/mtlogo.jpg" />
  </div>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" color="#ffd102">
      注册
    </van-button>
    <van-button round block type="info" color="#ffd102" class="register" @click="toLogin">
      已有账号去登录
    </van-button>
  </div>
</van-form>
</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    let data = reactive({
      username: '',
      password: '',
    })

  // 注册
  const register = (value) => {
    Toast('注册成功')
    localStorage.setItem('userInfo', JSON.stringify(value))
    router.push('./login')
  }

    // 提交
    const onSubmit = (value) => {
      if(localStorage.userInfo) {
        let userInfo = JSON.parse(localStorage.userInfo)
        if(userInfo['用户名'] === value['用户名']) {
          Toast('该账号已存在')
        } else {
          register(value)
        }
      } else {
        register(value)
      }    
    }

    // 去登录
    const toLogin = () => {
      router.push('./login')
    }

    return {
      ...toRefs(data),
      onSubmit,
      toLogin
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #fff;
    margin: 20px auto;
    img {
      width:100%;
      border-radius: 40px;
    }
  }
  .register {
    margin-top: 20px;
  }
}

</style>