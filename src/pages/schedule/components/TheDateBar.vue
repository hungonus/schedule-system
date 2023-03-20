<template>
  <div class="row" id="row">
    <q-scroll-area ref="scroll" id="scroll" class="flex" style="height: 100px" :style="{width:scrollWidth+'px'}">
      <div class="row no-wrap">
        <TheDateBarItem v-for="offset in offsetList" :index="offset" :key="offset"></TheDateBarItem>
      </div>
    </q-scroll-area>
    <q-btn style="width: 30px;margin-left: 10px">回到今天</q-btn>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import TheDateBarItem from "pages/schedule/components/TheDateBarItem.vue";

const offsetList = [];
for (let i = -50; i < 50; i++) {
  offsetList.push(i);
}

const scroll = ref(null);
const scrollWidth = ref(0);
onMounted(() => {
  const scrollArea = document.querySelector("#scroll");
  scrollArea.addEventListener("wheel", (e) => {
    const {
      top,
      left,
    } = scroll.value.getScrollPosition();
    scroll.value.setScrollPosition("horizontal", left + e.deltaY);
  });

  scrollWidth.value = document.querySelector("#row").clientWidth - 45;
});
</script>

<style lang="scss" scoped>

</style>
