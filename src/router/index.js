import { createRouter, createWebHistory } from 'vue-router'

const Found = () => import('../views/Found/Found')
const Live = () => import('../views/Live/Live')
const MyMusic = () => import('../views/MyMusic/MyMusic')
const SingSong = () => import('../views/SingSong/SingSong')
const CloudVia = () => import('../views/CloudVia/CloudVia')

const routes = [
  {
    path:'',
    redirect:'/found'
  },
  {
    path: '/found',
    component: Found
  },
  {
    path: '/live',
    component: Live
  },
  {
    path: '/mymusic',
    component: MyMusic
  },
  {
    path: '/cloudvia',
    component: CloudVia
  },
  {
    path: '/singsong',
    component: SingSong
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
