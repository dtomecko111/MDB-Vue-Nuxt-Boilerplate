import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26e33ab8 = () => interopDefault(import('../pages/AboutUs.vue' /* webpackChunkName: "pages/AboutUs" */))
const _d3854d78 = () => interopDefault(import('../pages/cp.vue' /* webpackChunkName: "pages/cp" */))
const _2b613a5e = () => interopDefault(import('../pages/RecentPosts.vue' /* webpackChunkName: "pages/RecentPosts" */))
const _84dffde4 = () => interopDefault(import('../pages/tst.vue' /* webpackChunkName: "pages/tst" */))
const _52878566 = () => interopDefault(import('../pages/blog/post.vue' /* webpackChunkName: "pages/blog/post" */))
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
    path: "/cp",
    component: _d3854d78,
    name: "cp"
  }, {
    path: "/RecentPosts",
    component: _2b613a5e,
    name: "RecentPosts"
  }, {
    path: "/tst",
    component: _84dffde4,
    name: "tst"
  }, {
    path: "/blog/post",
    component: _52878566,
    name: "blog-post"
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
