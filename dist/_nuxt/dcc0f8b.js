(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{385:function(t,o,e){"use strict";var n=e(3),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card primary-header"},[e("div",{staticClass:"card-body"},[e("h1",{staticClass:"h1 mb-4 text-white"},[t._v("My Account")]),t._v(" "),e("p",[t._v("\n        Phasellus ullamcorper ante in lorem auctor blandit. Etiam aliquet\n        vestibulum erat mollis ornare. Integer eu urna in risus stempor non\n        sit amet diam. Aliquam congue sit amet urna ac malesuada. varius\n        natoque penatibus et magnis.\n      ")])])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("form",[e("h3",{staticClass:"py-4"},[t._v("Update Your Personal Information")]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"name"}},[t._v("Name:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{staticClass:"form-control",attrs:{id:"name",type:"text"}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{staticClass:"form-control",attrs:{id:"email",type:"email"}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"phone"}},[t._v("Phone:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{staticClass:"form-control",attrs:{id:"phone",type:"phone"}})])]),t._v(" "),e("h3",{staticClass:"py-4"},[t._v("Update Password")]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"current-password"}},[t._v("Password:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{staticClass:"form-control",attrs:{id:"current-password",type:"password"}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"new-password"}},[t._v("New Password:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{staticClass:"form-control",attrs:{id:"new-password",type:"password"}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"confirm-password"}},[t._v("Confirm Password:")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("input",{staticClass:"form-control",attrs:{id:"confirm-password",type:"password"}})])]),t._v(" "),e("div",{staticClass:"form-group py-4"},[e("p",[e("strong",[t._v("Yes! I would like to receive promotional alerts and messages\n              from Clearview Energy.")])]),t._v(" "),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{id:"contact-email",type:"checkbox",value:"Contact me by email"}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"contact-email"}},[t._v("Contact me by email")])]),t._v(" "),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{id:"contact-txt",type:"checkbox",value:"Contact me by text"}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"contact-email"}},[t._v("Contact me by text")])])]),t._v(" "),e("button",{staticClass:"btn btn-secondary",staticStyle:{width:"auto"},attrs:{type:"submit"}},[t._v("\n          Update your information\n        ")])])])])])}],!1,null,null,null);o.a=component.exports},390:function(t,o,e){var content=e(530);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(46).default)("b553c564",content,!0,{sourceMap:!1})},529:function(t,o,e){"use strict";e(390)},530:function(t,o,e){(o=e(45)(!1)).push([t.i,'.view[data-v-94dae178]{background:url("https://mdbootstrap.com/img/Photos/Others/img%20(55).jpg") no-repeat 50%;background-size:cover;height:100%}.navbar i[data-v-94dae178]{cursor:pointer;color:#fff}',""]),t.exports=o},553:function(t,o,e){"use strict";e.r(o);var n=e(4),l=e(385),r=e(142),c={name:"DoubleNavigationPagev1",layout:"customer",components:{mdbNavbar:n.mdbNavbar,mdbNavItem:n.mdbNavItem,mdbNavbarNav:n.mdbNavbarNav,mdbSideNav2:n.mdbSideNav2,mdbAvatar:n.mdbAvatar,mdbBtn:n.mdbBtn,mdbIcon:n.mdbIcon,AccountCP:l.a,TopbarCP:r.a},data:function(){return{show:!0,collapsed:!1,navigation:[{name:"Double navigation",icon:"bars",children:[{name:"Version 1",to:"/navigation/pro/double-navigation-v1"},{name:"Version 2",to:"/navigation/pro/double-navigation-v2"},{name:"Version 3",to:"/navigation/pro/double-navigation-v3"},{name:"Version 4",to:"/navigation/pro/double-navigation-v4"},{name:"Version 5",to:"/navigation/pro/double-navigation-v5"},{name:"Version 6",to:"/navigation/pro/double-navigation-v6"}]},{name:"Getting started",icon:"mdb",fab:!0,children:[{name:"Quick start",href:"https://mdbootstrap.com/docs/vue/getting-started/quick-start/"},{name:"Technical Support",href:"https://mdbootstrap.com/support/"}]},{name:"Documentation",icon:"graduation-cap",href:"https://mdbootstrap.com/docs/vue/"}]}}},v=(e(529),e(3)),component=Object(v.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("mdb-side-nav-2",{staticClass:"navbar-nav",attrs:{value:!0,data:t.navigation,push:"",slim:"","slim-collapsed":t.collapsed,color:"blue"},on:{toggleSlim:function(o){t.collapsed=o}}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"d-flex align-items-center my-4",class:t.collapsed?"justify-content-center":"justify-content-start"},[e("mdb-avatar",{staticStyle:{flex:"0 0 auto"},attrs:{width:10}},[e("img",{staticClass:"img-fluid rounded-circle z-depth-1",attrs:{src:"http://localhost:3000/_nuxt/assets/img/CLEARVIEW_LOGO.svg"}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"m-t mb-0 ml-4 p-0",staticStyle:{flex:"0 2 auto"}},[e("img",{staticClass:"img-fluid rounded-circle z-depth-1",attrs:{src:"https://cdn.cve.so/img/Themes/DefaultClean/Content/images/clearview_logo.webp"}})])],1),t._v(" "),e("hr",{staticClass:"w-100"})]),t._v(" "),e("div",{staticClass:"mt-5 d-flex justify-content-center",attrs:{slot:"content"},slot:"content"},[e("mdb-btn",{staticClass:"mx-0",attrs:{tag:"a",size:"sm",transparent:"",floating:"",icon:t.collapsed?"chevron-right":"chevron-left","icon-class":"white-text"},on:{click:function(o){t.collapsed=!t.collapsed}}})],1),t._v(" "),e("mdb-navbar",{attrs:{slot:"nav",tag:"div",toggler:!1,position:"top",light:"",color:"blue"},slot:"nav"},[e("mdb-navbar-nav",{staticClass:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",attrs:{left:""}},[e("button",{staticClass:"btn btn-link d-md-none rounded-circle mr-3",attrs:{id:"sidebarToggleTop"}},[e("i",{staticClass:"fa fa-bars"})]),t._v(" "),e("div",{staticClass:"contact-info small"},[e("div",{staticClass:"contact-info__link"},[e("a",{attrs:{href:"tel:+800-7464702",title:"Tel"}},[e("i",{staticClass:"fa fa-fw fa-phone-alt"}),e("span",[t._v("+ 800-746-4702")])])]),t._v(" "),e("div",{staticClass:"contact-info__link"},[e("i",{staticClass:"fa fa-fw fa-envelope"}),t._v(" "),e("a",{attrs:{href:"mailto:customerservice@clearviewenergy.com",title:"Email"}},[e("span",[t._v("customerservice@clearviewenergy.com")])])])]),t._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item mx-1"},[e("a",{staticClass:"nav-link",attrs:{href:"https://www.instagram.com/clearview.energy/"}},[e("i",{staticClass:"fab fa-instagram fa-fw"})])]),t._v(" "),e("li",{staticClass:"nav-item mx-1"},[e("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/ClearviewEnergy/"}},[e("i",{staticClass:"fab fa-facebook-square fa-fw"})])]),t._v(" "),e("li",{staticClass:"nav-item mx-1"},[e("a",{staticClass:"nav-link",attrs:{href:"https://www.youtube.com/channel/UCOe7Jo0Fmx7zBreMRypDivA"}},[e("i",{staticClass:"fab fa-youtube fa-fw"})])]),t._v(" "),e("li",{staticClass:"nav-item mx-1"},[e("a",{staticClass:"nav-link",attrs:{href:"https://twitter.com/ClearviewEnergy"}},[e("i",{staticClass:"fab fa-twitter fa-fw"})])]),t._v(" "),e("div",{staticClass:"topbar-divider d-none d-sm-block"}),t._v(" "),e("li",{staticClass:"nav-item dropdown no-arrow"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"userDropdown",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("span",{staticClass:"mr-2 d-none d-lg-inline text-gray-600 small"},[t._v("Douglas McGee")]),t._v(" "),e("img",{staticClass:"img-profile rounded-circle",attrs:{src:"https://cdn.cve.so/img/Themes/DefaultClean/Content/images/clearview_logo.webp"}})]),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right shadow animated--grow-in",attrs:{"aria-labelledby":"userDropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#","data-toggle":"modal","data-target":"#logoutModal"}},[e("i",{staticClass:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),t._v("\n          Logout\n        ")])])])]),t._v(" "),e("mdb-nav-item",{attrs:{to:"/navigation/pro/double-navigation-v1","waves-fixed":"",icon:"code-branch"}},[e("span",{staticClass:"ml-1"},[t._v("v.1")])]),t._v(" "),e("mdb-nav-item",{attrs:{to:"/navigation/pro/double-navigation-v2","waves-fixed":"",icon:"eye"}},[e("span",{staticClass:"ml-1"},[t._v("v.2")])]),t._v(" "),e("mdb-nav-item",{attrs:{to:"/navigation/pro/double-navigation-v3","waves-fixed":"",icon:"file-code",far:""}},[e("span",{staticClass:"ml-1"},[t._v("v.3")])]),t._v(" "),e("mdb-nav-item",{attrs:{to:"/navigation/pro/double-navigation-v4","waves-fixed":"",icon:"terminal"}},[e("span",{staticClass:"ml-1"},[t._v("v.4")])]),t._v(" "),e("mdb-nav-item",{attrs:{active:"",to:"/navigation/pro/double-navigation-v5","waves-fixed":"",icon:"smile",far:""}},[e("span",{staticClass:"ml-1"},[t._v("v.5")])]),t._v(" "),e("mdb-nav-item",{attrs:{to:"/navigation/pro/double-navigation-v6","waves-fixed":"",icon:"user",far:""}},[e("span",{staticClass:"ml-1"},[t._v("v.6")])])],1)],1),t._v(" "),e("div",{staticStyle:{height:"100vh"},attrs:{slot:"main"},slot:"main"},[e("AccountCP")],1)],1)],1)}),[],!1,null,"94dae178",null);o.default=component.exports}}]);