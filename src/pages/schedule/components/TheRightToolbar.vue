<template>
  <div class="column content-start q-gutter-sm q-pl-md">
    <q-btn icon="event_available" round color="green-8" @click="finishedDateSelectShow=true">
      <q-tooltip class="bg-green-8" anchor="center right" self="center left">工作完成情况</q-tooltip>
    </q-btn>
    <q-btn icon="edit_calendar" round color="primary" @click="unfinishedDateSelectShow=true">
      <q-tooltip class="bg-primary" anchor="center right" self="center left">工作计划</q-tooltip>
    </q-btn>
    <q-btn icon="print" round color="orange"/>
    <q-btn icon="open_in_full" round color="primary"/>
    <q-btn icon="format_bold" round color="primary"/>
  </div>
  <q-dialog v-model="finishedDateSelectShow">
    <TheDateSelector
      :selected-days="finishedDays"
      color="green-8"
      subtitle="选取日期填写"
      title="工作完成情况"
      @update:selectedDays="onFinishedDaysChanged"/>
  </q-dialog>
  <q-dialog v-model="unfinishedDateSelectShow">
    <TheDateSelector
      :selected-days="unfinishedDays"
      color="primary"
      subtitle="选取日期填写"
      title="工作计划"
      @update:selectedDays="onUnfinishedDaysChanged"/>
  </q-dialog>
</template>

<script setup>
import TheDateSelector from "pages/schedule/components/TheDateSelector.vue";
import { ref } from "vue";

const props = defineProps(["finishedDays", "unfinishedDays"]);

const emits = defineEmits(["update:finishedDays", "update:unfinishedDays"]);

const finishedDateSelectShow = ref(false);
const unfinishedDateSelectShow = ref(false);

const onFinishedDaysChanged = (value) => {
  emits("update:finishedDays", value);
};

const onUnfinishedDaysChanged = (value) => {
  emits("update:unfinishedDays", value);
};
</script>

<style lang="scss" scoped>

</style>
