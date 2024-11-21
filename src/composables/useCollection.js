import { ref } from 'vue';
import { db } from '@/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const useCollection = (collectionName) => {
	const error = ref(null);

	const sendDataToFirestore = async (data) => {
		error.value = null;

		try {
			const docRef = await addDoc(collection(db, collectionName), data);
			console.log('Document written with ID: ', docRef.id);
		} catch (err) {
			console.error('Error adding document: ', err);
			error.value = 'Could not send the data to the server';
		}
	};

	return { error, sendDataToFirestore };
};

export default useCollection;
