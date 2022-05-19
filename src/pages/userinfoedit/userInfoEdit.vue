<template>
  <Header title="账号管理" />
  <div class="input-item">
  <!-- 输入任意文本 -->
  <van-field v-model="nickname" label="昵称" placeholder="请输入昵称" />
  <van-field v-model="introduceSign" label="个性签名" />
  <!-- 输入密码 -->
  <van-field v-model="password" type="password" label="修改密码" placeholder="请输入密码" />
</div>
<div style="margin: 40px">
        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="btn"
          @click="save"
        >
          保存
        </van-button>
        <van-button
          round
          block
          color="#ffc400"
          class="btn"
          @click="logout"
        >
          退出登录
        </van-button>
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
      nickname: '',
      password: '',
      introduceSign: "你好吗？我很好~"
      
    })

    // 保存
    const save = () => {
      if(data.nickname && data.password) {
        const userInfo = JSON.parse(localStorage.userInfo)
        const newuserInfo = {
          用户名: data.nickname || userInfo['用户名'],
          密码: data.password || userInfo['密码']
        }
        localStorage.setItem('userInfo', JSON.stringify(newuserInfo))
        Toast('修改成功')
        router.push('/mine')
      } else {
        Toast('请输入要修改的内容')
      }
    }
    // 退出登录
    const logout = () => {
      localStorage.removeItem("isLogin")
      Toast('已退出登录')
      router.push('/login')

    }
    return {
      ...toRefs(data),
      save,
      logout
    }
  }

}
</script>

<style lang="less" scoped>
.btn {
  height: 40px;
  margin-top: 20px;
}

</style>