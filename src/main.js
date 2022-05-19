import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import {
  Button,
  Icon,
  Tab,
  Tabs,
  TreeSelect,
  Stepper,
  ActionBarButton,
  ActionBarIcon,
  ActionBar,
  Toast,
  Checkbox,
  SubmitBar,
  ContactCard,
  Card,
  Dialog,
  AddressList,
  AddressEdit,
  Form,
  Field,
  CellGroup,
  CheckboxGroup } from 'vant'
import router from './router/index'
import './common/css/base.less'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Blank from './components/Blank.vue'
import store from './store/index.js'


const app = createApp(App)
app
  .use(Button)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(TreeSelect)
  .use(Stepper)
  .use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(SubmitBar)
  .use(Card)
  .use(Dialog)
  .use(ContactCard)
  .use(AddressList)
  .use(AddressEdit)
  .use(Form)
  .use(Field)
  .use(CellGroup);
  


app.use(router)
app.use(store)
app.mount('#app')

app.component('Footer', Footer)
app.component('Header', Header)
app.component('Blank', Blank)



