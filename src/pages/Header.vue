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
                    <div class="call-button">Заказать звонок</div>
                </div>
                <div class="main-photo">
                    <img src="../assets/5200-VBS_1000x560_blue-800x448.png" alt="">
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

.header-title{
}
.top-content{
    background: url(../assets/beton_potertosti_tekstura_146032_1920x1080.jpg);
    height: 100%
}
.top-content-wrapper {
    background: #020202c2;
    height: 100%;
}
.logo-company {
    display: flex;
    justify-content: center;
    color: white;
    padding-top: 90px;
    padding-bottom: 50px;
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
    color: white;
    text-transform: uppercase;
    width: 530px;
}
.header-text {
    width: 530px;
    font-size: 24px;
    text-transform: none;
}
.title-main {
        font-size: 40px;
    color: #f9c028;
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
    color: #c1c1c1;
}

.call-button {
    border: 1px solid #ffc107;
    width: 300px;
    color: #ffc107;
    text-align: center;
    margin-top: 30px;
    border-radius: 4px;
    padding: 7px;
    text-transform: uppercase;
    font-size: 20px;
    transition: background 200ms;
    cursor: pointer;
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
</style>
