<template>
  <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
  <input
    :id="id"
    :autocomplete="autocomplete"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :value="modelValue"
    @input="onInput"
    class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
  />
  <p v-if="error" class="text-sm text-red-500 mt-1">{{ error }}</p>
</template>
<script>
import { toRefs } from 'vue';

export default {
  name: 'Input',
  props: {
    id: {
      type: String,
      required: true,
    },
    autocomplete: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { id, label, type, placeholder, modelValue, error } = toRefs(props);

    const onInput = (event) => {
      emit('update:modelValue', event.target.value);
    };

    return {
      id,
      label,
      type,
      placeholder,
      modelValue,
      error,
      onInput,
    };
  },
};
</script>
