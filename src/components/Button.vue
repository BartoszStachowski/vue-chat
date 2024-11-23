<template>
  <button
    :type="type"
    :class="[
      'py-2 px-4 rounded-md text-white focus:ring-2 focus:ring-opacity-50',
      variantClasses,
      sizeClasses,
    ]"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    // secondary / danger
    variant: {
      type: String,
      default: 'primary',
    },
    // small / large
    size: {
      type: String,
      default: 'medium',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const variantClasses = computed(() => {
      switch (props.variant) {
        case 'secondary':
          return 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500';
        case 'danger':
          return 'bg-red-500 hover:bg-red-600 focus:ring-red-500';
        default:
          return 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500';
      }
    });

    const sizeClasses = computed(() => {
      switch (props.size) {
        case 'small':
          return 'text-sm py-1 px-2';
        case 'large':
          return 'text-lg py-3 px-5';
        default:
          return 'text-md';
      }
    });

    const onClick = (event) => {
      emit('click', event);
    };

    return {
      variantClasses,
      sizeClasses,
      onClick,
    };
  },
});
</script>
