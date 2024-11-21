<template>
  <textarea
    v-bind="attrs"
    :value="modelValue"
    @input="updateValue"
    @keypress="handleKeypress"
    class="textarea"
  ></textarea>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextAreaWithEnter',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue', 'keypress.enter'],
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    handleKeypress(event) {
      if (event.key === 'Enter') {
        this.$emit('keypress.enter', event);
      }
    },
  },
});
</script>

<style scoped>
.textarea {
  width: 100%;
  min-height: 100px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>
