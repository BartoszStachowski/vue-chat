<template>
  <Navbar />
  <div class="container px-0 md:px-12  mx-auto">
    <div class="text-white">Chatroom</div>
    <ChatWindow />
    <NewChatForm />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';

export default {
  name: 'Chatroom',
  components: {
    Navbar,
    NewChatForm,
    ChatWindow,
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
