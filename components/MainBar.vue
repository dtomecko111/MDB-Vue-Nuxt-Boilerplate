<template>
<div class="main-header">
    <div class="container">
      <div class="row align-items-streach justify-content-between">
        <div class="main-header-logo"> <a href="/"><img src="https://cdn.cve.so/img/Themes/DefaultClean/Content/images/clearview_logo.webp" alt="Clearview Energy"></a> </div>
      
<ejs-menu :items='menuItems'></ejs-menu>
</div>
</div>
</div>
</template>

<script>
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);

export default {
  data: function() {
    return {
        //Menu items definition
        menuItems:   [
            {
               text: 'About us',
                items: [
                    { text: 'Who We Are', url: '/about-us/who-we-are'},
                     { text: 'Why Choose Clearview', url: '/about-us/why-choose-clearview'},
                    { text: 'Partnerships', url: '/about-us/partnerships'}
                ]
            , url: '/about-us' 
            },
            {
             text: 'Rates & Plans',
                items: [
                    { text: 'Areas We Serve', url: '/rates-and-plans/areas-we-serve'}
                ]
            , url: '/rates-and-plans' },
            {
               text: 'Customer Care',
                items: [
                    { text: 'FAQ', url: '/customer-care/faq'},
                     { text: 'Outage Report', url: '/customer-care/outage-report'},
                    { text: 'Referral Program', url: '/customer-care/referral-program'},
                     { text: 'What is Deregulation', url: '/customer-care/login'}
                ]
            , url: '/customer-care' 
            },
            {
               text: 'Living Green',
                items: [
                    { text: 'What is Green Energy', url: '/living-green/what-is-green-energy'},
                    { text: 'Renewable Sources', url: '/living-green/renewable-sources'},
                    { text: 'Live Green - News & Events', url: '/living-green/live-green-blog'},
                    { text: 'Energy Choice', url: '/living-green/energy-choice'},
                    { text: 'Energy Saving Tips', url: '/living-green/energy-saving-tips'},
                    { text: 'Energy Choice', url: '/living-green/what-is-deregulation'}
                ]
            , url: '/living-green' 
            },
            { text: 'Clearview Rewards', url: '/clearview-rewards' },           
            { text: 'Contact Us', url: '/contact-us' }
        ]
    };
  }
}

</script>