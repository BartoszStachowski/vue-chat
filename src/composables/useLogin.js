import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    const user = response.user;

    console.log(user);

    error.value = null;

    return user;
  } catch (err) {
    console.error(err.message);
    error.value = err.message;
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
