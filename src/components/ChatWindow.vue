<template>
  <div class="chat-window">
    <div v-if="error" class="text-red-500 font-semibold">
      {{ error }}
    </div>

    <div v-if="formattedDocuments" class="messages space-y-4" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <div class="text-sm text-gray-500">
          {{ doc.createdAt }}
        </div>

        <div class="font-semibold text-gray-800">
          {{ doc.name }}
        </div>

        <div class="text-gray-700">
          {{ doc.message }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getCollection from '@/composables/getCollection';
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from 'date-fns';

export default {
  name: 'ChatWindow',
  setup() {
    const { documents, error } = getCollection('messages');

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time =
            doc.createdAt && typeof doc.createdAt.toDate === 'function'
              ? formatDistanceToNow(doc.createdAt.toDate())
              : 'Unknown time';
          return { ...doc, createdAt: time };
        });
      }
      return [];
    });

    // auto-scroll to bottom
    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}

.single {
  margin: 18px 0;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
