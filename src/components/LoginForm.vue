<template>
  <div class="flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Sign in</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <Input
            v-model="email"
            autocomplete="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            label="Email"
            required
          />
        </div>

        <div class="mb-4">
          <Input
            v-model="password"
            autocomplete="current-password"
            type="password"
            id="password"
            placeholder="Enter your password"
            label="Password"
            required
          />
        </div>

        <div class="text-red-600 mb-2">{{ error }}</div>
        <Button type="submit" class="w-full">Sign in</Button>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

import useLogin from '@/composables/useLogin';

export default {
  name: 'LoginForm',
  components: {
    Input,
    Button,
  },
  setup(props, { emit }) {
    const email = ref('');
    const password = ref('');

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        emit('login');
      }
    };

    return {
      email,
      password,
      error,
      handleSubmit,
    };
  },
};
</script>
<style></style>
