<template>
  <h1>about.vue</h1>
  <h6>{{ title }}</h6>
  <MyComponent></MyComponent>
</template>

<script setup lang="ts">

import MyComponent from 'components/MyComponent.vue';

const title = ref('About Page');

</script>

<route lang="yaml">
meta:
  requiresAuth: true
</route>
