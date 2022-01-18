<template>
  <div class="call-us">
      <div class="call-us-wrapper">
          <div class="block-call">
              <div class="title title-call">Заказать звонок
              </div>
              <form class="call-form">
                    <div class="field">
                        <div class="field-title">Имя</div>
                        <input type="text" class="input-name">
                    </div>
                    <div class="field">
                        <div class="field-title">Номер</div>
                        <input type="tel" class="input-tel" minlength="10">
                    </div>
                  <button class="btn-call">Отправить</button>    
              </form>  
          </div>
            <div class="block-contacts">
                <div class="contacts">
                    <div class="contact">
                        <a href="tel:+79143453511" class="contact-title">+79143453511</a>
                    </div>
                    <div class="contact">
                        <a href="mailto:specpro25@gmail.com" class="contact-title">specpro25@gmail.com</a>
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

<style>
a.contact-title {
    text-decoration: underline;
    color: black;
}
.contacts {
    text-align: center;
    font-size: 18px;
}
.field{
    margin-bottom: 20px;
}
.field-title{
    padding-left: 10px;
    color: #a74d00;
}
.call-us {
    background-color: #ffc107;
    min-height: 100vh;
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
    margin-bottom: 40px;
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
.call-us input {
    min-width: 10em;
    width: 300px;
    font-size: 22px;
    line-height: 51px;
    border: none;
    outline: 0px;
    color: #000000;
    padding-left: 11px;
    background: #f16f0000;
    border-bottom: 1px solid #ff693a;
}
.call-us button {
    font-size: 20px;
    background-color: #ffc107;
    border: 0px;
    outline: 0px;
    width: 300px;
    padding: 2px;
    color: white;
    background: #f16f00;
    border-radius: 5px;
    margin-top: 20px;
    line-height: 51px;
    cursor: pointer;
}
.title{
    text-align: center;
    padding: 35px;
    font-size: 35px;
    color: #a74d00;

}
.title-call {
    text-align: center;
    padding: 35px;
    font-size: 44px;
    color: #a74d00;
}
.title-border{
    width: 70px;
    height: 2px;
    margin: auto;
    background: black;
    margin-bottom: 1vh;
}

.call-us img{
    max-width: 100%;
}
@media (max-width: 510px){
    .contact-image{
        width: 2em;
    }
    .title{
        font-size: 24px;
        padding-bottom: 39px!important;
    }
    .call-us input{
    max-width: 4vw;
    }
}
</style>