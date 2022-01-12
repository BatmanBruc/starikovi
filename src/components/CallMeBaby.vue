<template>
    <div @click="$emit('call', -300, -4)" :class='{call_on: callOn}' class="call-me-baby" @mouseout="callMeBabyON" @mouseleave='callMeBabyOFF'>
        <label class='qn-call' for="call-me-baby" :class="{active_qn: qnCall}">
            Заказать звонок?
        </label>
      <IconCall id="call-me-baby" :color='color'/>
    </div>
</template>

<script>
import IconCall from '../assets/svg/iconcall'
export default {
    name: 'call-me-baby',
    props: {
        level: {
            type: Number
        }
    },
    components: {
        IconCall
    },
    data(){
        return {
            color: '#a74d00',
            qnCall: false,
            callOn: false
        }
    },
    methods: {
        callMeBabyON(){
            this.color = 'orange'
            this.qnCall = true
        },
        callMeBabyOFF(){
            this.color = "#a74d00"
            this.qnCall = false
        }
    },
        watch: {
        level: function() {
                        if (this.level <= -1 && this.level >= -3) {
                this.callOn = true
            } else {this.callOn = false}
        }
        }
    

}
</script>

<style>
.call-me-baby{
    position: absolute;
    right: 30px;
    bottom: 30px;
    z-index: 50;
    width: 100px;
    height: 80px;
    display: none;
    cursor: pointer;
}
#call-me-baby{
    z-index: 4;
    width: 90px;
    position: absolute;
    top: 0px;
    left: 10px;
}
.call_on{
    display: block;
}
.qn-call{
    position: relative;
    top: 22px;
    left: -120px;
    width: 200px;
    height: 100px;
    font-size: 2em;
    color: rgba(0, 0, 0, 0);
    transition: all 0.2s ease 0s;
    line-height: 20px;

}
.active_qn{
    color: black;
    z-index: 3;
}
@media (max-width: 426px){
    .call-me-baby{
        width: 70px;
        bottom: 20px;
        right: 42px;
    }
    #call-me-baby{
    width: 60px;
    }
}   
@media (max-width: 415px){
        #call-me-baby{ display: none;
        }
}
</style>