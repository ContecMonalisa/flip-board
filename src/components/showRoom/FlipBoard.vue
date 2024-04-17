<template>
<div class="flip_board_area">
  <FlipSplite/>
  <template v-for="(letter, index) in setOfLetters" :key="index">
    {{letter}}
    <div class="flip_item_box">
      <div class="divide_line"></div>
      <div class="flip_item upper">
        <svg class="flip_box" :id="index + '_frontUpper'">
          <use href=""/>
        </svg>
      </div>
      <div class="flip_item upper">
        <svg class="flip_box" :id="index + '_backLower'">
          <use href=""/>
        </svg>
      </div>
      <div class="flip_item lower">
        <svg class="flip_box" :id="index + '_frontLower'">
          <use href=""/>
        </svg>
      </div>
      <div class="flip_item upper">
        <svg class="flip_box" :id="index + '_backUpper'">
          <use href=""/>
        </svg>
      </div>
    </div>
  </template>
</div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';
import FlipSplite from '@/components/icons/FlipSplite.vue';

const count = ref<number>(0);
const setOfLetters = ref<string[]>(['0']);
let interval: number;
function divideLetters(letters: number | string) {
  let svgFrontUpper: HTMLElement;
  let svgFrontLower: HTMLElement;
  let svgBackUpper: HTMLElement;
  let svgBackLower: HTMLElement;
  [...String(letters)].forEach((letter, index) => {
    if (document.getElementById(index + '_frontUpper')) {
      svgFrontUpper = document.getElementById(index + '_frontUpper')!;
      (svgFrontUpper.parentNode as HTMLElement).classList.remove('to_lower_front');
      (svgFrontUpper.firstChild as HTMLElement).setAttribute('href', `#_${Number(letter) === 0 ? 9 : Number(letter) - 1}_upper`);
      (svgFrontUpper.parentNode as HTMLElement).classList.add('to_lower_front');
    }
    if (document.getElementById(index + '_frontLower')) {
      svgFrontLower = document.getElementById(index + '_frontLower')!;
      (svgFrontLower.firstChild as HTMLElement).setAttribute('href', `#_${Number(letter) === 0 ? 9 : Number(letter) - 1}_lower`);
    }
    if (document.getElementById(index + '_backUpper')) {
      svgBackUpper = document.getElementById(index + '_backUpper')!;
      (svgBackUpper.firstChild as HTMLElement).setAttribute('href', `#_${letter}_upper`);
    }
    if (document.getElementById(index + '_backLower')) {
      svgBackLower = document.getElementById(index + '_backLower')!;
      (svgBackLower.parentNode as HTMLElement).classList.remove('to_lower_back');
      (svgBackLower.firstChild as HTMLElement).setAttribute('href', `#_${letter}_lower`);
      (svgBackLower.parentNode as HTMLElement).classList.add('to_lower_back');
    }
  });
  setOfLetters.value = [...String(letters)];
}

onMounted(() => {
  divideLetters(count.value);
  interval = setInterval(() => {
    count.value++;
    divideLetters(count.value);
  }, 1000);
});
onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

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
  30% {
    z-index: 10;
  }
  50% {
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
  30% {
    z-index: 20;
  }
  50% {
    transform: rotateX(180deg);
    z-index: 20;
  }
  100% {
    transform: rotateX(180deg);
    z-index: 20;
  }
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
    min-width: 35px;
    width: 35px;
    min-height: 50px;
    height: 50px;
    margin-right: 1px;
    .divide_line {
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      width: 100%;
      height: 2px;
      background-color: $main_bg;
      z-index: 50;
    }
    .flip_item {
      position: absolute;
      width: 100%;
      height: 50%;
      perspective: 150px;
      background-color: $flip_item_bg;
      overflow: hidden;
      z-index: 10;
      .flip_box {
        width: 100%;
        height: 100%;
      }
      &.upper {
        top: 0;
        left: 0;
        perspective-origin: bottom;
        border-radius: 5px 5px 0 0;
      }
      &.lower {
        bottom: 0;
        left: 0;
        perspective-origin: top;
        border-radius: 0 0 5px 5px;
      }

      &.to_lower_front {
        //transition: all 500ms ease-in;
        transform-origin: 50% 100%;
        //transform: rotateX(180deg);
        animation-name: flip-down-front;
        animation-duration: 1000ms;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }
      &.to_lower_back {
        //transition: all 500ms ease-in;
        transform-origin: 50% 100%;
        animation-name: flip-down-back;
        animation-duration: 1000ms;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;

        .flip_box {
          transform-origin: 50% 50%;
          transform: rotateX(180deg);
        }
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
