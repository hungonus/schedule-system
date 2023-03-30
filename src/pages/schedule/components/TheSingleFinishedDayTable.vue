<template>
  <table class="full-width single-table bg-green-1" border>
    <tr class="text-subtitle1 text-center bg-green-2 text-weight-bold non-selectable" @dblclick="addEntry">
      <td colspan="6">{{ formattedDate }}工作完成情况</td>
    </tr>
    <tr class="text-subtitle1 text-center text-weight-bold">
      <td style="width: 10%">系统</td>
      <td style="width: 40%">内容</td>
      <td style="width: 10%">时间</td>
      <td style="width: 15%">完成情况</td>
      <td style="width: 25%">备注</td>
    </tr>
    <template v-for="system in data" :key="system.id">
      <tr v-for="(entry,index) in system.entries" :key="entry.id" class="text-center"
          @contextmenu.prevent="deleteEntry(index)">
        <td v-if="index===0" class="non-selectable" :rowspan="system.entries.length" @dblclick="addEntry">
          {{ system.name }}
        </td>
        <TableInputTd v-model:value="entry.content" v-model:editable="entry.contentEditable" class="text-left"/>
        <TableTimeTd v-model:value="entry.time" v-model:editable="entry.timeEditable"
                     @update:value="onTimeUpdated(entry)" :day="day"/>
        <td @dblclick="entry.isFinished = !entry.isFinished" @contextmenu.prevent="deleteEntry(index)">
          <span class="non-selectable">{{ entry.isFinished ? "已完成" : "持续进行" }}</span>
        </td>
        <TableInputTd v-model:value="entry.notes" v-model:editable="entry.notesEditable" class="text-left"/>
      </tr>
    </template>
  </table>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { date } from "quasar";
import { cloneDeep } from "lodash/lang.js";
import { random } from "lodash/number.js";
import { sortBy } from "lodash/collection.js";
import TableInputTd from "pages/schedule/components/TableInputTd.vue";
import TableTimeTd from "pages/schedule/components/TableTimeTd.vue";
import { getSystemSchedulesByPlanDates } from "src/api/schedules.js";

const {
  formatDate,
} = date;

const props = defineProps(["day"]);

const formattedDate = computed(() => {
  const date = new Date(props.day);
  return formatDate(date, "YYYY年MM月DD日（星期dd）", {
    days: ["日", "一", "二", "三", "四", "五", "六"],
    daysShort: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  });
});

const emptyData = {
  id: 1,
  name: "system name",
  entries: [],
};

const entryTemplate = {
  id: 1,
  content: "",
  contentEditable: false,
  supervisor: "",
  supervisorEditable: false,
  time: "08:10",
  timeEditable: false,
  supports: "",
  supportsEditable: false,
  isFinished: false,
  isFinishedEditable: false,
  notes: "",
  notesEditable: false,
};

const data = ref([emptyData]);

const addEntry = () => {
  const newEntry = cloneDeep(entryTemplate);
  newEntry.id = random(1, 1000);
  data.value[0].entries.push(newEntry);
};

const deleteEntry = (index) => {
  data.value[0].entries.splice(index, 1);
};

const onTimeUpdated = (entry) => {
  data.value[0].entries = sortBy(data.value[0].entries, "time");
};

onMounted(async () => {
  try {
    const res = await getSystemSchedulesByPlanDates([1, 2], [props.day]);
  } catch (e) {
    console.log(e.toString());
  }
});

</script>

<style lang="scss" scoped>
.single-table {
  border-collapse: collapse;
  border-color: rgba(0, 0, 0, 0.1);
  border-top-width: 0;

  tr {
    height: 42.8px;
    line-height: 30px;
  }
}

:deep(.q-field--standout .q-field__control) {
  background-color: rgba(25, 118, 210, 0.5);
}

:deep(.q-field__native, .q-field__input) {
  color: white;
}
</style>
