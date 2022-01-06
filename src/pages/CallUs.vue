<template>
  <div class="call-us">
      <div class="call-us-wrapper">
          <div class="block-call">
              <div class="title">Заказать звонок
              </div>
              <form class="call-form">
                  <div class="name"><input placeholder="Имя" type="text" class="input-name"></div>
                  <div class="tel"><input placeholder="Телефон" type="tel" class="input-tel" minlength="10"></div>
                  <button class="btn-call">Отправить</button>    
              </form>  
          </div>
            <div class="block-contacts">
                <div class="title">Контакты
                </div>
                <div class="contacts">
                    <div class="contact phone">
                        <div class="contact-image"><img src="@/assets/svg/phone.svg" alt=""></div>
                        <div class="contact-title">+79143453511</div>
                    </div>
                    <div class="contact email">
                        <div class="contact-image"><img src="@/assets/svg/email.svg" alt=""></div>
                        <div class="contact-title">specpro25@gmail.com</div>
                    </div>
                </div>
                <div class="call-btn"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CallUs'

}
</script>

<style scoped>
.call-us{
    background-color: #ffc107;
    height: 100%;

}
.call-us-wrapper{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 12vh;
    padding-bottom: 12vh;
}
.block-call{
    margin-bottom: 18vh;
}
.block-contacts{
}
.call-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.call-form{
    align-items: center;
}
.tel{
    margin: 2em;
}
.call-us input{
    min-width: 10em;
    font-size: 2em;
    border: none;
    background-color: #ffc107;
    border-bottom: 2px solid black;
}
.call-us button{
    font-size: 2em;
    background-color: #ffc107;
    border-bottom: 2px solid black;
}
.title{
    text-align: center;
    padding: 35px;
    font-size: 35px;
    color: #484848;

}
.title-border{
    width: 70px;
    height: 2px;
    margin: auto;
    background: black;
    margin-bottom: 1vh;
}
.contacts{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.contact{
    font-size: 2em;
    align-items: center;
}
.phone{
    margin-right: 3em;
    margin-bottom: 1em;
}
.contact-image{
    width: 4em;
    margin-right: 1em;
}
.call-us img{
    max-width: 100%;
}
@media (max-width: 510px){
    .contact{
        font-size: 6vw;
    }
    .contact-image{
        width: 2em;
    }
    .call-us input{
    max-width: 4vw;
    }
}
</style>