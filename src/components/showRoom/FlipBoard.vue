<script setup lang="ts">
import FlipSplite from '@/components/icons/FlipSplite.vue';
</script>

<template>
<div class="flip_board_area">
  <FlipSplite/>
  <div class="flip_item_box">
    <div class="flip_item top">
      <svg class="flip_box">
        <use xlink:href="#_2_top"></use>
      </svg>
    </div>
    <div class="flip_item top to_bottom_front">
      <svg class="flip_box">
        <use xlink:href="#_1_top"></use>
      </svg>
    </div>
    <div class="flip_item top to_bottom_back">
      <svg class="flip_box">
        <use xlink:href="#_2_bottom"></use>
      </svg>
    </div>
    <div class="flip_item bottom">
      <svg class="flip_box">
        <use xlink:href="#_1_bottom"></use>
      </svg>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/_color";

@keyframes flip-down-front {
  0% {
    transform: rotateX(0);
    z-index: 20;
  }
  10% {
    transform: rotateX(0);
    z-index: 20;
  }
  20% {
    z-index: 10;
  }
  30% {
    transform: rotateX(180deg);
    z-index: 10;
  }
  100% {
    transform: rotateX(180deg);
    z-index: 10;
  }
}
@keyframes flip-down-back {
  0% {
    transform: rotateX(0);
    z-index: 10;
  }
  10% {
    transform: rotateX(0);
    z-index: 10;
  }
  20% {
    z-index: 20;
  }
  30% {
    transform: rotateX(180deg);
    z-index: 20;
  }
  100% {
    transform: rotateX(180deg);
    z-index: 20;
  }
}
@mixin bg-sp-svg($value){
  background-image: url(@/assets/icon/flip_splite.svg##{$value});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 0 0;
}

.flip_board_area {
  position: relative;
  width: 100%;
  height: 66px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;

  .flip_item_box {
    position: relative;
    display: grid;
    width: 45px;
    height: 66px;
    margin-right: 1px;
    .flip_item {
      position: absolute;
      width: 100%;
      height: calc(50% - 1px);
      background-color: $flip_item_bg;
      overflow: hidden;
      z-index: 0;
      .flip_box {
        width: 100%;
        height: 100%;
      }
      &.top {
        top: 0;
        left: 0;
        border-radius: 5px 5px 0 0;

        &.to_bottom_front {
          transform-origin: 50% calc(100% + 1px);
          animation-name: flip-down-front;
          animation-duration: 1000ms;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in;
        }
        &.to_bottom_back {
          transform-origin: 50% calc(100% + 1px);
          animation-name: flip-down-back;
          animation-duration: 1000ms;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in;

          .flip_box {
            transform: rotateX(180deg);
          }
        }
      }
      &.bottom {
        bottom: 0;
        left: 0;
        border-radius: 0 0 5px 5px;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
