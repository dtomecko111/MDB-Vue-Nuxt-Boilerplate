(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{386:function(t,e,r){"use strict";var n={props:{sect:{type:Object,default:function(){return{}}}}},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row section-description-row align-items-center align-content-center"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"section-description-thumbnail-wrap"},[r("div",{staticClass:"section-description-thumbnail"},[r("img",{attrs:{src:t.sect.imgUrl,alt:"Our Story"}})])])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"section-description"},[r("h3",[t._v(t._s(t.sect.title))]),t._v(" "),r("p",[t._v(t._s(t.sect.description))]),t._v(" "),r("a",{staticClass:"readmore",attrs:{href:t.sect.webUrl}},[t._v(t._s(t.sect.linkDesc)+" ›")])])])])}),[],!1,null,null,null);e.a=component.exports},387:function(t,e,r){"use strict";r(140);var n={components:{Sect:r(386).a},props:{sect:{type:Array,default:function(){return[]}}},computed:{leftArticles:function(){return this.$store.state.pageList[0].sectionList.slice(0,3)}}},c=r(2),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"master-column-wrapper container"},[this._m(0),this._v(" "),e("div",this._l(this.leftArticles,(function(t){return e("Sect",{key:t.id,attrs:{sect:t}})})),1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"breadcrumb white"},[e("ul",[e("li",[e("a",{attrs:{href:"/"}},[this._v("Home")])]),this._v(" "),e("li",[this._v("About Us")])])])])}],!1,null,null,null);e.a=component.exports},558:function(t,e,r){"use strict";r.r(e);r(140),r(34);var n=r(3),c=r(387),l={computed:{leftArticlesCount:function(){return 0},leftArticles:function(){return this.$store.state.pageList.slice(0,1)}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=r.slug,e.abrupt("return",{slug:n});case 3:case"end":return e.stop()}}),e)})))()},components:{HeroAbout:r(106).a,TopicSections:c.a}},o=r(2),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._l(this.leftArticles,(function(t){return e("HeroAbout",{key:t.id,attrs:{pagename:t}})})),this._v(" "),e("TopicSections")],2)}),[],!1,null,null,null);e.default=component.exports}}]);