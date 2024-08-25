<template>
  <div class="row items-center" style="height: 90vh">
    <q-card class="q-pa-md q-gutter-y-md q-mx-auto q-my-auto" style="width: 400px;">
      <h6>로그인</h6>
      <q-input outlined v-model="username" label="아이디" />
      <q-input outlined v-model="password" label="비밀번호" type="password" />
      <q-btn
        @click="onLoginButtonClick"
        label="로그인"
        color="primary" />
    </q-card>
  </div>
</template>

<script setup lang="ts">

import { useAuthStore } from 'stores/auth.store.ts';

const store = useAuthStore();
const router = useRouter();

const username = ref('');
const password = ref('');

const onLoginButtonClick = async () => {
  await store.login(username.value, password.value);
  router.push('/');
};


</script>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: login

</route>
