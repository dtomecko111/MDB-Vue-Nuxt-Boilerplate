(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{378:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n(65),n(50);function r(e){return e.startsWith("/")?"".concat(t.env.strapiBaseUri).concat(e):e}}).call(this,n(202))},379:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(378);function j(t){var e=[];if(t.metaTitle&&e.push({property:"og:title",content:t.metaTitle},{name:"twitter:title",content:t.metaTitle}),t.metaDescription&&e.push({name:"description",content:t.metaDescription},{property:"og:description",content:t.metaDescription},{name:"twitter:description",content:t.metaDescription}),t.shareImage){var n=Object(r.a)(t.shareImage.url);e.push({name:"image",content:n},{property:"og:image",content:n},{name:"twitter:image",content:n})}return t.article&&e.push({property:"og:type",content:"article"}),e.push({name:"twitter:card",content:"summary_large_image"}),e}},381:function(t,e,n){"use strict";(function(t){n(204),n(205),n(203);var r=n(26),j=(n(34),n(2)),c=n(377),o=n.n(c),l=n(378),m=n(379);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={asyncData:function(t){return Object(j.a)(regeneratorRuntime.mark((function e(){var n,r,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$strapi,r=t.params,e.next=3,n.find("articles",{slug:r.slug});case 3:return j=e.sent,e.t0=j[0],e.next=7,n.find("global");case 7:return e.t1=e.sent,e.abrupt("return",{article:e.t0,global:e.t1});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{apiUrl:t.env.strapiBaseUri}},methods:{moment:o.a,getStrapiMedia:l.a},head:function(){var t=this.global,e=t.defaultSeo,n=t.favicon,r=t.siteName,j=f(f({},e),{},{metaTitle:this.article.title,metaDescription:this.article.description,shareImage:this.article.image});return{titleTemplate:"%s | ".concat(r),title:j.metaTitle,meta:Object(m.a)(j),link:[{rel:"favicon",href:Object(l.a)(n.url)}]}}}}).call(this,n(202))},523:function(t,e,n){var map={"./af":386,"./af.js":386,"./ar":387,"./ar-dz":388,"./ar-dz.js":388,"./ar-kw":389,"./ar-kw.js":389,"./ar-ly":390,"./ar-ly.js":390,"./ar-ma":391,"./ar-ma.js":391,"./ar-sa":392,"./ar-sa.js":392,"./ar-tn":393,"./ar-tn.js":393,"./ar.js":387,"./az":394,"./az.js":394,"./be":395,"./be.js":395,"./bg":396,"./bg.js":396,"./bm":397,"./bm.js":397,"./bn":398,"./bn-bd":399,"./bn-bd.js":399,"./bn.js":398,"./bo":400,"./bo.js":400,"./br":401,"./br.js":401,"./bs":402,"./bs.js":402,"./ca":403,"./ca.js":403,"./cs":404,"./cs.js":404,"./cv":405,"./cv.js":405,"./cy":406,"./cy.js":406,"./da":407,"./da.js":407,"./de":408,"./de-at":409,"./de-at.js":409,"./de-ch":410,"./de-ch.js":410,"./de.js":408,"./dv":411,"./dv.js":411,"./el":412,"./el.js":412,"./en-au":413,"./en-au.js":413,"./en-ca":414,"./en-ca.js":414,"./en-gb":415,"./en-gb.js":415,"./en-ie":416,"./en-ie.js":416,"./en-il":417,"./en-il.js":417,"./en-in":418,"./en-in.js":418,"./en-nz":419,"./en-nz.js":419,"./en-sg":420,"./en-sg.js":420,"./eo":421,"./eo.js":421,"./es":422,"./es-do":423,"./es-do.js":423,"./es-mx":424,"./es-mx.js":424,"./es-us":425,"./es-us.js":425,"./es.js":422,"./et":426,"./et.js":426,"./eu":427,"./eu.js":427,"./fa":428,"./fa.js":428,"./fi":429,"./fi.js":429,"./fil":430,"./fil.js":430,"./fo":431,"./fo.js":431,"./fr":432,"./fr-ca":433,"./fr-ca.js":433,"./fr-ch":434,"./fr-ch.js":434,"./fr.js":432,"./fy":435,"./fy.js":435,"./ga":436,"./ga.js":436,"./gd":437,"./gd.js":437,"./gl":438,"./gl.js":438,"./gom-deva":439,"./gom-deva.js":439,"./gom-latn":440,"./gom-latn.js":440,"./gu":441,"./gu.js":441,"./he":442,"./he.js":442,"./hi":443,"./hi.js":443,"./hr":444,"./hr.js":444,"./hu":445,"./hu.js":445,"./hy-am":446,"./hy-am.js":446,"./id":447,"./id.js":447,"./is":448,"./is.js":448,"./it":449,"./it-ch":450,"./it-ch.js":450,"./it.js":449,"./ja":451,"./ja.js":451,"./jv":452,"./jv.js":452,"./ka":453,"./ka.js":453,"./kk":454,"./kk.js":454,"./km":455,"./km.js":455,"./kn":456,"./kn.js":456,"./ko":457,"./ko.js":457,"./ku":458,"./ku.js":458,"./ky":459,"./ky.js":459,"./lb":460,"./lb.js":460,"./lo":461,"./lo.js":461,"./lt":462,"./lt.js":462,"./lv":463,"./lv.js":463,"./me":464,"./me.js":464,"./mi":465,"./mi.js":465,"./mk":466,"./mk.js":466,"./ml":467,"./ml.js":467,"./mn":468,"./mn.js":468,"./mr":469,"./mr.js":469,"./ms":470,"./ms-my":471,"./ms-my.js":471,"./ms.js":470,"./mt":472,"./mt.js":472,"./my":473,"./my.js":473,"./nb":474,"./nb.js":474,"./ne":475,"./ne.js":475,"./nl":476,"./nl-be":477,"./nl-be.js":477,"./nl.js":476,"./nn":478,"./nn.js":478,"./oc-lnc":479,"./oc-lnc.js":479,"./pa-in":480,"./pa-in.js":480,"./pl":481,"./pl.js":481,"./pt":482,"./pt-br":483,"./pt-br.js":483,"./pt.js":482,"./ro":484,"./ro.js":484,"./ru":485,"./ru.js":485,"./sd":486,"./sd.js":486,"./se":487,"./se.js":487,"./si":488,"./si.js":488,"./sk":489,"./sk.js":489,"./sl":490,"./sl.js":490,"./sq":491,"./sq.js":491,"./sr":492,"./sr-cyrl":493,"./sr-cyrl.js":493,"./sr.js":492,"./ss":494,"./ss.js":494,"./sv":495,"./sv.js":495,"./sw":496,"./sw.js":496,"./ta":497,"./ta.js":497,"./te":498,"./te.js":498,"./tet":499,"./tet.js":499,"./tg":500,"./tg.js":500,"./th":501,"./th.js":501,"./tk":502,"./tk.js":502,"./tl-ph":503,"./tl-ph.js":503,"./tlh":504,"./tlh.js":504,"./tr":505,"./tr.js":505,"./tzl":506,"./tzl.js":506,"./tzm":507,"./tzm-latn":508,"./tzm-latn.js":508,"./tzm.js":507,"./ug-cn":509,"./ug-cn.js":509,"./uk":510,"./uk.js":510,"./ur":511,"./ur.js":511,"./uz":512,"./uz-latn":513,"./uz-latn.js":513,"./uz.js":512,"./vi":514,"./vi.js":514,"./x-pseudo":515,"./x-pseudo.js":515,"./yo":516,"./yo.js":516,"./zh-cn":517,"./zh-cn.js":517,"./zh-hk":518,"./zh-hk.js":518,"./zh-mo":519,"./zh-mo.js":519,"./zh-tw":520,"./zh-tw.js":520};function r(t){var e=j(t);return n(e)}function j(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=j,t.exports=r,r.id=523},534:function(t,e,n){"use strict";n.r(e);var r=n(381).a,j=n(9),component=Object(j.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.article.image?n("div",{staticClass:"uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding",attrs:{id:"banner","data-src":t.getStrapiMedia(t.article.image.url),"uk-img":""}},[n("h1",[t._v(t._s(t.article.title))])]):t._e(),t._v(" "),n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container uk-container-small"},[t.article.content?n("div",{attrs:{id:"editor"},domProps:{innerHTML:t._s(t.$md.render(t.article.content))}}):t._e(),t._v(" "),t.article.published_at?n("p",[t._v("\n        "+t._s(t.moment(t.article.published_at).format("MMM Do YY"))+"\n      ")]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);