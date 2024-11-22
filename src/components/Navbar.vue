<template>
  <nav class="bg-blue-500 text-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-lg font-bold">
        <a href="/">MyApp</a>
        <p v-if="user?.email">{{ user.email }}</p>
      </div>

      <!-- User Actions -->
      <div>
        <button
          @click="handleClick"
          class="px-4 py-2 bg-white text-blue-500 rounded-md shadow hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log('user logged out');
      }
    };

    return {
      logout,
      handleClick,
      user,
    };
  },
};
</script>

<style scoped>
/* Możesz dodać niestandardowe style tutaj, jeśli potrzeba */
</style>
