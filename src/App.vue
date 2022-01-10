<template>
    <!--<div class="nav-top">
        <div class="nav">
            <div class="nav-item"
            @click="calcTop = 0, currentPos = 0">Главная</div>
            <div class="nav-item"
            @click="calcTop = -100, currentPos = -1">Условия</div>
            <div class="nav-item"
            @click="calcTop = -200, currentPos = -2">Технология</div>
            <div class="nav-item"
            @click="calcTop = -300, currentPos = -3">Заказать звонок</div>

        </div>
        <div class="nav-contacts">
            <a href="tel:+79143453511" class="nav-item">+79143453511</a>
            <a href="mailto:specpro25@gmail.com" class="nav-item">specpro25@gmail.com</a>
        </div>
    </div>-->
    <div class="landing" @wheel="wheel" v-touch:swipe="swipeHandler">
        <div class="page-1 page" :style="{ top: caclTop + '%' }">
            <div class="page-content">
                <Header @call='callFromNav'/>
            </div>
        </div>
        <div class="page-2 page" :style="{ top: (caclTop + 100) + '%' }">
            <div class="page-content">
                <Gallery/>
            </div>   
        </div>

        <div class="page-3 page" :style="{ top: (caclTop + 200) + '%' }">
            <div class="page-content" :style="{ background: '#ffc107' }">
                <Prices/>
            </div>   
        </div>

        <div class="page-4 page" :style="{ top: (caclTop + 300) + '%' }">
            <div class="page-content">
                <How/>
            </div>   
        </div>
        <div class="page-5 page" :style="{ top: (caclTop + 400) + '%' }">
            <div class="page-content">
                <CallUs/>
            </div>   
        </div>
        <call-me-baby @call='callFromNav' :level='currentPos'/>
    </div>
</template>

<script>
import { ref, computed } from 'vue'

import Header from './pages/Header'
import Prices from './pages/Prices'
import How from './pages/How'
import CallUs from './pages/CallUs'
import Gallery from './pages/Gallery'
import CallMeBaby from './components/CallMeBaby'

export default {
  name: 'App',
  components: {
    Header,
    Prices,
    How,
    CallUs,
    Gallery,
    CallMeBaby
  },
  setup(){
      const currentPos = ref(0)
      const maxPos = -4
      const caclTop = computed(()=>{
          return (currentPos.value * 100)
      })
      let stopper = false;
      const callFromNav = (num1, num2) =>
      {
          caclTop.value = num1;
          currentPos.value = num2;
      }
      const wheel = (ev)=>{
          if(stopper){
              return
          }
          if(ev.deltaY > 0){
              if(currentPos.value == maxPos){
                return
              }
              currentPos.value = currentPos.value - 1
          }else{
              if(currentPos.value == 0){
                return
              }
              currentPos.value = currentPos.value + 1
          }
        stopper = true
        setTimeout(()=>{
           stopper = false 
        }, 600)
      }
        const swipeTop = (ev)=>{
            if(currentPos.value == maxPos){
                return
              }
              currentPos.value = currentPos.value - 1
        }
        const swipeDown = (ev)=>{
            if(currentPos.value == 0){
                return
              }
              currentPos.value = currentPos.value + 1
        }
        const swipeHandler = (ev)=>{
            console.log(ev)
            if(ev == 'top'){
                if(currentPos.value == maxPos){
                    return
                }
                currentPos.value = currentPos.value - 1
            }else if(ev == 'bottom'){
                if(currentPos.value == 0){
                    return
                }
                currentPos.value = currentPos.value + 1
            }
        }
      return {
          caclTop, currentPos,

          wheel, callFromNav, swipeTop, swipeHandler
      }
  }
}
</script>

<style>
html{
    touch-action: pan-down;
}
.nav-top {
    z-index: 1;
    color: #c7c7c7;
    position: fixed;
    display: flex;
    width: 100%;
    background: #ff693aa3;
    justify-content: center;
    font-size: 19px;
}
.nav {
    width: 50%;
    display: flex;
}
.nav-item {
    padding: 10px;
    display: block;
    color: white;
}
.nav-contacts {
    width: 30%;
    display: flex;
    justify-content: flex-end;
}
.page {
    height: 100%;
    position: fixed;
    width: 100%;
    transition: 600ms top;
}
.logo {
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    margin: auto;
    border-radius: 30px;
    margin-top: 100px;
    border: 1px solid #ccc;
}
.text {
    font-size: 22px;
    max-width: 800px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;

}
.button-login {
    width: 300px;
    font-size: 26px;
    margin: auto;
    margin-top: 40px;
    padding: 20px;
    background: #009688;
    color: white;
    border-radius: 8px;
    cursor: pointer;
}
h1.title {
    text-align: center;
    font-size: 50px;
}
.prices {
    display: flex;
    justify-content: space-around;
}
.price {
    width: 200px;
    text-align: center;
}
.price-value {
    font-size: 26px;
}
.price-text {
    margin-top: 20px;
}
.phone-screenshot {
    width: 300px;
    border-radius: 12px;
    height: 600px;
    border: 5px solid #ccc;
}
.phone-screenshots {
    display: flex;
    justify-content: space-around;
}
body{
    margin: 0px;
}
h1, h2 {
    font-weight: initial;
    margin: 0px;
}
.page-content {
    height: 100%;
    position: relative;
}
.block {
    padding-top: 12vh;
}
.block-orange{
    background: #ffc107;
}
.block-title {
    text-align: center;
    padding: 35px;
    font-size: 35px;
    color: #a74d00;
}
.block-title-border {
    width: 70px;
    height: 2px;
    margin: auto;
    background: #ffc107;
}
.block-content {
    width: 1000px;
    margin: auto;
}

element.style {
}
.mini-card {
    width: 33%;
    font-size: 24px;
    padding: 20px;
    border-radius: 7px;
    color: black;
    display: inline-block;
}
.mini-card-icon {
    width: 45px;
}
.mini-card-icon svg {
    width: 100%;
    height: 100%;
    fill: black;
}
.cards{
    display: flex;
}
@media (max-width: 500px) {
    .block {
        height: 100%;
        min-width: initial;
        padding: 20px;
    }
    .block-content {
        margin: auto;
        width: auto;
    }
    .cards {
        flex-wrap: wrap;
    }
    .mini-card-icon {
        margin: auto;
    }
    .mini-card {
        text-align: center;
        width: 100%;
    }
}
.cal {
    text-align: center;
    display: flex;
    justify-content: center;
    color: black;
    font-size: 24px;
    padding: 50px;
}
.cal-input {
    margin-right: 10px;
    position: relative;
}
.cal-input input {
    border: 0px;
    padding: 10px;
    border-radius: 6px;
    background: #f9c028;
    border: 1px solid black;
    outline: 0px;
    font-size: 24px;
    color: black;
    width: 200px;
}
@media (max-width: 400px) {
    .cal-input input {
        width: 124px;
    }
    .cal-number{
        margin: 0px 10px;
        font-size: 20px;
        line-height: 46px;
    }
}
.cal-input-placeholder {
    position: absolute;
    font-size: 12px;
    top: 0px;
    right: 10px;
}
.cal-number{
    margin: 0px 10px;
        line-height: 54px;
}
.cal-var{
}
.modal-shadow {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0000008f;
    top: 0px;
}
.modal {
    width: 400px;
    position: fixed;
    top: 25%;
    z-index: 1;
    left: 0px;
    right: 0px;
    margin: auto;
    padding: 20px;
    background: #676767;
    border-radius: 5px;
}
@media (max-width: 400px) {
    .modal {
        width: 300px;
    }
}
.modal-title {
    text-align: center;
    font-size: 24px;
    color: white;
}
.modal-content input {
    width: 100%;
    font-size: 19px;
    margin: 7px 0px;
    padding: 10px;
    box-sizing: border-box;
    border: 0px;
    outline: 0px;
    border-radius: 5px;
}
.modal-content button {
    width: 100%;
    padding: 13px;
    font-size: 18px;
    border: 0px;
    outline: 0px;
    border-radius: 4px;
    margin-top: 15px;
    background: #ffc107;
    cursor: pointer;
}
.modal-close {
    font-size: 46px;
    position: absolute;
    top: -26px;
    right: -18px;
    color: white;
    background: #f9c028;
    height: 38px;
    line-height: 37px;
    padding: 7px;
    cursor: pointer;
    border-radius: 30px;
}
.contact-icon {
    width: 40px;
    margin-right: 20px;
}
.contact-text a {
    color: #ffffff;
}
.block.block-red {
    background: #ff693a;
    color: white;
    fill: white;
}
.block.block-red .block-title{
    color: white;
}
.block.block-red  .call-button {
    margin: auto;
    margin-top: 20px;
}
@media (max-width: 500px) {
    .contact {
       width: 100%;
    }
}
@media (max-width: 1190px){
    .nav{
        width: 100%;
        padding: 0 20px;
    }
    .nav-contacts .nav-item{
        display: none;
    }
    .nav{
        min-width: 100%;
        margin: 0 auto;
        justify-content: center;
    }
}
@media (max-width: 980px){
    .block-content{
        max-width: 100%;
    }
    .block-title{
        padding: 10px;
        margin-top: 10px;
    }
    .block.block-orange{
        padding-top: 100px;
    }
    .cards{ 
        flex-direction: column;
        align-items: center;
    }
    .mini-card{
        width: 100%;
    }
    .mini-card-icon{
        margin: 0 auto;
    }
    .mini-card-title{
        text-align: center;
}
}
@media (max-width: 700px){
    .block{
    }
}
@media (max-width: 500px){
    .nav-top{
        display: none;
    }
    .header-title{
        padding: 0;
        text-align:justify;
    }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>
