<template>
<div>
  <header>
    <TopBar />
    <MainBar />
  </header>
  <HeroState />
  <main>
  <div class="master-column-wrapper container">
    <nuxt />
    </div>
  </main>
<Footer />
</div>
</template>

<script>
  import {mdbContainer} from 'mdbvue';
  import TopBar from "~/components/TopBar.vue";
  import MainBar from "~/components/MainBar.vue";
  import HeroState from "~/components/HeroState.vue";
  import Footer from "~/components/Footer.vue";
export default {
      components: {
      mdbContainer,    
      TopBar,
      MainBar,
      HeroState,
      Footer   
      }
}

</script>

<style scoped>
.rates {
  margin: 30px 0;
  border: 1px solid #F0EFEF;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25) !important; }
  .rates__block-container {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #F0EFEF; }
  .rates__block {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1; }
    .rates__block:after {
      content: '';
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      border: 1px solid #fff; }
    .rates__block:last-child:after {
      border: none; }
  @media (max-width: 991.98px) {
    .rates__block--p-description {
      flex-basis: 100%; } }
  .rates__label {
    background: #F0EFEF;
    padding: 15px;
    font-weight: bold; }
  .rates__data {
    padding: 15px; }
  .rates__add-info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    background: #2079C7; }
    @media (min-width: 992px) {
      .rates__add-info {
        flex-direction: row; } }
  .rates__plan-description {
    display: flex;
    color: #fff;
    align-items: center;
    padding: 15px; }
    .rates__plan-description p {
      padding: 0 15px;
      margin: 0; }
    @media (min-width: 992px) {
      .rates__plan-description {
        order: 1;
        flex-basis: 50%; } }
  .rates__icon-container {
    display: flex; }
  .rates__icon {
    width: 80px;
    height: 80px; }
    .rates__icon img {
      width: 100%; }
    .rates__icon:nth-child(2) {
      position: relative;
      margin-left: -30px;
      z-index: 400; }
  .rates__btn-container {
    width: 100%;
    text-align: center;
    padding: 30px;
    order: 4; }
    @media (min-width: 992px) {
      .rates__btn-container {
        flex-basis: 25%;
        order: 3; } }
    .rates__btn-container a {
      color: #fff !important; }
    .rates__btn-container:first-child {
      border: 1px solid red; }
    .rates__btn-container--selected {
      background-color: #1b66a7; }
    @media (max-width: 1199.98px) {
      .rates__btn-container .btn {
        width: 100%; } }
    .rates__btn-container .rate__terms {
      color: #fff;
      font-weight: bold; }
  .rates .rates__btn-container--benefits {
    border-width: 1px;
    border-color: #448ed0;
    border-style: solid none;
    order: 2; }
    @media (min-width: 992px) {
      .rates .rates__btn-container--benefits {
        border-style: none solid;
        order: 2;
        flex-basis: 25%; } }
  .rates__benefits {
    background-color: #1b66a7;
    color: #fff;
    order: 3; }
    .js .rates__benefits {
      height: 0;
      overflow: hidden; }
      .js .rates__benefits .pricing {
        opacity: 0;
        transition: opacity .25s ease .15s; }
      .js .rates__benefits.selected {
        height: auto; }
        .js .rates__benefits.selected .pricing {
          opacity: 1; }
    @media (min-width: 992px) {
      .rates__benefits {
        order: 4;
        width: 100%; } }
  .rates__benefits-list-container {
    padding: 30px; }
  .rates__benefits-list {
    list-style-type: none;
    padding: 0; }
    .rates__benefits-list li {
      margin: 20px 0;
      padding-left: 40px;
      background: url(https://cdn.cve.so/img/Themes/DefaultClean/Content/images/checkMark.png) no-repeat; }
  .rates__cancellation {
    background-color: #185c97;
    padding: 15px; }
  .rates__benefits-close {
    padding: 15px;
    border-top: 1px solid #2079C7;
    background-color: #96CC72;
    text-align: center; }
    .rates__benefits-close a {
      color: #fff; }
    .rates__benefits-close a:after {
      display: inline-block;
      margin-left: 8px;
      vertical-align: middle;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
      transform: rotate(180deg); }
  .rates .row {
    margin-left: 15px;
    margin-right: 15px; }
.state-contract {
  border-left: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  font-size: 14px; }
  .state-contract__header {
    position: relative;
    padding: 15px;
    background-color: #2079C7;
    color: #fff;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem; }
    .state-contract__header span {
      display: block; }
  .state-contract__header-info {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 30px 60px 30px; }
  .state-contract__logo {
    margin-bottom: 30px; }
  @media (min-width: 768px) {
    .state-contract__tos {
      text-align: right; } }
  .state-contract__tos .tos-title {
    font-size: 22px;
    font-weight: bold; }
  .state-contract__tos .tos-info {
    font-weight: 200; }
  .state-contract__header-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%; }
  .state-contract__body {
    padding: 30px 15px; }
    @media (min-width: 768px) {
      .state-contract__body {
        padding: 30px 60px; } }
  .state-contract__intro {
    margin: 15px 0 30px 0; }
    .state-contract__intro .agreement {
      font-size: 1rem;
      line-height: 1.75; }
  .state-contract__table {
    font-size: 12px; }
    .state-contract__table th {
      width: 30%; }
    .state-contract__table td {
      width: 70%; }
  .state-contract__legal {
    font-size: 10px; }
    @media (min-width: 768px) {
      .state-contract__legal {
        column-count: 2;
        column-gap: 30px; } }
    .state-contract__legal ol {
      margin: 0;
      padding: 0 0 0 15px; }
  .state-contract__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    border-top: 1px solid #dee2e6;
    background-color: #F7F7F7;
    font-size: 10px; }
  .state-contract .plan {
    position: relative;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
    padding-bottom: 15px;
    margin-bottom: 30px;
    z-index: 900; }
    .state-contract .plan__header {
      background: #2079C7;
      padding: 15px;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      text-align: center; }
      .state-contract .plan__header h3 {
        color: #fff; }
    .state-contract .plan__info {
      display: flex;
      align-items: top;
      padding: 10px 15px;
      border-bottom: 1px solid #F7F7F7;
      font-size: 12px; }
      .state-contract .plan__info:last-child {
        border: none; }
    .state-contract .plan__label {
      flex-basis: 50%;
      font-weight: bold;
      color: #2079C7; }
    .state-contract .plan__data {
      flex-basis: 50%; }
  .state-contract__account-info {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    font-size: 10px; }
    @media (min-width: 768px) {
      .state-contract__account-info {
        font-size: 12px; } }
  @media (min-width: 992px) {
    .state-contract .intro-row > :nth-child(1) {
      order: 2; }
    .state-contract .intro-row > :nth-child(2) {
      order: 1; } }

</style>