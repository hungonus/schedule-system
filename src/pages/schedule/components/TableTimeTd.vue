<template>
  <td @dblclick="onDoubleLeftClick">
    <span v-if="!editable">{{ value }}</span>
    <q-input v-else standout="bg-primary text-white"
             autofocus dense hide-bottom-space
             :model-value="value"
             @update:model-value="onValueUpdate"
             mask="time" :rules="['time']">
      <template v-slot:append>
        <q-icon name="access_time" size="large" class="cursor-pointer text-white">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time :model-value="value" @update:model-value="(val, season, details)=>onValueUpdate(val)"
                    :default-date="day" landscape format24h>
              <div class="row items-center justify-center">
                <q-btn v-close-popup label="08:10" color="primary" flat @click="onValueUpdate('08:10')"/>
                <q-btn v-close-popup label="08:40" color="primary" flat @click="onValueUpdate('08:40')"/>
                <q-btn v-close-popup label="14:10" color="primary" flat @click="onValueUpdate('14:10')"/>
                <q-btn v-close-popup label="14:40" color="primary" flat @click="onValueUpdate('14:40')"/>
                <q-btn v-close-popup label="19:00" color="primary" flat @click="onValueUpdate('19:00')"/>
                <q-btn v-close-popup label="19:30" color="primary" flat @click="onValueUpdate('19:30')"/>
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </td>
</template>

<script setup>
const props = defineProps(["value", "editable", "day"]);

const emits = defineEmits(["update:value", "update:editable", "updated"]);

const onValueUpdate = (val) => {
  emits("update:value", val);
};

const onDoubleLeftClick = () => {
  emits("update:editable", !props.editable);
};

</script>

<style lang="scss" scoped>

</style>
