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
}
#call-me-baby{
    z-index: 4;
    width: 60px;
    position: absolute;
    top: 0px;
    left: 10px;
}
.call_on{
    display: block;
}
.qn-call{
    position: relative;
    top: -15px;
    left: 0px;
    width: 200px;
    height: 100px;
    font-size: 2em;
    color: rgba(0, 0, 0, 0);
    transition: all 0.5s ease 0s;

}
.active_qn{
    left: -120px;
    color: black;
    z-index: 3;
}
</style>