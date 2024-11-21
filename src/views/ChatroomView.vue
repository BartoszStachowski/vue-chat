<template>
  <Navbar />
  <div class="container px-12">
    <div>Chatroom</div>
    <NewChatForm />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';
import NewChatForm from '@/components/NewChatForm.vue';

export default {
  name: 'Chatroom',
  components: {
    Navbar,
    NewChatForm,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' });
      }
    });
  },
};
</script>
