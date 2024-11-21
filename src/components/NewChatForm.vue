<template>
  <form>
    <Textarea
      v-model="message"
      placeholder="Type a messag and hit enter to send..."
      @keypress.enter="handleSubmit"
    />
  </form>
</template>
<script>
import getUser from '@/composables/getUser';
import { ref } from 'vue';
import { serverTimestamp } from 'firebase/firestore';

import Textarea from '@/components/Textarea.vue';

export default {
  name: 'NewChatForm',
  components: {
    Textarea,
  },
  setup() {
    const message = ref(null);
    const { user } = getUser();
    console.log('user', user);

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: serverTimestamp(),
      };
      console.log(chat);
    };

    return { message, handleSubmit };
  },
};
</script>
