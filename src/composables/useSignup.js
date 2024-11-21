import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/firebase/config';

const error = ref(null);

const signup = async (email, password, name) => {
  error.value = null;

  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (!response) {
      throw new Error('Could not complete the signup');
    }
    const user = response.user;

    await updateProfile(user, {
      displayName: name,
    });

    console.log(response.user);
    error.value = null;

    return user;
  } catch (err) {
    switch (err.code) {
      case 'auth/email-already-in-use':
        error.value = 'This email is already in use.';
        break;
      case 'auth/invalid-email':
        error.value = 'The email address is not valid.';
        break;
      case 'auth/weak-password':
        error.value = 'The password is too weak. It must be at least 6 characters.';
        break;
      default:
        alert(`An error occurred: ${error.message}`);
    }
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
