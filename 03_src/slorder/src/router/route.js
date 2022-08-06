import LoginView from '@/views/LoginView.vue'
import OrderListView from '@/views/order/OrderListView.vue'
import HomeView from '@/views/HomeView.vue'
import OrderEditView from '@/views/order/OrderEditView.vue'

export default [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/order/list',
    name: 'orderList',
    component: OrderListView
  },
  {
    path: '/order/edit',
    name: 'orderEdit',
    component: OrderEditView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
]