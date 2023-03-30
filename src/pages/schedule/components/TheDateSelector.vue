<template>
  <q-date
    :model-value="selectedDays"
    @update:model-value="onDaysChanged"
    :locale="localeOptions"
    multiple
    default-view="Calendar"
    today-btn
    :color="color"
    text-color=""
    event-color=""
  >
  </q-date>
</template>

<script setup>
import { date } from "quasar";

const props = defineProps(["selectedDays", "color"]);

const emits = defineEmits(["update:selectedDays"]);

const localeOptions = {
  days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  pluralDay: "天",
};

const onDaysChanged = (value, reason, details) => {
  if (value === null) value = [];
  emits("update:selectedDays", value.sort());
};
</script>

<style lang="scss" scoped>

</style>
