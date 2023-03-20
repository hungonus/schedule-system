<template>
  <q-btn
    no-caps
    class="q-ml-md text-center"
    :color="color"
    :ripple="{ color: 'primary' }"
    style="width: 150px">
    <span>{{ formattedDate }}</span><br>
    <span>{{ shiftDay[newDate.getDay()] }}</span>
  </q-btn>
</template>

<script setup>
import { date } from "quasar";
import { computed } from "vue";

const props = defineProps(["index"]);

const today = new Date();
console.log(today);
const newDate = date.addToDate(today, { days: props.index });
const formattedDate = date.formatDate(newDate, "YYYY年MM月DD日");
const shiftDay = {
  1: "星期一",
  2: "星期二",
  3: "星期三",
  4: "星期四",
  5: "星期五",
  6: "星期六",
  0: "星期日",
};

const color = computed(() => {
  if (newDate.getDate() === today.getDate()) {
    return "green-10"
  }else {
    return [0, 6].indexOf(newDate.getDay()) > -1 ? "grey" : "primary";
  }
});
console.log(newDate);
console.log(newDate.getDay());

</script>

<style lang="scss" scoped>

</style>
