const strapiBaseUri = process.env.API_URL || "https://cvstrapi.cve.so";

export default {
  target: "static",
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://www.boxcarcreative.com/clients/clearview/20-CLV-WEBSITE/css/style.css?v=1.1.1",
      },
      {
        rel: "stylesheet",
        href: "https://www.boxcarcreative.com/clients/clearview/20-CLV-WEBSITE/css/MegaMenu.css",
      },
      {
        rel: "stylesheet",
        href: "https://www.boxcarcreative.com/clients/clearview/20-CLV-WEBSITE/css/custom.MegaMenu.css",
      }

      
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [{ src: "~/plugins/uikit.js", ssr: false }],
 modules: ["@nuxtjs/markdownit", "@nuxtjs/strapi",'mdbvue/nuxt'],
 strapi: {
   url: strapiBaseUri,
   entities: [
     {
       name: "articles",
       type: "collection",
     },
     {
       name: "categories",
       type: "collection",
     },
     {
       name: "homepage",
       type: "single",
     },
     {
       name: "global",
       type: "single",
     },
   ],
 },
 markdownit: {
   preset: "default",
   linkify: true,
   breaks: true,
   injected: true,
   html: true,
 },
 
   /*
  ** MDB Vue module:
  */
  mdbvue: {
     icons: true,
     roboto: false,
     css: false,
     bootstrap: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
