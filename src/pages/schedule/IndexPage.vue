<template>
  <q-page>
    <div class="row q-pa-md">
      <!--      <div class="col-10">-->
      <!--        <TheDateBar/>-->
      <!--      </div>-->
      <div class="col-1"/>
      <div class="col-10">
        <TheScheduleTable :finished-days="finishedDays" :unfinished-days="unfinishedDays"/>
      </div>
      <div class="col-1">
        <TheRightToolbar v-model:finished-days="finishedDays" v-model:unfinished-days="unfinishedDays"/>
        <!--        <TheDateSelector @daysChanged="onDaysChanged"/>-->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import TheScheduleTable from "pages/schedule/components/TheScheduleTable.vue";
import { ref } from "vue";
import { date } from "quasar";
import TheRightToolbar from "pages/schedule/components/TheRightToolbar.vue";

const {
  formatDate,
  addToDate,
} = date;

const finishedDays = ref([formatDate(Date.now(), "YYYY/MM/DD")]);
const unfinishedDays = ref([formatDate(addToDate(Date.now(), { days: 1 }), "YYYY/MM/DD")]);

</script>

<style lang="scss" scoped>

</style>
