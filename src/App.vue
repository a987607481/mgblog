<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import Header from './common/header.vue'
import Footer from './common/footer.vue'
</script>

<style></style>
