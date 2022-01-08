<template>
    <div class="block block-orange">
            <div class="title">Цены и условия <div class="block-title-border"></div></div>
            <div class="block-content">
                <div class="cards">
                    <div class="mini-card">
                        <div class="mini-card-icon">
                            <rubleIcon/>
                        </div>
                        <div class="mini-card-title">Цена начинается от 40000₽</div>
                    </div>
                    <div class="mini-card">
                        <div class="mini-card-icon">
                            <karandashlinerIcon/>
                        </div>
                        <div class="mini-card-title">800₽ за квадратный метр</div>
                    </div>
                    <div class="mini-card">
                        <div class="mini-card-icon">
                            <buildermanIcon/>
                        </div>
                        <div class="mini-card-title">Вы моежете вызвать мастера для расчета</div>
                    </div>
                    <div class="mini-card">
                        <div class="mini-card-icon">
                            <homeIcon/>
                        </div>
                        <div class="mini-card-title">Подача раствора на высоту до 100 метров</div>
                    </div>
                </div>
                <div class="cal">
                    <div class="cal-input"><input id="cal-input" @keydown="pressInput" v-model="inputNum" type="number"/><div class="cal-input-placeholder">квадратный метр</div></div>
                    <div class="cal-fix-price">x<span class="cal-var cal-number">800₽</span>=</div>
                    <div class="cal-sum cal-number" id="cal-sum"> {{resultSum}}₽</div>
                </div>
            </div>
        </div>
</template>

<script>
import buildermanIcon from '../assets/svg/builderman'
import homeIcon from '../assets/svg/home'
import karandashlinerIcon from '../assets/svg/karandashliner'
import rubleIcon from '../assets/svg/ruble'

export default {
  name: 'Prices',
  components: {
    buildermanIcon,
    homeIcon,
    karandashlinerIcon,
    rubleIcon
  },
  data(){
      return {
          inputNum: '',
          resultSum: '40000',
      }
  },
  methods: {
  },
  watch: {
      inputNum() {
            if(this.inputNum == ''){
                this.resultSum = 40000
                return
            }
            let sum = this.inputNum * 800;
            if(sum < 40000)
                this.resultSum = 40000
            else
                this.resultSum = sum
      }
  }
}

</script>

<style>

</style>
