<template>
    <div class="block block-gallery">
      <div class="title gallery-title">Галерея</div>
        <slider/>
    </div>
</template>

<script>
import slider from '../components/slider'

export default {
  name: 'Gallery',
  components: {
    slider
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
