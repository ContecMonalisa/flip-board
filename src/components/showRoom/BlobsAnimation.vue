<script setup lang="ts">

</script>

<template>
<div class="blobs">
  <div class="blob">A</div>
  <div class="blob">B</div>
  <div class="blob">C</div>
  <svg id="gooeyTest">
    <filter id="gooey">
      <feGaussianBlur in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
      ></feGaussianBlur>
      <feColorMatrix in="blur"
                     values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                     result="gooey"
      ></feColorMatrix>
      <feComposite in="SourceGraphic"
                   in2="gooey"
                   operator="atop"
      ></feComposite>
    </filter>
  </svg>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/_color";
$box-width: 80px;

@mixin flex-row-center() {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@mixin position-center-middle($width, $height) {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -$width/2;
  margin-top: -$height/2;
}
@mixin ellipse($width, $height, $radius, $backColor: #000, $fontColor: #fff) {
  width: $width;
  height: $height;
  border-radius: $radius;
  background-color: $backColor;
  color: $fontColor;
}

@keyframes blob-left-anim {
  0% {
    transform: scale(1, 1) translateX(0)
  }
  50% {
    transform: scale(0.9, 0.9) translateX(-(calc($box-width / 2) + 80px))
  }
  100% {
    transform: scale(0.9, 0.9) translateX(-(calc($box-width / 2) + 80px))
  }
}
@keyframes blob-right-anim {
  0% {
    transform: scale(1, 1) translateX(0)
  }
  80% {
    transform: scale(0.9, 0.9) translateX(calc($box-width / 2) + 80px)
  }
  100% {
    transform: scale(0.9, 0.9) translateX(calc($box-width / 2) + 80px)
  }
}

.blobs {
  position: relative;
  width: 100%;
  height: 80px;
  padding: 10px 0;
  // Gooey 필터는 컨테이너에 적용합니다.
  filter: url("#gooey");

  .blob {
    @include flex-row-center();
    @include position-center-middle(80px, 80px);
    @include ellipse(80px, 80px, 10px, $lightgray, $main_bg);
    font-size: 25px;
    font-weight: bold;

    &:nth-child(1) {
      animation-name: blob-left-anim;
      animation-duration: 1500ms;
      animation-delay: 0s;
      animation-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    &:nth-child(3) {
      animation-name: blob-right-anim;
      animation-duration: 2000ms;
      animation-delay: 1s;
      animation-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
}
</style>
