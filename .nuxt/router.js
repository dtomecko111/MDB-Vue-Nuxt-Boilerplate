import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26e33ab8 = () => interopDefault(import('../pages/AboutUs.vue' /* webpackChunkName: "pages/AboutUs" */))
const _5984ddfc = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _d3854d78 = () => interopDefault(import('../pages/cp.vue' /* webpackChunkName: "pages/cp" */))
const _1fc459f4 = () => interopDefault(import('../pages/password-reset.vue' /* webpackChunkName: "pages/password-reset" */))
const _2b613a5e = () => interopDefault(import('../pages/RecentPosts.vue' /* webpackChunkName: "pages/RecentPosts" */))
const _3325a53a = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _84dffde4 = () => interopDefault(import('../pages/tst.vue' /* webpackChunkName: "pages/tst" */))
const _52878566 = () => interopDefault(import('../pages/blog/post.vue' /* webpackChunkName: "pages/blog/post" */))
const _29c0121a = () => interopDefault(import('../pages/customer-care/login.vue' /* webpackChunkName: "pages/customer-care/login" */))
const _8dd886a4 = () => interopDefault(import('../pages/state-page/ct.vue' /* webpackChunkName: "pages/state-page/ct" */))
const _781da20f = () => interopDefault(import('../pages/articles/_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _0dd4776e = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _42b05d4b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/AboutUs",
    component: _26e33ab8,
    name: "AboutUs"
  }, {
    path: "/blog",
    component: _5984ddfc,
    name: "blog"
  }, {
    path: "/cp",
    component: _d3854d78,
    name: "cp"
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
    path: "/state-page/ct",
    component: _8dd886a4,
    name: "state-page-ct"
  }, {
    path: "/articles/:slug?",
    component: _781da20f,
    name: "articles-slug"
  }, {
    path: "/categories/:slug?",
    component: _0dd4776e,
    name: "categories-slug"
  }, {
    path: "/",
    component: _42b05d4b,
    name: "index"
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
