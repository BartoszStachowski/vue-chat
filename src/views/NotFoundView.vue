<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-6xl font-bold text-white mb-4">404</h1>
    <p class="text-lg text-white mb-8 text-center">
      Oops! The page you're looking for doesn't exist.
    </p>
    <Button size="large" @click="goToHome">Go back to Home</Button>
  </div>
</template>
<script>
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';
export default {
  name: 'NotFoundView',
  components: {
    Button,
  },
  setup() {
    const router = useRouter();

    const goToHome = () => {
      router.push({ name: 'Home' });
    };

    return {
      goToHome,
    };
  },
};
</script>
