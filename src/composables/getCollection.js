import { ref } from 'vue';
import { db } from '@/firebase/config';
import { collection } from 'firebase/firestore';

const getCollection = (collectionName) => {
	const documents = ref(null);
	const error = ref(null);

	try {
		const collectionRef = query(collection(db, collectionName), orderBy('createdAt'));

		// set listener
		const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ ...doc.data(), id: doc.id });
			});
			documents.value = results;
			error.value = null;
		});

		return { documents, error, unsubscribe };
	} catch (err) {
		console.error('Error fetching documents: ', err.message);
		documents.value = null;
		error.value = 'Could not fetch the data';
		return { documents, error };
	}
};

export default getCollection;
