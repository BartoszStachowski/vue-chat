<template>
  <div class="bg-neutral-50 py-6 px-5">
    <div v-if="error" class="text-red-500 font-semibold">
      {{ error }}
    </div>

    <div
      v-if="documents"
      class="messages space-y-4 max-h-[400px] overflow-auto"
      ref="messages"
    >
      <div v-for="doc in formattedDocuments" :key="doc.id" class="my-4 mx-0">
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
import { onUnmounted, computed, onUpdated, ref } from 'vue';
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

    // auto-scroll to bottom
    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages };
  },
};
</script>
