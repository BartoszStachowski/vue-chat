<template>
  <div class="flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Sign up</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <Input
            v-model="name"
            type="text"
            id="name"
            placeholder="Enter your name"
            label="Name"
            required
          />
        </div>

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
            autocomplete="new-password"
            type="password"
            id="password"
            placeholder="Enter your password"
            label="Password"
            required
          />
        </div>

        <div class="text-red-600 mb-2">{{ error }}</div>

        <Button type="submit" class="w-full">Sign up</Button>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

import useSignup from '@/composables/useSignup';

export default {
  name: 'SignupForm',
  components: {
    Input,
    Button,
  },
  setup(props, { emit }) {
    const { error, signup } = useSignup();
    const name = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await signup(email.value, password.value, name.value);
      if (!error.value) {
        emit('signup');
      }
    };

    return {
      name,
      email,
      password,
      error,
      handleSubmit,
    };
  },
};
</script>
<style></style>
