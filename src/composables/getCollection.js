import { ref, watchEffect } from 'vue';
import { db } from '@/firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const getCollection = (collectionName) => {
  const documents = ref([]);
  const error = ref(null);

  try {
    const collectionRef = query(collection(db, collectionName), orderBy('createdAt'));

    // set listener
    const unsubscribe = onSnapshot(
      collectionRef,
      (snapshot) => {
        const results = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        documents.value = results;
        error.value = null;
      },
      (err) => {
        console.error('Error fetching documents: ', err.message);
        error.value = 'Could not fetch the data';
        documents.value = [];
      }
    );

    watchEffect((onInvalidate) => {
      onInvalidate(() => {
        console.log('unsub');
        unsubscribe();
      });
    });

    return { documents, error };
  } catch (err) {
    console.error('Error fetching documents: ', err.message);
    error.value = 'Could not fetch the data';
    documents.value = [];
    return { documents, error };
  }
};

export default getCollection;
