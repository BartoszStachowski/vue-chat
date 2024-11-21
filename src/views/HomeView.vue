<template>
  <div class="container text-center py-5 px-0 mx-auto">
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <p class="mt-3 text-white">
        No account yet?
        <span
          class="cursor-pointer text-blue-500 font-bold"
          @click="showLogin = !showLogin"
        >
          Sign up
        </span>
        instead
      </p>
    </div>
    <div v-else>
      <SignupForm @signup="enterChat" />
      <p class="mt-3 text-white">
        Already registered?
        <span
          class="cursor-pointer text-blue-500 font-bold"
          @click="showLogin = !showLogin"
        >
          Sign in
        </span>
        instead
      </p>
    </div>
  </div>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';
import SignupForm from '@/components/SignupForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  components: {
    SignupForm,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: 'Chatroom' });
    };

    return {
      showLogin,
      enterChat,
    };
  },
};
</script>

