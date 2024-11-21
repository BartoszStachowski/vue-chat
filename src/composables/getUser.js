import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue';

const user = ref(null);

onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    user.value = currentUser;
    console.log('User logged in:', currentUser.email);
  } else {
    user.value = null;
    console.log('No user logged in');
  }
});

const getUser = () => {
  return { user };
};

export default getUser;
