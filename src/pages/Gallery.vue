<template>
    <div class="block block-gallery">
      <div class="title gallery-title">Галерея</div>
        <slider :items="imgs"/>
    </div>
</template>

<script>
import slider from '../components/slider'

export default {
  name: 'Gallery',
  components: {
    slider
  },
  setup(){
      const imgs = [
          {
              src: 'qckFtpW8UHE.jpg',
              alt: 'Пол в квартире'
          },
          {
              src: 'xzUuj234Xqs.jpg',
              alt: 'Пол для квартиры'
          },
          {
              src: 'Zx109Di16MU.jpg',
              alt: 'Работы на крыше'
          },
          {
              src: 'pxTJtHmjn_0.jpg',
              alt: 'Ровный пол в квартире'
          },
          {
              src: 'KVt4XdBCv9w.jpg',
              alt: 'Заливка на крыше'
          },
          {
              src: 'DMkCNqIvxBw.jpg',
              alt: 'Рабочий занимается полами'
          },
          {
              src: 'DMkCNqIvxBw.jpg',
              alt: 'Рабочий смотрит полы'
          },
          {
              src: '8BUzsGNejgQ.jpg',
              alt: 'Рабочий выравнивает пол'
          },
      ]

      return {
          imgs
      }
  }
}

</script>

<style>
.block-gallery {
    background: #0c4235;
    height: 100%;
    padding: 0px 40px;
}
.gallery-title{
    color: #848484;
}
</style>
