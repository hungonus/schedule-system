<template>
  <q-page>
    <div class="row q-pa-md justify-center">
      <div class="col-10">
        <TheDateBar/>
      </div>
      <div class="col-10 q-mt-sm">
        <table class="full-width table" border="">
          <tr class="text-subtitle1 text-center">
            <td>日期</td>
            <td>--</td>
            <td>阶段</td>
            <td colspan="2">--</td>
          </tr>
          <tr class="text-subtitle1 text-center">
            <td>系统</td>
            <td>内容</td>
            <td>时间</td>
            <td>负责人</td>
            <td>保障条件</td>
            <td>完成</td>
          </tr>
          <template v-for="system in data" :key="system.id">
            <tr v-for="(entry,index) in system.entries" :key="entry.id" class="text-center">
              <td v-if="index===0" :rowspan="system.entries.length">{{ system.name }}</td>
              <td class="text-left">{{ index + 1 }}.{{ entry.content }}</td>
              <td>{{ entry.time }}</td>
              <td>{{ entry.supervisor }}</td>
              <td>{{ entry.guarantees }}</td>
              <td>
                <q-toggle v-model="entry.is_finished" color="green"/>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import TheDateBarItem from "pages/schedule/components/TheDateBarItem.vue";
import TheDateBar from "pages/schedule/components/TheDateBar.vue";

const data = ref([
  {
    id: 1,
    name: "sys1",
    entries: [
      {
        id: 1,
        content: "123131EWRWER",
        supervisor: "123123",
        time: 123,
        guarantees: "hjishfuihihuih",
        is_finished: true,
      },
      {
        id: 2,
        content: "qweqesafdsafadsfasf",
        supervisor: "123123",
        time: 1231,
        guarantees: "hjishfuihihuih",
        is_finished: true,
      },
    ],
  },
  {
    id: 2,
    name: "sys2",
    entries: [
      {
        id: 3,
        content: "qweqesafdsafadsfasf",
        supervisor: "123123",
        time: 123,
        guarantees: "hjishfuihihuih",
        is_finished: true,
      },
    ],
  },
]);

const slide = ref(1);

const offsetList = [];
for (let i = -50; i < 50; i++) {
  offsetList.push(i);
}
const scroll = ref(null);
onMounted(() => {
  const scrollArea = document.querySelector("#scroll");
  scrollArea.addEventListener("wheel", (e) => {
    const {
      top,
      left,
    } = scroll.value.getScrollPosition();
    scroll.value.setScrollPosition("horizontal", left + e.deltaY);
  });
});


</script>

<style lang="scss" scoped>
.table {
  border-collapse: collapse;
  //border-style: solid;
  //border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);

  tr {
    line-height: 40px;
  }
}
</style>
