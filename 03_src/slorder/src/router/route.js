import HomeView from '@/views/LoginView.vue'
import OrderListView from '@/views/order/OrderListView.vue'

export default [
  {
    path: '/',
    name: 'login',
    component: HomeView
  },
  {
    path: '/order/list',
    name: 'orderList',
    component: OrderListView
  }
]