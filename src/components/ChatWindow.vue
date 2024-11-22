<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="documents" class="space-y-4">
      <div
        v-for="doc in documents"
        :key="doc.id"
      >
        <span>
          {{ doc.createdAt.toDate() }}
        </span>

        <span>
          {{ doc.name }}
        </span>

        <span>
          {{ doc.message }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import getCollection from '@/composables/getCollection';
import { onUnmounted } from 'vue';

export default {
    name: 'ChatWindow',
    setup() {
       const { documents, error, unsubscribe } = getCollection('messages');
       console.log(documents)

       onUnmounted(() => {
           unsubscribe();
       });

       return {error, documents}
    }
}
</script>