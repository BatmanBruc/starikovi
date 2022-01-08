<template>
  <carousel :itemsToShow="3.95" :wrapAround="true">
    <slide v-for="item in items" :key="item">
      <div class="carousel__item"><img :src="'/imgs/photo/' + item"/></div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'slider',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup(){
      const items = [
          'qckFtpW8UHE.jpg',
          'xzUuj234Xqs.jpg',
          'Zx109Di16MU.jpg',
          'pxTJtHmjn_0.jpg',
          'KVt4XdBCv9w.jpg',
          'DMkCNqIvxBw.jpg',
          '8BUzsGNejgQ.jpg'
      ]
      return {
          items
      }
  }
}

</script>

<style>

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
li.carousel__slide.carousel__slide--visible {
    z-index: 2;
}
.carousel__item {
    width: 600px;   
    overflow: hidden;
    height: 385px;
    background: #ffffff;
    border: 1px solid #364637;
    border-radius: 4px;
}
li.carousel__slide.carousel__slide--active.carousel__slide--visible {
    z-index: 3;
}
li.carousel__slide.carousel__slide--next {
    z-index: 1;
}
.carousel__pagination {
    margin-top: 40px;
}
.carousel__viewport {
    overflow: visible;
}
.carousel__item img {
    width: 110%;
    position: absolute;
    left: 0px;
    bottom: 0px;
}
.carousel__prev, .carousel__next {
    background-color: #a74d00!important;
}
</style>
