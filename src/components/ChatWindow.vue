<template>
  <div class="chat-window">
    <div v-if="error" class="text-red-500 font-semibold">
      {{ error }}
    </div>

    <div v-if="documents" class="messages space-y-4">
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
import { onUnmounted, computed } from 'vue';
import { formatDistanceToNow } from 'date-fns';

export default {
  name: 'ChatWindow',
  setup() {
    const { documents, error, unsubscribe } = getCollection('messages');

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    onUnmounted(() => {
      unsubscribe();
    });

    return { error, documents, formattedDocuments };
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
