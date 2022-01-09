<template>
  <div class="how-content">
      <div class="how-wrapper">
        <!-- Центральный заголовок  -->
      <div class="title">Технология </div>
      <!-- 3 блока -->
      <div class="how-blocks">
          <!-- Табс-контейнер -->
          <div class="how-tabs-container">
            <nav class="tabs-items">
              <div class="tabs-item" @click='activateTab(0)' :class='{ color_tab: tabVis.one }'>Из чего?
                  <div class="how-title-border" :class='{border_on: tabVis.one}'></div>
              </div>
              <div class="tabs-item" @click='activateTab(1)' :class='{ color_tab: tabVis.two }'>Как?
                    <div class="how-title-border" :class='{border_on: tabVis.two }'></div>

              </div>
              <div class="tabs-item" @click='activateTab(2)' :class='{ color_tab: tabVis.three }'>Зачем?
                    <div class="how-title-border" :class='{border_on: tabVis.three}'></div>
              </div>
            </nav>
            <div class="tabs-body">
            <!-- Блок 1 -->
          <div id="tab_01" class="tabs-block" :class="{color_tab: tabVis.one }" :style="{ left: (calcLeft + 5) + '%' }">
              <div class="block-list">
              <div class="subtitle">Для строительной смеси используются:</div>
              <div class="list" :style="{activateTab}"><ul>
              <li>Мытый крупнодисперсный песок первого класса величиной от 2,5 до 3 мм</li>
              <li>Фиброволокно из полипропилена – укрепляет смесь, предупреждает появление трещин и улучшает качество сцепления</li>
              <li>Цемент марки М500</li>
              <li>Вода – в минимальном количестве, чтобы в стяжке было как можно меньше пор</li>
              </ul>
              </div>
              </div>
          </div>
            <!-- Блок 2 -->
          <div id="tab_02" class="tabs-block" :class="{color_tab: tabVis.two }" :style="{ left: (calcLeft + 110) + '%' }">
              <div class="block-list">
              <div class="subtitle">Механизированная полусухая стяжка пола по немецкой технологии выполняется в несколько этапов:</div>
              <div class="list"><ul>
              <li>Подготовка пола, который проверяется на наличие отслоившихся участков основания из цемента, на полу сбиваются выпуклости, убираются трещины.</li>
              <li>Укладка ленты и маяков. Благодаря пленке стяжка лучше изолирует звук и служит дольше</li>
              <li>Приготовление раствора в растворонасосе</li>
              <li>Подача строительной смеси пневмонагнетателем к месту монтажных работ</li>
              <li>Укладка раствора с последующим устранением маяков. Используя лазерные уровни, пол равномерно укладывают и при необходимости делают так называемую разуклонку, обеспечивающую сток воды</li>
              <li>Механизированная затирка стяжки затирочной машиной, под действием которой поверхность становится плотнее и ровнее</li>
              </ul>
              </div>
              </div>    
          </div>
            <!-- Блок 3 -->
          <div id="tab_03" class="tabs-block" :class="{color_tab: tabVis.three }" :style="{ left: (calcLeft + 210) + '%' }">
              <div class="block-list">
              <div class="subtitle">Преимущества устройства пола по технологии полусухой стяжки:</div>
              <div class="list"><ul>
              <li>Практически безупречно ровная поверхность. Основание, гладкое на 100%, идеально подходит для укладки паркета, ковролина, линолеума, ламината и других материалов.</li>
              <li>Нет необходимости в финишном выравнивании. Использование затирочной машины исключает образование пустот в стяжке, трещин</li>
              <li>Необязательно использовать гидроизоляционные материалы в процессе монтажных работ, так как технология исключает вероятность протечки. Стяжка из смеси с минимальным количеством воды быстро высыхает и на 4-й день полностью готова к укладке керамической плитки, на 20-28-й – к укладке паркета в зависимости от толщины покрытия. Прежде чем укладывать материал, в обязательном порядке контролируют влажность стяжки </li>
              <li>Высокая ударопрочность и устойчивость к механическим нагрузкам становится возможной благодаря фиброволокну в составе смеси для стяжки</li>
              <li>Возможность укладывать стяжку в любых условиях вне и внутри помещений. Допустимая влажность в пределах 60-95%, температура воздуха от -5°С до 40°С. Укладка может проводиться на наклонных поверхностях, вокруг труби отверстий в полу, поскольку раствор не обладает текучестью</li>
              <li>Доступная стоимость стяжки. Благодаря механизации укладки ручной труд практически не используется, поэтому цена квадратного метра работы невысока</li>
              </ul>
              </div>
              </div>
          </div>
        </div>
      </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'How',
    data() {
        return {
            tabVis: {
                one: true,
                two: false,
                three: false
            },
            calcLeft: 0,
        }
    },
    methods: {
        activateTab(n){
                if (n === 0) {
                    this.tabVis.one = true,
                    this.tabVis.two = false,
                    this.tabVis.three = false,
                    this.calcLeft = 0;
                                }
                else if (n === 1) {
                    this.tabVis.one = false,
                    this.tabVis.two = true,
                    this.tabVis.three = false
                    this.calcLeft = -105;
                } else if (n === 2) {
                    this.tabVis.one = false,
                    this.tabVis.two = false,
                    this.tabVis.three = true
                    this.calcLeft = -205;
                }
            }
    },
    computed: {

        }
    }

</script>

<style>

.how-content{
    margin: 0 auto;
    margin-top: 2.5vh;
    color: #484848;
}
.how-wrapper{
    margin: 10vh auto;
}
.how-title{
    text-align: center;
    padding: 35px;
    font-size: 3vh;
    color: #484848;
}
.how-title-border{
    width: 0px;
    height: 2px;
    margin: auto;
    background: #ffc107;
    margin-bottom: 1vh;
    position: absolute;
    top: 50px;
    transition: all 0.5s ease 0s;
}
.border_on{
    width: 60px;
}

.how-blocks{
    margin: 0 auto;
    max-width: 95%;
}
.how-tabs-container{

}
.tabs-body{
    position: relative;
}
.tabs-items{
    display: flex;
    font-size: 2em;

}
.tabs-item {
    flex: 0 1 33.333%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: rgb(211, 211, 211);
    z-index: 2;
    transition: all 0.4s ease 0s;
    position: relative;
    cursor: pointer;
}
.tabs-block{
    position: absolute;
    padding: 10px;
    transition: all 0.4s ease 0s;
    color: rgba(0, 0, 0, 0);
}
.tabs-block .list ul li{
    list-style: none;
}
.list li{
    position: relative;
}
.list li:before{
    content: '';
    background-color: #ffc107;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: -16px;

}
.tabs-block:nth-child(1){
    top: 0;
    left: 0;
}
.tabs-block:nth-child(2){
    top: 0;
    left: -100%;
}
.tabs-block:nth-child(3){
    top: 0;
    left: 100%;
}
.color_tab{
    color: black;
}
.title{
    font-size: 2em;
    text-align: center;
    margin-bottom: 1em;
}
.block-list {
    padding: 10px;
    margin-top: 40px;
}

.list ul li{
    font-size: 21px;
}
.subtitle {
    padding-left: 10px;
    font-size: 28px;
    margin-bottom: 10px;
}
.list ul li{
    margin-top: 5px;
}

@media (max-width: 1460px){
    .subtitle,
    .list ul li{
    font-size: 1.7em;
    }
}
@media (max-width: 1010px){
    .subtitle,
    .list ul li{
    font-size: 1.3em;
    }
}
@media (max-width: 640px){
    .subtitle,
    .list ul li{
    font-size: 1.2em;}
    .tabs-item{
    font-size: 18px;
    }
}
@media (max-width: 550px){
        .subtitle,
    .list ul li{
    font-size: 1.0em;}
    .how-wrapper{
    margin: 5vh auto;
}
}
@media (max-width: 380px){
        .subtitle,
    .list ul li{
    font-size: 0.9em;}
}
@media (max-width: 321px){
    .subtitle,
    .list ul li{
    font-size: 0.9em;}
    .how-wrapper{
    margin: 0 auto;
}
}
</style>