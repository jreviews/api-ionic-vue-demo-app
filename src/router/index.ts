import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/stores';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/widgets'  
  },
 {
    path: '/listings/:id',
    name: 'listings.show',
    component: () => import('../views/ListingDetailPage.vue'),
    props: route => ({ id: route.params.id })
  },
  {
    path: '/my-favorites',
    name: 'my-favorites',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/ListingsPage.vue'),
    props: () => ({ me: 'favorites' })
  },
  {
    path: '/my-listings',
    name: 'my-listings',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/ListingsPage.vue'),
    props: () => ({ me: 'listings' })
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      guestsOnly: true
    },
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/AccountPage.vue'),
  },
  {
    path: '/tabs/',
    component: () => import('@/components/TabsNavigation.vue'),
    children: [
      {
        path: '',
        redirect: '/tabs/widgets',
      },
      {
        path: 'widgets',
        component: () => import('../views/HomePage.vue'),
      },
      {
        name: 'hotels',
        path: 'hotels',
        component: () => import('../views/ListingsPage.vue'),
        props: () => ({ query: { sort: "created", cat: 23, heading: "Hotels" } })
      },
      {
        name: 'restaurants',
        path: 'restaurants',
        component: () => import('../views/ListingsPage.vue'),
        props: () => ({ query: { sort: "created", cat: 24, heading: "Restaurants" } })
      },
      {
        name: 'galleries',
        path: 'galleries',
        component: () => import('../views/ListingsPage.vue'),
        props: () => ({ query: { sort: "created", cat: 26, heading: "Galleries" } })
      },
    ],
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && ! authStore.isLoggedIn()) {
    return {
      path: '/login',
    }
  }

  if (to.meta.guestsOnly && authStore.isLoggedIn()) {
    return {
      path: '/account',
    }
  }
})

export default router
