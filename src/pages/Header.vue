<template>
    <header class="top-content">
        <div class="top-content-wrapper">
            <div class="logo-company">
                <div class="logo-img"><img src="../assets/logo.png"/></div>
                <div class="logo-text">Cпецпроект</div>
            </div>
            <div class="top-content-center">
                <div class="header-title">
                    <h1 class="title-main">механизированная полусухая стяжка</h1>
                    <div class="header-text">
                        Полусухая или механизированная стяжка пола – это процесс выравнивания поверхности с использованием специальной техники и смеси из небольшого количества воды. Это позволяет производить масштабные работы за короткий период времени и с небольшими трудозатратами рабочих.
                    </div>
                </div>
                <div class="menu-buttons">
                    <div @click="$emit('call', -300, -1)" class="price-button button">Цены</div>
                    <div @click="$emit('call', -300, -2)" class="tech-button button">Технология</div>
                    <div @click="$emit('call', -300, -3)" class="call-button button">Заказать звонок</div>
                    <!--<img src="../assets/5200-VBS_1000x560_blue-800x448.png" alt="">-->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  setup(){

      return {
      }
  }
}
</script>

<style>
.logo-company {
    display: flex;
    justify-content: center;
    color: #ffc107;
    padding-top: 5%;
    padding-bottom: 50px;
}
.header-title{
}
.top-content{
    height: 100%;
    background: url('../assets/beton_potertosti_tekstura_146032_1920x1080.jpg');
}
@media (min-width: 1080px) {
    .top-content{
        background-size: 100% 100%;
    }
}
.top-content-wrapper {
    background: #020202c2;
    height: 100%;
}

.top-content-center {
    display: flex;
    justify-content: center;
    padding-bottom: 60px;
    position: relative;
}
.logo-img {
    width: 50px;
}
.logo-img img {
    width: 100%;
}
.logo-text {
    line-height: 50px;
    margin-left: 10px;
    font-size: 24px;
}
.header-title {
    color: #ffc107;
    text-transform: uppercase;
    width: 530px;
}
.header-text {
    max-width: 530px;
    font-size: 24px;
    text-transform: none;
    color: #cecece;
}
.title-main {
        font-size: 40px;
    color: white;
    line-height: 45px;
    margin-bottom: 20px;
}
@media (max-width: 400px) {
    .title-main {
        font-size: 30px;
    }
}
.title-bottom {
    font-size: 24px;
    color: #ffc107;
}

.button {
    border: 1px solid;
    width: 300px;
    color: #ffc107;
    margin: auto;
    text-align: center;
    margin-top: 20px;
    border-radius: 4px;
    padding: 7px;
    text-transform: uppercase;
    font-size: 20px;
    transition: background 200ms;
    cursor: pointer;
}
.menu-buttons {
    width: 500px;
}
.price-button{
    border: 1px solid #ffc107;
}
.price-button:hover {
    background: #ffc10738;
}
.call-button {
    border: 1px solid #ffc107;
}
.call-button:hover {
    background: #ffc10738;
}
.main-photo {
    width: 640px;
}
.main-photo img {
    width: 100%;
}
@media (max-width: 500px) {
    .main-photo {
        position: absolute;
        width: 200px;
        right: 0px;
        top: 80px;
    }
}

@media (max-width: 580px) {
    .top-content-center{
        flex-direction: column;
        align-items: center;
        padding: 10px 15px;
        padding-top: 0px;
    }
    .logo-company {
        display: flex;
        justify-content: center;
        color: #ffc107;
        padding-top: 5%;
        padding-bottom: 35px;
    }
    .main-photo{
        display: none;
    }
    .title-main{
        font-size: 20px;
        text-align: center;
        line-height: 30px;
    }
    .logo-text{
    }
    .header-title{
        width: 99%;
        padding: 0 20px;
    }
    .header-text{
        font-size: 18px;
    }
    .button{
        margin: 0 auto;
        margin-top: 15px;
        width: 100%;
    }
}
</style>
