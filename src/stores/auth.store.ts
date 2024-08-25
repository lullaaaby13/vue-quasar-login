import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {

  const isAuthenticated = ref(false);
  const accessToken = ref('');
  let user = reactive({});

  const login = async (username, password) => {
    if (username === 'admin' && password === 'admin') {
      isAuthenticated.value = true;
      accessToken.value = '123456';
      user = { username: 'admin' };
    }

  }

  const logout = () => {
    isAuthenticated.value = false;
    user = {};
  };

  return { isAuthenticated, user, login, logout };
});
