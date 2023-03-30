<template>
  <div class="text-center q-mb-md">
    <span class="text-h4">{{ today.split(" ")[0] }}调度单</span>
  </div>
  <table class="full-width table" border="">
    <tr class="text-subtitle1 text-center text-weight-bold bg-grey-4">
      <td style="width: 10%">日期</td>
      <td style="width: 40%">{{ today }}</td>
      <td style="width: 10%">阶段</td>
      <td style="width: 40%">--</td>
    </tr>
  </table>
  <q-scroll-area
    class="full-width"
    style="height: calc(100vh - 50px - 32px - 44px - 56px)"
  >
    <TheSingleFinishedDayTable v-for="day in finishedDays" :key="day" :day="day"/>
    <TheSingleUnfinishedDayTable v-for="day in unfinishedDays" :key="day" :day="day"/>
  </q-scroll-area>

</template>

<script setup>
import { date } from "quasar";
import TheSingleFinishedDayTable from "pages/schedule/components/TheSingleFinishedDayTable.vue";
import TheSingleUnfinishedDayTable from "pages/schedule/components/TheSingleUnfinishedDayTable.vue";
import { testApi } from "src/api/schedules.js";

const {
  formatDate,
} = date;

const props = defineProps(["finishedDays", "unfinishedDays"]);

const today = formatDate(Date.now(), "YYYY年MM月DD日 星期dd", {
  days: ["日", "一", "二", "三", "四", "五", "六"],
  daysShort: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
});

testApi().then(res=>{
  console.log(res)
})

</script>

<style lang="scss" scoped>
.table {
  border-collapse: collapse;
  border-color: rgba(0, 0, 0, 0.1);

  tr {
    line-height: 40px;
  }
}
</style>
