<template>
  <td @dblclick="onDoubleLeftClick">
    <span v-if="!editable">{{ formattedValue }}</span>
    <q-input v-else standout="bg-primary text-white" autofocus dense autogrow
             :model-value="value"
             @update:model-value="onValueUpdate"></q-input>
  </td>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["value", "editable", "index"]);

const emits = defineEmits(["update:value", "update:editable"]);

const formattedValue = computed(() => {
  return props.index ? props.index + "." + props.value : props.value;
});

const onValueUpdate = (val) => {
  emits("update:value", val);
};

const onDoubleLeftClick = () => {
  emits("update:editable", !props.editable);
};

</script>

<style lang="scss" scoped>
span {
  display: block;
  word-break: break-all;
  padding: 11px 12px 8px 12px;
  line-height: 18px;
  min-height: 40px;
  letter-spacing: 0.00937em;
}
</style>
