<template>
    <div class="call-me-baby" @mouseout="callMeBabyON" @mouseleave='callMeBabyOFF'>
      <IconCall id="call-me-baby"/>
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
    cursor: pointer;
}
#call-me-baby{
    z-index: 4;
    width: 90px;
    position: absolute;
    top: 0px;
    left: 10px;
    fill: #a74d00;
    transition: fill 200ms;
}
#call-me-baby:hover{
    z-index: 4;
    width: 90px;
    position: absolute;
    top: 0px;
    left: 10px;
    fill: orange;
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