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
              src: 'f18eaad4-75e2-4b4d-be0d-788ae2dbaaf3.jpeg',
              alt: 'Заливка крыши'
          },
          {
              src: '3613039d-01e5-4398-999a-e048c3c34e6f.jpeg',
              alt: 'Залитая ровная крыша'
          },
          {
              src: '99dd4c0a-9669-4b93-8b95-bfadb56f8247.jpeg',
              alt: 'Растворонасос для стяжки пола Mortel Meister 5200R'
          },
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
    padding-top: 0px!important;
}
.gallery-title{
    color: #848484;
}
</style>
