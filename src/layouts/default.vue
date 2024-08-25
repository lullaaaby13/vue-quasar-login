<template>
  <q-layout>
    <div class="d-flex q-gutter-lg q-pa-md">
      <q-btn to="/" color="primary" label="홈" />
      <q-btn to="/" color="primary" label="로그인해야 보이는 메뉴" />

      <q-btn
        v-if="!store.isAuthenticated"
        to="/login"
        color="secondary"
        label="로그인"
      />

      <q-btn v-else @click="onLogoutClick" color="info" label="로그아웃" />
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useAuthStore } from 'stores/auth.store.ts';
import { useRouter } from 'vue-router';

let store = useAuthStore();
let router = useRouter();

const onLogoutClick = () => {
  store.logout();
  router.replace('/login')
};
</script>
