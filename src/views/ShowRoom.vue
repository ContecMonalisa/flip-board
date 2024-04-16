<script setup lang="ts">

import BlobsAnimation from '@/components/showRoom/BlobsAnimation.vue';
import FlipBoard from '@/components/showRoom/FlipBoard.vue';
</script>

<template>
<div class="show_room_area">
Show Room 입니다.
  <BlobsAnimation/>
  <FlipBoard/>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/_color";

.show_room_area {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
</style>
