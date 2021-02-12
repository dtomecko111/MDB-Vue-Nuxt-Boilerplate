import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e269ef1 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _5984ddfc = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _d3854d78 = () => interopDefault(import('../pages/cp.vue' /* webpackChunkName: "pages/cp" */))
const _4055c890 = () => interopDefault(import('../pages/customer/index.vue' /* webpackChunkName: "pages/customer/index" */))
const _1fc459f4 = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _2b613a5e = () => interopDefault(import('../pages/RecentPosts.vue' /* webpackChunkName: "pages/RecentPosts" */))
const _3325a53a = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _e2f15aa6 = () => interopDefault(import('../pages/shop-plans/index.vue' /* webpackChunkName: "pages/shop-plans/index" */))
const _84dffde4 = () => interopDefault(import('../pages/tst.vue' /* webpackChunkName: "pages/tst" */))
const _52878566 = () => interopDefault(import('../pages/blog/post.vue' /* webpackChunkName: "pages/blog/post" */))
const _29c0121a = () => interopDefault(import('../pages/customer-care/login.vue' /* webpackChunkName: "pages/customer-care/login" */))
const _617e3c13 = () => interopDefault(import('../pages/customer/account.vue' /* webpackChunkName: "pages/customer/account" */))
const _152aab97 = () => interopDefault(import('../pages/customer/complete-contracts.vue' /* webpackChunkName: "pages/customer/complete-contracts" */))
const _501eae07 = () => interopDefault(import('../pages/customer/contracts.vue' /* webpackChunkName: "pages/customer/contracts" */))
const _65aae8c4 = () => interopDefault(import('../pages/customer/documents.vue' /* webpackChunkName: "pages/customer/documents" */))
const _77170c7e = () => interopDefault(import('../pages/customer/refer-a-friend.vue' /* webpackChunkName: "pages/customer/refer-a-friend" */))
const _8dd886a4 = () => interopDefault(import('../pages/state-page/ct.vue' /* webpackChunkName: "pages/state-page/ct" */))
const _04858770 = () => interopDefault(import('../pages/about-us/_slug.vue' /* webpackChunkName: "pages/about-us/_slug" */))
const _781da20f = () => interopDefault(import('../pages/articles/_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _0dd4776e = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _1fc1b294 = () => interopDefault(import('../pages/customer-care/_slug.vue' /* webpackChunkName: "pages/customer-care/_slug" */))
const _42b05d4b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _40f9bc03 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _0e269ef1,
    name: "404"
  }, {
    path: "/blog",
    component: _5984ddfc,
    name: "blog"
  }, {
    path: "/cp",
    component: _d3854d78,
    name: "cp"
  }, {
    path: "/customer",
    component: _4055c890,
    name: "customer"
  }, {
    path: "/password-reset",
    component: _1fc459f4,
    name: "password-reset"
  }, {
    path: "/RecentPosts",
    component: _2b613a5e,
    name: "RecentPosts"
  }, {
    path: "/register",
    component: _3325a53a,
    name: "register"
  }, {
    path: "/shop-plans",
    component: _e2f15aa6,
    name: "shop-plans"
  }, {
    path: "/tst",
    component: _84dffde4,
    name: "tst"
  }, {
    path: "/blog/post",
    component: _52878566,
    name: "blog-post"
  }, {
    path: "/customer-care/login",
    component: _29c0121a,
    name: "customer-care-login"
  }, {
    path: "/customer/account",
    component: _617e3c13,
    name: "customer-account"
  }, {
    path: "/customer/complete-contracts",
    component: _152aab97,
    name: "customer-complete-contracts"
  }, {
    path: "/customer/contracts",
    component: _501eae07,
    name: "customer-contracts"
  }, {
    path: "/customer/documents",
    component: _65aae8c4,
    name: "customer-documents"
  }, {
    path: "/customer/refer-a-friend",
    component: _77170c7e,
    name: "customer-refer-a-friend"
  }, {
    path: "/state-page/ct",
    component: _8dd886a4,
    name: "state-page-ct"
  }, {
    path: "/about-us/:slug?",
    component: _04858770,
    name: "about-us-slug"
  }, {
    path: "/articles/:slug?",
    component: _781da20f,
    name: "articles-slug"
  }, {
    path: "/categories/:slug?",
    component: _0dd4776e,
    name: "categories-slug"
  }, {
    path: "/customer-care/:slug",
    component: _1fc1b294,
    name: "customer-care-slug"
  }, {
    path: "/",
    component: _42b05d4b,
    name: "index"
  }, {
    path: "/:slug",
    component: _40f9bc03,
    name: "slug"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
