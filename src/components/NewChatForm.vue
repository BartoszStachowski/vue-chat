<template>
  <form>
    <Textarea
      v-model="message"
      placeholder="Type a message and hit enter to send..."
      @keypress.enter.prevent="handleSubmit"
    />
    <div class="error">{{error}}</div>
  </form>
</template>
<script>
import getUser from '@/composables/getUser';
import { ref } from 'vue';
import { serverTimestamp } from 'firebase/firestore';

import Textarea from '@/components/Textarea.vue';
import useCollection from '@/composables/useCollection';

export default {
  name: 'NewChatForm',
  components: {
    Textarea,
  },
  setup() {
    const message = ref(null);
    const { user } = getUser();
    const { sendDataToFirestore, error } = useCollection('messages');

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: serverTimestamp(),
      };
      await sendDataToFirestore(chat);
      if (!error.value) {
        message.value = '';
      }
    };

    return { message, error, handleSubmit };
  },
};
</script>
